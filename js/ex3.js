const changeParagraphCss = () => {
  var elem = document.getElementsByTagName("p");
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.cssText = "font-weight: bold; background-color: yellow;"
  }
};

changeParagraphCss();