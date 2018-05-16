import Store from 'Store';

document.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;
  }, false);
  
document.addEventListener('drop', function (event) {
    event.preventDefault();

    Store.openFile(event.dataTransfer.files[0].path);

    // event.dataTransfer.files.map((file) => {
    //     Store.openFile(event.dataTransfer.files[0].path);
    // });
    return false;
  }, false);