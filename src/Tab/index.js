import Editor from 'Editor'
import React from 'react';
import File from 'File';

class Tab
{
    constructor(filePath){
        this.file = new File(filePath);
        this.title = this.file.name;
        this.editor = <Editor body={this.file.body}/>
    }
}

export default Tab