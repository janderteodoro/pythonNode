const localScriptRoute = ({ app, spawn}) => {
  app.post('/localscript', (req, res) => {
    try {
      var dataToSend;
      const python = spawn('py', ['../pythonNode/src/script.py']);

      python.stdout.on('data', (data) => {
        dataToSend = data.toString();
      });

      python.stderr.on('data', data => {
        console.error(`stderr = ${data}`);
      });

      python.on('exit', code => {
        console.log(`child process execute with code ${code}, ${dataToSend}`);
        res.send(dataToSend);
      });
  
    } catch (error) {
      console.error(`ERROR => ${error}`);
      throw new Error(error);
    }
  });
}


module.exports = localScriptRoute;