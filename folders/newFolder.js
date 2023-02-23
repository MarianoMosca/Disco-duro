"use strict";
const insertFolderQuery = require("../../db/queries/folders/insertFolderQuery");
const insertFileQuery = require("../../db/queries/folders/insertFileQuery");
const { generateError, saveImg } = require("../../helpers");

const newFolder = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      generateError("Faltan campos", 400);
    }
    const idFolder = await insertFolderQuery(name, req.user.id);

    //despues de insertar la carpeta insertamos los archivos
    let fileSend = [];

    //si existe req.files es que hay archivos dentro
    if (req.files) {
      //recorremos los archivos, sólo vamos a permitir hasta 3 archivos en una carpeta
      for (const file of Object.values(req.files).slice(0, 3)) {
        //guardamos los archivos en disco
        const fileName = await saveImg(file);
        // guardamos los ficheros en la base de datos
        const idFile = await insertFileQuery(fileName, idFolder);

        //pusheamos el fichero al array de ficheros
        fileSend.push({
          id: idFile,
          name: fileName,
        });
      }
    }

    res.send({
      status: "ok",
      data: {
        folder: {
          id: idFolder,
          name,
          fileSend,
          idUser: req.user.id,
          createdAt: new Date(),
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newFolder;
