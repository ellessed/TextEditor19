const bInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// store and removr the class from btton
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  bInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
bInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  //prompt is shown
  promptEvent.prompt();
  // shown once
  window.deferredPrompt = null;
  //toggle true,false
  bInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
