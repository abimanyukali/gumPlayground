const audioInputEl = document.querySelector('#audio-input');
const audioOutputEl = document.querySelector('#audio-output');
const videoInputEl = document.querySelector('#video-input');

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    devices.forEach((d) => {
      const option = document.createElement('option');
      option.value = d.deviceId;
      option.text = d.label;
      if (d.kind === 'audioinput') {
        audioInputEl.appendChild(option);
      } else if (d.kind === 'audiooutput') {
        audioOutputEl.appendChild(option);
      } else if (d.kind === 'videoinput') {
        videoInputEl.appendChild(option);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const videoError2 = (error) => {
  console.log('error', error);
};
const handleVideo2 = (stream1) => {
  console.log(stream1);
  stream = stream1;
  const tracks = stream.getAudioTracks();
  console.log(tracks);
};
const changeAudioInput = (e) => {
  const deviceId = e.target.value;
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true,
  };

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia(newConstraints, handleVideo2, videoError2);
  }
};


const changeAudioOutput=async(e)=>{
    await videoEl.setSinkId(e.target.value)
    console.log('Change audio devices !');
}

const videoError3 = (error) => {
    console.log('error', error);
  };
  const handleVideo3 = (stream1) => {
    console.log(stream1);
    stream = stream1;
    const tracks = stream.getVideoTracks();
    console.log(tracks);
  };
const changeVideo = (e) => {
  const deviceId = e.target.value;

  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia(newConstraints, handleVideo3, videoError3);
  }
};


getDevices();
