const mem = require('memoryjs')
const path = require('path')

class ProcessManager
{
    constructor() {}

    async attach(szProcessName) { this.process = await mem.openProcess(szProcessName) }

    async findModule(szModuleName)
    {
        const name = path.parse(szModuleName).name
        const module = await mem.findModule(szModuleName, this.process.th32ProcessID)
        eval(`this.${name} = ${module}`)
    }

    async getModule(szModuleName) { return eval(`this.${path.parse(szModuleName).name}`) }

}

module.exports = ProcessManager