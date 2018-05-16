import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/ext/language_tools'
import {observer} from 'mobx-react';

import Store from 'Store';

import 'brace/mode/php';
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';
import 'brace/theme/cobalt';
import 'brace/theme/crimson_editor';
import 'brace/theme/dawn';
import 'brace/theme/dracula';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import 'brace/theme/github';
import 'brace/theme/gob';
import 'brace/theme/gruvbox';
import 'brace/theme/idle_fingers';
import 'brace/theme/iplastic';
import 'brace/theme/katzenmilch';
import 'brace/theme/kr_theme';
import 'brace/theme/kuroir';
import 'brace/theme/merbivore';
import 'brace/theme/merbivore_soft';
import 'brace/theme/mono_industrial';
import 'brace/theme/monokai';
import 'brace/theme/pastel_on_dark';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/sqlserver';
import 'brace/theme/terminal';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night';
import 'brace/theme/tomorrow_night_blue';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow_night_eighties';
import 'brace/theme/twilight';
import 'brace/theme/vibrant_ink';
import 'brace/theme/xcode';

const fs = window.fs;

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {file: props.file}
    }

    onChange(newValue, event){
        this.state.file.body = newValue
    }

    setDimensions(){
        Store.editorHeight = `${window.innerHeight-48-28}px`;
    }

    componentDidMount(){
        this.setDimensions();
        window.addEventListener("resize", this.setDimensions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.setDimensions.bind(this));
    }

    render(){
        return (
            <AceEditor
                mode={Store.language}
                theme={Store.activeTheme}
                onChange={this.onChange.bind(this)}
                name={"Editor"+Math.floor(Math.random()*100)}
                width='null'
                enableLiveAutocompletion={true}
                enableBasicAutocompletion={true}
                height={Store.editorHeight}
                value={this.state.file.body}
            />
        )
    }
}

export default observer(Editor);