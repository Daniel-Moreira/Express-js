var express = require('express')
const { spawn } = require('child_process')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Monty Hall Simulator' })
})

router.post('/', function (req, res, next) {
  // Parse the data
  collectData(req.body, result => {
    // Print ok and log the data as a object
    console.log(result)
    // res.end(result)
  })
})

function collectData (body, callback) {
  const pythonProcess = spawn('python', ['./mounty-hall/python/MHP.py', JSON.stringify(body)])
  pythonProcess.stdout.on('data', data => callback(data.toString()))
}

module.exports = router
