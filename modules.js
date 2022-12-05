const os = require('os')

// info about current user
const user = os.userInfo()


// returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`)

// os module
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMEM: os.totalmem(),
  freeMEM: os.freemem(),
}
console.log(currentOS)

// path module
const path = require('path')

console.log(path.sep)
console.log(path.join)