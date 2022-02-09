const path = require(`path`)

const keys = require(path.join(__dirname, `./data/Keys`))

const pManager = require(path.join(__dirname, `./managers/ProcessManager`))
const mManager = require(path.join(__dirname, `./managers/MemoryManager`))
const cManager = require(path.join(__dirname, `./managers/CheatManager`))

module.exports = 
{
    Keys: keys,
    CheatManager: cManager,
    ProcessManager: pManager,
    MemoryManager: mManager
}