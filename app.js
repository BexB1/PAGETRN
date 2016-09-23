var express        = require('express');
var port           = process.env.PORT || 3000;
var router         = require('./config/routes');
var morgan          = require('morgan');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');


var app            = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressLayouts);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));


app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
  }
}));

app.use('/', router);

app.listen(port, function() {
  console.log("listening on port 3000");
});