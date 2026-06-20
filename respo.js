const log = document.getElementById("log");

document.querySelectorAll(".cmd").forEach(btn => {
  btn.addEventListener("click", () => {
    const cmd = btn.dataset.cmd;
    respoCommand(cmd);
  });
});

function respoCommand(cmd) {
  log.innerHTML += `<div>${cmd}</div>`;
  log.scrollTop = log.scrollHeight;
}

