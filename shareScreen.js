const shareScreen = async () => {
  const options = {
    video: true,
    audio: true,
    surfaceSwitching: 'include',
  };
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (error) {
    console.log(error);
  }

  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'green',
    'green',
  ]);
};
