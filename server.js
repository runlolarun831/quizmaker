const express = require('express');
const path =  require('path');//allows you to use file path
const app = express();
const db = require('./db')

/*vvvvvvv everything  app. is part of Express pipeline vvvvvvv
  -runs is sequential order
  -each app. needs a res or a next or page will get stuck  */

// uses path for file path to index.html to direct to homepage render
app.get('/', (req, res,next)=> {
  res.sendFile(path.join(__dirname, 'index.html'))
});

//calls to db.js to getQuiz ->readJSON -from->quiz.json
//try{} handles data   catch{} handles error if no data
app.get('/api/quiz', async(req, res, next)=> {
  try {
    res.send(await db.getQuiz());
  }
  catch(ex){
    next(ex);
  }
});

//sets server to port 3000  -this server will listen for requests coming to this address -console .log to verify
app.listen(3000, ()=> console.log('listening on port 3000'));
