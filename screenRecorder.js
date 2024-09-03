let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  if (!mediaStream) {
    alert('No current feed');
    return
  }
  console.log('start recording');

  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(mediaStream);

  mediaRecorder.ondataavailable = (e) => {
    console.log('Data is available for the media recorder!');
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeRecorder([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'blue',
    'grey',
    'blue',
  ]);
};

const stopRecording = () => {
  if (!mediaRecorder) {
    alert('Please record before stopping!');
    return;
  }
  console.log('stop recording');
  mediaRecorder.stop();
  changeRecorder([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'blue',
    'blue',
  ]);
};

const playRecording = () => {
  if (!recordedBlobs) {
    alert('NO Recording saved');
    return;
  }
  console.log('play recording');
  const superBuffer = new Blob(recordedBlobs);

  const recorderVideoEl = document.querySelector('#other-video');
  recorderVideoEl.src = window.URL.createObjectURL(superBuffer);
  recorderVideoEl.controls = true;
  recorderVideoEl.play();
  changeRecorder([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'green',
    'blue',
  ]);
};
