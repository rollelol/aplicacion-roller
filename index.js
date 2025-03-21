//Importat modulos y dependencias//
const express = require('express');
const sql = require('mssql');
const app = express();

//Solicitudes json
app.use(express.json());

//Configuración de la conexión a la base de datos Y autenticacion//

const config = {
    user: 'adminsql',
    password: 'galopeo123*',
    server: 'miservidorroller.database.windows.net',
    database: 'mi_base_de_datos'
}

//Obtener los datos de la tabla//
app.get('/usuarios', async (req, res) => {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM Usuarios');
        res.json(result.recordset);
});


   app.listen(3000, () => console.log('API en ejecución'));
