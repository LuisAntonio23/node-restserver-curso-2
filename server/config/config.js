// ==============
// puerto
// ==============
process.env.PORT = process.env.PORT || 3000;

// ==============
// Entorno
// ==============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==============
// base de datos
// ==============

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    //en este caso es la url de la base de datos local
    //solo que me esta fallando la instalacion de mongo
    urlDB = 'mongodb://luis-antonio:Luis123456@ds041394.mlab.com:41394/cafe';
} else {
    urlDB = 'mongodb://luis-antonio:Luis123456@ds041394.mlab.com:41394/cafe';
}

process.env.URLDB = urlDB;