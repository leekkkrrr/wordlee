function appStart() {
  const handleKeydown = (event) => {
    console.log("키가 눌렸습니다!", event);
  };

  window.addEventListener("keydown", handleKeydown);
}
