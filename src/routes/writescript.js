const writescriptRoute = (app, helper) => {
  app.post('/writescript', (req, res) => {
    const { body } = req;
    const { data, filename } = body;
  
    helper.writeFile({ filename, data});
  
    res.json({
      message: 'This is test route'
    });
  });
}

module.exports = writescriptRoute;