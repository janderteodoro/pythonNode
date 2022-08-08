const express = require('express');
const app = express();
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const helper = require('./helper');
const routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.json({
    message: 'This is homePage'
  });
});

routes.writescriptRoute(app, helper);
routes.localScriptRoute({ app, spawn });
routes.writeAndRun({ app, spawn, helper });

app.listen(3001, () => {
  console.log('API started in http://localhost:3001');
})