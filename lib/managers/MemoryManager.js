const mem = require('memoryjs')

class MemoryManager 
{

    constructor(handle)
    {
        this.handle = handle
    }

    async rpm(address, type)
    {
        try {
            return await mem.readMemory(this.handle, address, type)
        } catch (error) {
            console.error(`[-] Failed to read ${type} @ ${address} \n\n ${error}`)
        }
    }

    async wpm(address, type, buffer)
    {
        try{
            await mem.writeMemory(this.handle, address, buffer, type)
        } catch (error) {
            console.error(`[-] Failed to write ${type} ${buffer} to ${address} \n\n ${error}`)
        }
    }

}

module.exports = MemoryManager