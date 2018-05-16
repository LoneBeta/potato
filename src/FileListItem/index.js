import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Store from 'Store';
import ListItemIcon from 'material-ui/List/ListItemIcon';

const fileIconMap = {
    'js': 'fab fa-js',
    'html': 'fab fa-html5',
    'php': 'fab fa-php',
    'json': 'json-icon',
    'css': 'fab fa-css3-alt'
}

class FileListItem extends React.Component
{
    constructor(props){
        super(props)

        this.fileName = props.file.replace(/^.*[\\\/]/, '');
        this.filePath = props.file;
        this.fileType = this.parseFileType()
    }

    parseFileType(){
        return this.fileName.split('.').pop();
    }

    getFileIcon(){
        if(fileIconMap.hasOwnProperty(this.fileType)){
            return fileIconMap[this.fileType];
        }
        return 'fas fa-file';
    }

    openFileItem(){
        Store.openFileListItem(this.filePath);
    }

    render(){
        return(
            <ListItem button>
                <ListItemIcon><i className={`${this.getFileIcon()} file-icon`}></i></ListItemIcon>
                <ListItemText primary={this.fileName} onClick={this.openFileItem.bind(this)}/>
            </ListItem>
        )
    }
}

export default FileListItem;