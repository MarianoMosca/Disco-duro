Este proyecto se crea con el objetivo de emular una aplicación similar a Dropbox, Google Drive, etc. En definitiva, lo que vendría a ser un almacenamiento en la nube.
Instalar:
• Crear una base de datos vacía en una instancia de MySQL local.
• Guardar el archivo .env.example como .env y cubrir los datos necesarios.
• Ejecutar el comando npm install o npm i para instalar las dependencias.
• Ejecutar npm run initDB para crear las tablas necesarias en la base de datos anteriormente creada.
• Ejecutar npm run dev o npm start para lanzar el servidor.

    Base de datos:

• users: id, name, email, password, avatar, createdAt
• folders: id, name, createdAt, idUser
• files: id, idUser, name, createdAt, idFolders, modifiedAt
Endpoints:
Usuarios:
• POST [/users] : Registro de usuario (Juan)
• POST[/users/login] : Login de usuario (Mariano)
• GET [/users] : Devuelve información del usuario (juan)
• PUT[/users] : Editar nombre de usuario o email (juanpe)
• PUT [/users/avatar]: Editar el avatar del usuario(Mariano)
• DELETE [/users] : Eliminar un usuario NO
Folders :
• GET [/folders] : Lista todas las carpetas (kevin)
• DELETE [/folders] : Elimina una carpeta del
• POST [/folders] : Añade una carpeta (kevin)
Files:
• GET [files] : Lista todos los archivos(Mariano)
• GET [files/:idFiles] : Devuelve un fichero. (Juan)
• POST /files] : Añade un archivo (Juanpe)
• DELETE [/files/:idfiles] : Elimina un archivo (Juanpe)