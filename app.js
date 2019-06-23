const express = require('express'),
	  app = express();

const server = app.listen(3000, function() {
	var port = server.address().port;
})

app.get('/', ((req,res) => {
	res.send('DMH');
}));


app.use((req,res) => {
	res.sendStatus(404);	
});