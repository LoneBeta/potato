import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import SaveIcon from 'material-ui-icons/Save';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import CodeIcon from 'material-ui-icons/Code';
import LineStyleIcon from 'material-ui-icons/LineStyle';

import {observer} from 'mobx-react';

import Store from 'Store';

const styles = {
  root: {
    width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  openFile(){
      Store.triggerOpenFiles();
  }

  openChangeLanguageModal(){
    Store.languageSelectModalOpen = true;
  }

  openChangeThemeModal(){
    Store.themeSelectModalOpen = true;
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  saveFile = () => {
    Store.saveActiveTab()
  }

  createNewFile = () => {
    Store.createNewFile()
  }

  changeTheme(value){
    console.log(value);
    Store.activeTheme = value;
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={'potato--bottom-navigation'}>
        <BottomNavigationAction value="new" icon={<i className="fas fa-plus"></i>} onClick={this.createNewFile} />
        <BottomNavigationAction value="Open" icon={<i className="fas fa-folder-open"></i>} onClick={this.openFile}/>
        <BottomNavigationAction value="save" icon={<i className="fas fa-save"></i>} onClick={this.saveFile} />
        <BottomNavigationAction value="code" icon={<i className="fas fa-code"></i>} onClick={this.openChangeLanguageModal}/>
        {/*<BottomNavigationAction value="style" icon={<LineStyleIcon />} onClick={this.openChangeThemeModal} />*/}
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default observer(withStyles(styles)(LabelBottomNavigation));