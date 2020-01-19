let count = 0;
let icon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="40"><path d="M9 9c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM21 2V0H0v15h2V2h19zm3 2v14H4V4h20zm-2 2H6v10h16V6z" fill="#f9f7f7"/></svg>
`;

function getVideo(resolve) {
  let video = document.querySelector("video");
  count++;

  if (video === null) {
    setTimeout(() => {
      getVideo(resolve);
    }, 200);
  } else {
    resolve(video);
  }
}

function getVideoPromise() {
  return new Promise(resolve => {
    getVideo(resolve);
  });
}

getVideoPromise().then(video => {
  const controls = searchNetflixControls();
  const button = createButton();
  renderButtonNetflix(controls, button);
  addPip(button, video);
});

const URL = window.location.origin;

function searchYoutubeControls() {
  const RightControls = document.querySelector(".ytp-right-controls");
  return RightControls;
}

function searchNetflixControls() {
  const netflixButton = document.querySelector(
    "div[data-uia='report-a-problem-button']"
  );
  return netflixButton;
}

// function getVideos() {
//   return document.querySelector("video");
// }

function createButton() {
  const button = document.createElement("button");
  button.classList.add("pip-button", "ytp-button", "touchable", "PlayerControls--control-element", "nfp-button-control", "default-control-button", "button-nfplayerEpisodes");
  button.id = "pip-button";
  button.innerHTML = icon;
  return button;
}

function renderButton(element, button) {
  element.prepend(button);
}

function renderButtonNetflix(element, button) {
  element.before(button);
}

function addPip(element, video) {
  element.addEventListener("click", async () => {
    let isVideoInPip = false;

    if (document.pictureInPictureElement === video) {
      isVideoInPip = true;
    }

    await (isVideoInPip
      ? document.exitPictureInPicture()
      : video.requestPictureInPicture()
    ).catch(console.error);
  });
}
