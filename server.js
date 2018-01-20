var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function (req, res, next) {
  var pictures = [
    {
      user:{
        username: 'Kevin',
        avatar: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13178985_986721878072500_655539480996127349_n.jpg?oh=93bc18796f85886646ec6290811737ac&oe=5AB080CB'
      },
      url: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13178985_986721878072500_655539480996127349_n.jpg?oh=93bc18796f85886646ec6290811737ac&oe=5AB080CB',
      likes: 0,
      liked:false,
      createdAt: new Date().getTime()
    },
    {
      user:{
        username: 'Alberto',
        avatar: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13177645_986721941405827_6565890482379551510_n.jpg?oh=2acd8aa4358072dddfe79b05e8c95c68&oe=5AC35F0C'
      },
      url: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13177645_986721941405827_6565890482379551510_n.jpg?oh=2acd8aa4358072dddfe79b05e8c95c68&oe=5AC35F0C',
      likes: 10,
      liked:true,
      createdAt: new Date().getTime(new Date().getDate() -10)
    }
  ];
  setTimeout(function(){
    res.send(pictures);
  },2000)
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})