const express = require('express');
const app = express();
const ejs = require('ejs');
// const PORT = 8080;
const path = require('path');
const exchangesInfo = require('./test.js');
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function() {
  console.log('listening to port ' + app.get('port'));
  });
app.set('views', './views');
app.set('view engine', 'ejs');
// app.listen(PORT, function () {
//   console.log(`app is listening on ${PORT}`);
// });
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req,res) => res.send(exchangesInfo));