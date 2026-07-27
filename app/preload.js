const { ipcRenderer,contextBridge, shell} = require('electron')


contextBridge.exposeInMainWorld(
    'electron',
    {
        send: (key, data) => {
            ipcRenderer.send(key, data)
        },
        receive: (key, func) => {
            ipcRenderer.on(key, (event, ...args) => func(...args))
        }
    }
)


