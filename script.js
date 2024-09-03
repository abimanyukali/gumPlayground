const videoEl = document.querySelector('#my-video');
let stream = null;
let mediaStream = null;
const constraints = {
  audio: true,
  video: true,
};

const videoError = (error) => {
  console.log('error', error);
};
const handleVideo = (stream1) => {
  console.log(stream1);
  stream = stream1;
  changeButtons([
    'green',
    'blue',
    'blue',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
  ]);
};

const getMicAndCamera = async (e) => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      { video: true, Audio: true },
      handleVideo,
      videoError
    );
  }
  getDevices()
};


const showMyFeed = (e) => {
  if (!stream) {
    alert('Stream still loading....');
    return;
  }
  console.log('showMyFeed is working');
  videoEl.srcObject = stream;
  const tracks = stream.getTracks();
  console.log(tracks);
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'blue',
    'grey',
    'grey',
    'blue',
  ]);
};

const stopMyFeed = (e) => {
  if (!stream) {
    alert('Stream still loading....');
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track);
    track.stop();
  });
  changeButtons([
    'blue',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
  ]);
};

document
  .querySelector('#share')
  .addEventListener('click', (e) => getMicAndCamera(e));

document
  .querySelector('#show-video')
  .addEventListener('click', (e) => showMyFeed(e));

document
  .querySelector('#stop-video')
  .addEventListener('click', (e) => stopMyFeed(e));
document
  .querySelector('#change-size')
  .addEventListener('click', (e) => changeVideoSize(e));
document
  .querySelector('#start-record')
  .addEventListener('click', (e) => startRecording(e));
document
  .querySelector('#stop-record')
  .addEventListener('click', (e) => stopRecording(e));
document
  .querySelector('#play-record')
  .addEventListener('click', (e) => playRecording(e));

document
  .querySelector('#share-screen')
  .addEventListener('click', (e) => shareScreen(e));
document
  .querySelector('#audio-input')
  .addEventListener('change', (e) => changeAudioInput(e));
document
  .querySelector('#audio-output')
  .addEventListener('change', (e) => changeAudioOutput(e));
document
  .querySelector('#video-input')
  .addEventListener('change', (e) => changeVideo(e));
