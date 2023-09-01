function appStart() {
  const handleKeydown = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(".board-block[data-index='00']");
    thisBlock.innerText = key;
  };

  window.addEventListener("keydown", handleKeydown);
}
