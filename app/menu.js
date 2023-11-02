const { app } = require('electron')
const isMac = process.platform === 'darwin'
const { DEBUG } = require('./const')

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    // { role: 'editMenu' }
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                        { role: 'startSpeaking' },
                        { role: 'stopSpeaking' }
                    ]
                }
            ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ])
        ]
    },
    // { role: 'viewMenu' }
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            {
                role: 'toggleDevTools',
                visible: DEBUG
            },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
            ] : [
                { role: 'close' }
            ])
        ]
    },
    // { role: 'latexMenu' }
    {
        label: 'Latex',
        submenu: [
            {
                label: "Trig",
                submenu: [
                    {
                        label: "sin",
                        click: () => globalThis.webContents.send('inputLatex', "function_sin")
                    },
                    {
                        label: "cos",
                        click: () => globalThis.webContents.send('inputLatex', "function_cos")
                    },

                    {
                        label: "tan",
                        click: () => globalThis.webContents.send('inputLatex', "function_tan")
                    },
                    {
                        label: "csc",
                        click: () => globalThis.webContents.send('inputLatex', "function_csc")
                    },
                    {
                        label: "sec",
                        click: () => globalThis.webContents.send('inputLatex', "function_sec")
                    },
                    {
                        label: "cot",
                        click: () => globalThis.webContents.send('inputLatex', "function_cot")
                    },
                    {
                        label: "sinh",
                        click: () => globalThis.webContents.send('inputLatex', "function_sinh")
                    },
                    {
                        label: "cosh",
                        click: () => globalThis.webContents.send('inputLatex', "function_cosh")
                    },
                    {
                        label: "tanh",
                        click: () => globalThis.webContents.send('inputLatex', "function_tanh")
                    },
                    {
                        label: "coth",
                        click: () => globalThis.webContents.send('inputLatex', "function_coth")
                    },
                    {
                        label: "arcsin",
                        click: () => globalThis.webContents.send('inputLatex', "function_arcsin")
                    },
                    {
                        label: "arccos",
                        click: () => globalThis.webContents.send('inputLatex', "function_arccos")
                    },
                    {
                        label: "arctan",
                        click: () => globalThis.webContents.send('inputLatex', "function_arctan")
                    },
                ],
            },
            {
                label: "Logs",
                submenu: [
                    {
                        label: "exp",
                        click: () => globalThis.webContents.send('inputLatex', "function_exp")
                    },
                    {
                        label: "lg",
                        click: () => globalThis.webContents.send('inputLatex', "function_lg")
                    },
                    {
                        label: "ln",
                        click: () => globalThis.webContents.send('inputLatex', "function_ln")
                    },
                    {
                        label: "log",
                        click: () => globalThis.webContents.send('inputLatex', "function_log")
                    },
                ],
            },
            {
                label: "Limits",
                submenu: [
                    {
                        label: "lim",
                        click: () => globalThis.webContents.send('inputLatex', "function_lim")
                    },
                    {
                        label: "liminf",
                        click: () => globalThis.webContents.send('inputLatex', "function_liminf")
                    },
                    {
                        label: "limsup",
                        click: () => globalThis.webContents.send('inputLatex', "function_limsup")
                    },
                    {
                        label: "maximum",
                        click: () => globalThis.webContents.send('inputLatex', "function_maximum")
                    },
                    {
                        label: "minimum",
                        click: () => globalThis.webContents.send('inputLatex', "function_minimum")
                    },
                    {
                        label: "infinite",
                        click: () => globalThis.webContents.send('inputLatex', "function_infinite")
                    },

                    {
                        label: "varinjlim",
                        click: () => globalThis.webContents.send('inputLatex', "function_varinjlim")
                    },

                    {
                        label: "varprojlim",
                        click: () => globalThis.webContents.send('inputLatex', "function_varprojlim")
                    },
                    {
                        label: "varliminf",
                        click: () => globalThis.webContents.send('inputLatex', "function_varliminf")
                    },
                    {
                        label: "varlimsup",
                        click: () => globalThis.webContents.send('inputLatex', "function_varlimsup")
                    },
                ],
            },
            {
                label: "Operators",
                submenu: [
                    {
                        label: "arg",
                        click: () => globalThis.webContents.send('inputLatex', "function_arg")
                    },
                    {
                        label: "det",
                        click: () => globalThis.webContents.send('inputLatex', "function_det")
                    },
                    {
                        label: "deg",
                        click: () => globalThis.webContents.send('inputLatex', "function_deg")
                    },
                    {
                        label: "dim",
                        click: () => globalThis.webContents.send('inputLatex', "function_dim")
                    },
                    {
                        label: "gcd",
                        click: () => globalThis.webContents.send('inputLatex', "function_gcd")
                    },
                    {
                        label: "hom",
                        click: () => globalThis.webContents.send('inputLatex', "function_hom")
                    },
                    {
                        label: "ker",
                        click: () => globalThis.webContents.send('inputLatex', "function_ker")
                    },
                    {
                        label: "Pr",
                        click: () => globalThis.webContents.send('inputLatex', "function_Pr")
                    },
                    {
                        label: "sup",
                        click: () => globalThis.webContents.send('inputLatex', "function_sup")
                    },
                    {
                        label: "mod",
                        click: () => globalThis.webContents.send('inputLatex', "function_mod")
                    },
                ],
            },
            { type: 'separator' },
        ]
    },
    {
        label: 'Examples',
        submenu: [
            {
                label: "example1",
                click: () => globalThis.webContents.send('openModal', "modal_example1")
            },
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: "help",
                click: () => globalThis.webContents.send('openModal', "modal_help")
            },
            {
                label: "reference",
                click: () => globalThis.webContents.send('openModal', "modal_reference")
            },
        ]
    }
]


exports.menu_template = template