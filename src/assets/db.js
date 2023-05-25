const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Ruta y nombre del archivo de base de datos
const dbPath = './database.db';

// Conectar a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conexión exitosa a la base de datos SQLite');
    // Iniciar el servidor Express después de establecer la conexión a la base de datos
    startServer();
  }
});

function startServer() {
  const app = express();

  // Ruta para el registro de un nuevo usuario
  app.post('/register', (req, res) => {
    const { username, password, name, age, country } = req.body;

    // Realiza la validación de los campos del formulario de registro aquí

    // Inserta el nuevo usuario en la base de datos
    const insertQuery = `INSERT INTO users (username, password, name, age, country) VALUES (?, ?, ?, ?, ?)`;
    db.run(insertQuery, [username, password, name, age, country], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al registrar el usuario');
      }

      // Registro exitoso
      return res.status(200).send('Usuario registrado correctamente');
    });
  });

  // Otros endpoints y configuraciones del servidor...

  // Inicia el servidor
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
  });
}

// Cerrar la conexión cuando sea necesario
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Conexión cerrada a la base de datos SQLite');
      process.exit(0);
    }
  });
});

