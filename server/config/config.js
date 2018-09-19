process.env.PORT = process.env.PORT || 3000;



process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:abc123@ds163402.mlab.com:63402/cafe';
}

process.env.URLDB = urlDB;