function pauseVideoAndRedirect() {
  const iframe = document.querySelector(".video-container iframe");
  iframe.contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    "*"
  );
  window.open("https://youtu.be/1fv4WObrQZs?si=PC-xR7MFvSe1ojYx", "_blank");
}
