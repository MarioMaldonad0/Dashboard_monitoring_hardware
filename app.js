const express = require('express'),
	  app = express(),
	  si = require('systeminformation');

const server = app.listen(3000, function() {
	var port = server.address().port;
})

app.get('/', ((req,res) => {
	res.send('DMH');
	si.cpu()
	    .then(data => console.log(data))
	    .catch(error => console.error(error));
}));


app.use((req,res) => {
	res.sendStatus(404);	
});