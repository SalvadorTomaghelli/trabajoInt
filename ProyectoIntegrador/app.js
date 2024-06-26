var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); //Instalamos session.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productRouter = require('./routes/product');
const db= require('./db/models')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  { secret:'proyectointegrador_db',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.usuario = req.session.user;
    return next();
  }   
  return next();  
})

app.use(function(req, res, next){
  if(req.cookies.usuarioId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.usuarioId;
    console.log(idDeLaCookie)
    db.Usuarios.findByPk(idDeLaCookie)
    .then( usuario => {
      req.session.user = usuario; 
      res.locals.usuario = usuario; 
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    return next();
  }

})


app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/login', usersRouter);
app.use('/product', productRouter);
app.use('/productAdd', productRouter);
app.use('/profile', usersRouter);
app.use('/profileEdit', usersRouter);
app.use('/register', usersRouter);
app.use('/productEdit', productRouter)
// app.use('/searchResults', searchResultsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
