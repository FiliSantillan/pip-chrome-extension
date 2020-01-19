// const URL = window.location.origin;

// if (URL == "https://www.youtube.com" || URL == "http://www.youtube.com") {
//   const controls = searchYoutubeControls();
//   const video = getVideos();
//   const button = createButton();
//   renderButton(controls, button);
//   addPip(button, video);
// } else if (
//   URL === "https://www.netflix.com" ||
//   URL === "http://www.netflix.com"
// ) {
//   const controls = searchNetflixControls();
//   const video = getVideos();
//   const button = createButton();
//   renderButtonNetflix(controls, button);
//   addPip(button, video);

//   console.log(`controls: ${controls}, video ${video}, button: ${button}`);
// }

// function searchYoutubeControls() {
//   const RightControls = document.querySelector(".ytp-right-controls");
//   return RightControls;
// }

// function searchNetflixControls() {
//   const netflixButton = document.querySelector(
//     "div[data-uia='report-a-problem-button']"
//   );
//   return netflixButton;
// }

// function getVideos() {
//   return document.querySelector("video");
// }

// function createButton() {
//   const button = document.createElement("button");
//   button.classList.add("pip-button", "ytp-button");
//   button.id = "pip-button";
//   button.innerHTML = "PIP";
//   return button;
// }

// function renderButton(element, button) {
//   element.prepend(button);
// }

// function renderButtonNetflix(element, button) {
//   element.before(button);
// }

// function addPip(element, video) {
//   element.addEventListener("click", async () => {
//     let isVideoInPip = false;

//     if (document.pictureInPictureElement === video) {
//       isVideoInPip = true;
//     }

//     await (isVideoInPip
//       ? document.exitPictureInPicture()
//       : video.requestPictureInPicture()
//     ).catch(console.error);
//   });
// }

let target = document.getElementsByClassName(
  "PlayerControlsNeo__bottom-controls"
);

console.log(target);