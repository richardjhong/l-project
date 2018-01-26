var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/test', function(req, res) {
  let x = parseInt(req.body.x) || null
  let y = parseInt(req.body.y) || null

  res.send({"sum": x+y})
})

app.listen(3000, function() {
  console.log('Server is running on port 3000')
});
