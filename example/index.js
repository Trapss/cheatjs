const path = require(`path`)

const cheat = require(path.join(__dirname, `../lib`))

const dwLocalPlayer = 0x0

let pManager, cManager, mManager

async function init()
{
    pManager = new cheat.ProcessManager()
    pManager.attach(`csgo.exe`)
    pManager.findModule(`client.dll`)
    pManager.findModule(`engine.dll`)

    cManager = new cheat.CheatManager()
    await cManager.registerFeature(new Feature("Bhop", Keys.VK_F1))
    
    mManager = new cheat.MemoryManager(pManager.process.handle)
}

init().then(async () => {

    cManager.features.forEach(f => {
        console.log(`[${f.getKeyName()}] ${f.getName()}`)
    })

    let client = await pManager.getModule(`client`)
    
    console.log(await mManager.rpm(client + dwLocalPlayer, 'int'))
})