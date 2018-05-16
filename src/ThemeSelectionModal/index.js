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

const themes = [
  'ambiance',
  'chaos',
  'chrome',
  'clouds',
  'clouds_midnight',
  'cobalt',
  'crimson_editor',
  'dawn',
  'dracula',
  'dreamweaver',
  'eclipse',
  'github',
  'gob',
  'gruvbox',
  'idle_fingers',
  'iplastic',
  'katzenmilch',
  'kr_theme',
  'kuroir',
  'merbivore',
  'merbivore_soft',
  'mono_industrial',
  'monokai',
  'pastel_on_dark',
  'solarized_dark',
  'solarized_light',
  'sqlserver',
  'terminal',
  'textmate',
  'tomorrow',
  'tomorrow_night',
  'tomorrow_night_blue',
  'tomorrow_night_bright',
  'tomorrow_night_eighties',
  'twilight',
  'vibrant_ink',
  'xcode'
];

class SimpleModal extends React.Component {
  handleClose = () => {
    Store.themeSelectModalOpen = false;
  };

  setTheme = (value) => {
      Store.activeTheme = value;
      this.handleClose();
  }

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={Store.themeSelectModalOpen}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <Typography type="title" id="modal-title">
              Select Language
            </Typography>
            {
                themes.map((theme) => {
                    return(
                        <Button raised color="secondary" onClick={() => {this.setTheme(theme)}}>
                            {theme}
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