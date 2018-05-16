import React from 'react';
import { action, extendObservable, computed, observable, autorun } from 'mobx'
import Tab from 'Tab'
import File from 'File';
import FileListItem from 'FileListItem';

const fs = window.externalModules.fs || {};
const dialog = window.externalModules.dialog || {};

const fileTypeMap = {
    'js':'javascript',
    'php':'php',
    'json':'js',
    'html':'html',
    'css':'css',
    'go':'go'
}

class Store {
    constructor() {
        extendObservable(this, {
            files: [new File(null,null)],
            activeTheme: 'tomorrow_night',
            languageSelectModalOpen: false,
            themeSelectModalOpen: false,
            language: 'javascript',
            directory: [],
            editorHeight: null,
            activeTab: 0
        });

        autorun('changeActiveTab',() =>{
            let activeFile = this.files[this.activeTab]
            this.language = fileTypeMap[activeFile.fileType]
        })
    }

    createNewFile = action('createNewFile' ,() => {
        this.files.push(new File(null,null))
    })

    triggerOpenFiles(){
        let files = dialog.showOpenDialog({properties:['openFile']});
        this.openFiles(files);
    }

    triggerOpenDirectory(){
        let directory = dialog.showOpenDialog({properties:['openDirectory']});
        this.openDirectory(directory);
    }

    closeActiveTab = action('closeActiveTab', () => {
        this.files.splice(this.activeTab, 1);
        this.activeTab = this.files.length - 1;
    });

    saveActiveTab = () => {
        let activeFile = this.files[this.activeTab];

        if(!activeFile.path){
            activeFile.path = dialog.showSaveDialog()
        }

        this.saveFile(activeFile.path, activeFile.body)
    }

    saveFile(path, content){
        fs.writeFileSync(path, content, 'utf-8')
    }

    openFiles(files){
        files.map((file)=>{
            this.openFile(file)
        });
    }

    openFileListItem(path){
        if(fs.lstatSync(path).isDirectory()){
            return this.openDirectory([path])
        }
        return this.openFile(path);
    }

    openFile = action(`openFile`, (filePath) => {
        let _this = this;
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) return console.log(err);
            _this.files.push(new File(filePath, data));
            _this.activeTab = _this.files.length -1;
        });
    });

    openDirectory = action('openDirection', (directoryPath) => {
        let _this = this;
        directoryPath = directoryPath[0];

        fs.readdir(directoryPath, function(err, data) {
            if (err) return console.log(err);
            _this.directory = [];

            data.map((file) => {
                _this.directory.push(<FileListItem file={`${directoryPath}/${file}`} />)
            })
        });
    })
}

export default new Store()