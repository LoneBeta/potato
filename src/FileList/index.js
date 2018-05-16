import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import FolderIcon from 'material-ui-icons/Folder';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Store from 'Store';
import {observer} from 'mobx-react';

class NestedList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <List style={{width:'250px'}} className={'potato--file-list'}>
        {
          Store.directory.map((fileName) => {
            return(
              <ListItem button>
                <ListItemText primary={fileName} />
              </ListItem>
            )
          })
        }
      </List>
    );
  }
}
export default observer(NestedList);