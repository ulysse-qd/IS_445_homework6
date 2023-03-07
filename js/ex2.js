const displayText400 = () => {
  var elem = document.getElementsByClassName("400level");
  for (let i = 0; i < elem.length; i++) {
    console.log(elem[i].textContent)
  }
}
displayText400();