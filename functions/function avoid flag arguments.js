//// Functions, don't use flag arguments
// Mal
function createFile(name, temp) {
    if (temp) {
      fs.create(`./temp/${name}`);
    } else {
      fs.create(name);
    }
}
// Bien
function createFile(name) {
    fs.create(name);
  }
function createTempFile(name) {
    createFile(`./temp/${name}`);
  }