
const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const port = 3000;
const path = require('path');


// app.use(morgan('combined'))
app.engine('hbs',exphbs({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
})
app.use(express.static(path.join(__dirname, 'public'))); // use http//localhost:3000/image/fish.jpg


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})