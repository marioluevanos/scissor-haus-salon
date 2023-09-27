async function main() {
  window.addEventListener("load", setbackgroundColor);

  function setbackgroundColor() {
    const hue = Math.floor(Math.random() * 360);
    const color = `hsla(${hue}, 100%, 95%, 1)`;
    document.body.style.setProperty("--bg", color);
  }
}

main();
