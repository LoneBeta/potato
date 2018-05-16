import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Editor from 'Editor';
import Store from 'Store';
import {BottomNavigation} from '_components'
import { observer } from 'mobx-react'
import HomePage from 'HomePage';

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  componentWillMount(){
      
  }

  handleChange = (event, value) => {
    this.setState({ value });
    Store.activeTab = value;
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    let i = -1;

    return (
      <div style={{paddingLeft:250}}>
        <AppBar position="static" color="default" classes={classes} className={'potato--top-navigation'}>
          <Tabs
            value={Store.activeTab}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
            className="potato--tabs"
          >
          {Store.files.map(file => {
            return <Tab key={file.id} label={file.name} className='potato--tab' />
          })}
          </Tabs>
        </AppBar>
          {Store.files.map((file, tabId) => {
            return Store.activeTab === tabId && <TabContainer><Editor file={file}/></TabContainer>
          })}
          <div>
            <BottomNavigation />
          </div>
      </div>
    );
  }
}

export default observer(ScrollableTabsButtonAuto);