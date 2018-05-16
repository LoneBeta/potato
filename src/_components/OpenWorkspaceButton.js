import React from 'react';
import Button from 'material-ui/Button';
import Store from 'Store';

class OpenWorkspaceButton extends React.Component
{
    openDirectory(){
        Store.triggerOpenDirectory();
    }

    render(){
        return(
            <div>
            {
                Store.directory &&
                <Button raised color="primary" style={{margin: '25% auto',width:'175px'}} onClick={this.openDirectory}>Open Directory</Button>
            }
            </div>
        );
    }
}
export default OpenWorkspaceButton