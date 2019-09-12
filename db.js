const fs = require('fs'); //fs is file system
const FILE = './quiz.json';


//gets called from getQuiz this method if there is data it will take data and parse to string if no data it will send error
const readJSON = ()=> {
  return new Promise(( resolve, reject ) => {
    fs.readFile(FILE, (err, data)=> {
      if(data){
        try {
          resolve(JSON.parse(data.toString()));
        }
        catch(ex){
          reject(ex);
        }
      }
      else {
        reject(err);
      }
    });
  });
}

//gets called from server
const getQuiz =()=> {
  return readJSON();
};
//this allows methods in db to be used(called)in other files thru the use of "require" ex.) look @top of server.js file
module.exports = {
  getQuiz
};
