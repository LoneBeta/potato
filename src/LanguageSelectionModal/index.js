import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Store from 'Store';
import {observer} from 'mobx-react';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    width: 8 * 50,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

const languages = [
    'php',
    'javascript',
    'css',
    'go',
    'html'
];

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    Store.languageSelectModalOpen = false;
  };

  setLanguage = (value) => {
      Store.language = value;
      this.handleClose();
  }

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={Store.languageSelectModalOpen}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <Typography type="title" id="modal-title">
              Select Language
            </Typography>
            {
                languages.map((language) => {
                    return(
                        <Button raised color="secondary" onClick={() => {this.setLanguage(language)}}>
                            {language}
                        </Button>
                    )
                })
            }
          </div>
        </Modal>
      </div>
    );
  }
}

export default observer(SimpleModal);