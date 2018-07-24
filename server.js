

const express = require('express');
const app = express();
const hbs = require('hbs');
//helpers
require('./hbs/helpers/helper')

const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/parciales');

// express hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

	res.render('home', {
		nombre : 'Luis emilio'
	});
});


app.get('/about',(req, res) => {

	res.render('about');
});
 
app.listen(3000, () => console.log(`Escuchando peticiones en el puerto ${ puerto }`));