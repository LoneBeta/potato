class File
{
    constructor(path, file){
        if(!path){
            this.name = 'New File';
            return;
        }
        this.path = path;
        this.id   = this.generateId();
        this.fileType = this.parseFileType(path);
        this.body = file;
        this.name = path.replace(/^.*[\\\/]/, '');
    }

    generateId()
    {
        return Math.random().toString(36).substr(2, 16);
    }

    parseFileType(file){
        return file.split('.').pop();
    }
}

export default File