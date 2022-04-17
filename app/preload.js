const { ipcRenderer,contextBridge, shell} = require('electron')


contextBridge.exposeInMainWorld(
    'electron',
    {
        openExternal: (link) => shell.openExternal(link),
        send: (key, data) => {
            ipcRenderer.send(key, data)
        },
        receive: (key, func) => {
            ipcRenderer.on(key, (event, ...args) => func(...args))
        }
    }
)


