import Store from 'Store'

const template = [
    {
      label: 'File',
      submenu: [
        {
            label: 'Save',
            accelerator: 'Cmd+S',
            click: () => { Store.saveActiveTab(); console.log("Working the save button")}
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {
            label: 'New Tab',
            accelerator: 'Cmd+N',
            click: () => { Store.createNewFile() }
        },
        {
            label: 'Close Tab',
            accelerator: 'Cmd+W',
            click: () => { Store.closeActiveTab() }
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://electronjs.org') }
        }
      ]
    }
]

const menu = window.externalModules.menu.buildFromTemplate(template)

window.externalModules.menu.setApplicationMenu(menu)