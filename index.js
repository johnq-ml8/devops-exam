// Express module
var express = require('express')
var app = express()
const { exec} = require('child_process');
const child = exec('rm', ['output.log']);

// Logging
var fs = require('fs');
//var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
//var log_stdout = process.stdout;

//console.log = function(d) { 
//  log_stdout.write(util.format(d) + '\n');
//  log_file.write(util.format(d) + '\n');
//};

// Define request response in root URL (/) and response with text
app.get('/', function (req, res) {
  res.send('Hello from Gene42 // ' + date_ob)
})

//Launch listening server on port 8080 and consoles the log.
app.listen(8080, function () {
  let date_ob = new Date();
  console.log('App listening on port 8080');
  console.log(date_ob);

  fs.writeFileSync('output.log', 'App launching: ' + date_ob);

// Uncomment this block for super-debugging!!
////////////////////////////////////////////
  const child2 = exec('/bin/sh', ['./debug.sh', 'debug.log']);
  console.log('stdout ', child2.stdout);

  do {
    let date_ob = new Date();
    console.log(date_ob);
    fs.writeFileSync('debug.log', 'Debugging: ' + date_ob);
    //console.log('App listening on port 8080');
    //console.log(date_ob);
  }
  while(true);
///////////////////////////////////////////

})

