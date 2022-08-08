const fs = require('fs');

const writeFile = ({ filename, data }) => {
  fs.writeFile(filename, data, (error) => {
    if (error) console.error(error);
    console.log(`${data} > ${filename}`);
  })
}

module.exports = {
  writeFile
};

