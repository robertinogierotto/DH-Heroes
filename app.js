const path = require ('path'); // se acostumbra a poner los modulos nativos primero
const express = require ('express');
const app = express ();

// inicializacion del servidor -->
app.listen (3030, () => 
console.log ("Servidor Inicializado"));

// rutas de respuesta para peticiones, se puede usar el join -->
app.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, './views/index.html'))
});

app.get('/home', (req, res) => {
    res.sendFile (path.join(__dirname, './views/index.html'))
});

// o el resolve -->
app.get('/babbage', (req, res) => {
    res.sendFile (path.resolve('./views/babbage.html'))
});

app.get('/berners-lee', (req, res) => {
    res.sendFile (path.join(__dirname, './views/berners-lee.html'))
});

app.get('/clarke', (req, res) => {
    res.sendFile (path.join(__dirname, './views/clarke.html'))
});

app.get('/hamilton', (req, res) => {
    res.sendFile (path.join(__dirname, './views/hamilton.html'))
});

app.get('/hopper', (req, res) => {
    res.sendFile (path.join(__dirname, './views/hopper.html'))
});

app.get('/lovelace', (req, res) => {
    res.sendFile (path.join(__dirname, './views/lovelace.html'))
});

app.get('/turing', (req, res) => {
    res.sendFile (path.join(__dirname, './views/turing.html'))
});

//ruta default para direcciones desconocidas, con asterisco como ruta-->
/*
app.get('*', (req, res) => {
    res.send ('404 - page not found')
});
*/

//aclarar la ubicación de nuestros archivos estáticos --> se acostumbra hacerlo al comienzo

app.use(express.static('public'));

//para subir al repo, deberiamos ignorar la carpeta node_modules, para eso, crear un archivo que se llama .gitignore y adentro escribir el nombre del archivo con una /, ej /node_modules.
//Luego cuando se descarga el proyecto, se corre el comando npm i para instalar las dependencias.



