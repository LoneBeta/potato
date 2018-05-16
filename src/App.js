import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import EditorMenu from './EditorMenu';
import EditorWindow from './EditorWindow'
import LanguageSelectionModal from 'LanguageSelectionModal';
import ThemeSelectionModal from 'ThemeSelectionModal';

class App extends Component {
  state = {
    drawerOpen: false,
  };
  
  render() {
    return (
      <div className="App" style={{width:'100%',height:'100%'}}>
        <Sidebar />
        <div>
          <EditorWindow/>
          <LanguageSelectionModal />
          <ThemeSelectionModal />
        </div>
      </div>
    );
  }
}

export default App;
