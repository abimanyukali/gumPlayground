const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

console.log('video support ');

const changeVideoSize = () => {
  console.log('change Video size is called ');
  stream.getVideoTracks().forEach((track) => {
    const capabilities = track.getCapabilities();
    const height = document.querySelector('#vid-height').value;
    const width = document.querySelector('#vid-width').value;
    const vConstraints = {
      height: {
        exact:
          height < capabilities.height.max ? height : capabilities.height.max,
      },
      width: {
        exact: width < capabilities.width.max ? width : capabilities.max.width,
      },
      //   width: 1000,
      //   frameRate: 60,
      //   aspectRatio: 10,
    };
    track.applyConstraints(vConstraints);
  });
  //   stream.getTracks().forEach((track) => {
  //     const capabilities = track.getCapabilities();
  //     console.log(capabilities);
  //   });
};
