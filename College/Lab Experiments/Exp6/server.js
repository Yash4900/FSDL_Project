// import packages
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const router = express.Router();
const app = express();

app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views/'));


// set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
 
var upload = multer({ storage: storage });

var sess;

// upload single file
router.post('/uploadFile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.redirect('/admin');
    
});

//upload multiple file
router.post('/uploadMultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files;
    if (!files) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.redirect('/admin');
});

// upload an image
router.post('/uploadPhoto', upload.single('myImage'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.redirect('/admin');  
});

router.get('/', (req, res) => {
    sess = req.session;
    if (sess.email) {
        return res.redirect('/admin');
    }else{
        res.sendFile('index.html');    
    }
});

router.post('/login', (req, res) => {
    sess = req.session;
    sess.email = req.body.email;
    res.end('done');
});

router.get('/admin', (req, res) => {
    sess = req.session;
    if (sess.email) {
        res.sendFile(__dirname+'/views/fileUpload.html');
        // res.write(`<h1>Hello ${sess.email}</h1>`);
        // res.end('<a href=' + '/logout' + '>Logout</a>')
    }
    else {
        res.write('<h1 style="margin: auto;">Please login first</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    })
});

app.use('/', router);

app.listen(3000, () => {
    console.log('App started');
});