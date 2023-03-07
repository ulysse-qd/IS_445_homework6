const bodyNodes = () => {
  var nodes = document.getElementsByTagName("body")[0].childNodes;
  (nodes).forEach(element => {
    console.log(element)
  });
}
bodyNodes();