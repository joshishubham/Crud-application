//Npm modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var cruds = require('./Database/data.js');
var app = express();

//Mongodb Connections
mongoose.connect('mongodb://localhost:27017/cruds', { useNewUrlParser: true });

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

//Routes

app.get('/', function (req, res) {

      cruds.find(function (err, show,) {
       
       if (err) {

          throw err;
       
       } else {
             
          res.json(show)

       }
   });
});

app.get('/:id', function (req, res) {

      cruds.findOne({_id: req.params.id}, function (err, show,) {
       
       if (err) {

          throw err;
       
       } else {
             
          res.json(show);
            console.log(show);

       }
  })
});

app.post('/', function (req, res) {
     
    var data = new cruds(req.body)

       data.save(function (err, show) {
    	   
    	   if (err) {

    	   	  throw err;
    	   
    	   } else {
               
            res.json(show)

    	   }
          console.log(data)
    });
});

app.put('/:id', function (req, res) {
	    
	var edit = req.body;
	   	  
       cruds.update({_id: req.params.id}, edit, function (err, show) {
	   	  	    
   	  	 if (err) {

    	      throw err;
    	   
    	   } else {
               
            res.json(show)

    	   }
         console.log(edit)
   	});
});

app.delete('/:id', function (req, res) {
          
    cruds.remove({_id: req.params.id}, function (err, show) {
    			
		   if (err) {

    	      throw err;
    	   
    	   } else {
               
            res.json(show)

    	   }
    });
});

//Server
app.listen(7890, console.log("http://localhost:7890"));