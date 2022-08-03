// Importação CommonJS modules
const express = require('express');
const path = require('path');

// Criar aplicação WEB express
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Arquivos estáticos
app.use(express.static(path.join(process.cwd(), 'public')));

//Rotas
app.get('/', (req, res) => {
  //res.send("OK");
  res.status(200).render('index');
});

// Rodar a aplicação express na porta 3000
app.listen(3000);