const writeAndRun = ({ app, spawn, helper }) => {
  app.post('/writeandrun', (req, res) => {
    try {
      const { body } = req;
      const { data, filename } = body;
      helper.writeFile({ filename, data});
      var dataToSend;
      const python = spawn('py', [`../pythonNode/body/${filename}`]);
  
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
    } catch(error){
      console.error(`ERRO => ${error}`);
      throw new Error(error);
    }
  });
}

module.exports = writeAndRun;
