import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import ListItem from 'material-ui/List/ListItem';
import FileList from 'FileList';
import {OpenWorkspaceButton, PotatoLogo} from '_components';

const drawerWidth = 240;

class Sidebar extends React.Component {
  render() {
    return (
        <div>
          <Drawer type="permanent" anchor='left' className={'potato--sidebar'}>
            <PotatoLogo />
            <FileList style={{width:250}}/>
            <OpenWorkspaceButton />
          </Drawer>
        </div>
    );
  }
}

export default Sidebar;