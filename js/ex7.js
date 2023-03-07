var first = prompt("Enter first integer:");
var second = prompt("Enter second integer:");
if (isNaN(parseInt(first)) || isNaN(parseInt(second))) {
  document.getElementById("content").innerHTML =
    '<span style="color:red;font-weight:bold;">Error!</span> ' +
    '<span>You must enter integers. You entered "' +
    first +
    '" and "' +
    second +
    '". Try again.</span>';
} else if (!Number.isInteger(Number(first)) || !Number.isInteger(Number(second))) {
  document.getElementById("content").innerHTML =
    '<span style="color:red;font-weight:bold;">Error!</span> ' +
    '<span>You must enter integers. You entered "' +
    first +
    '" and "' +
    second +
    '". Try again.</span>';
} else {
  var sum = parseInt(first) + parseInt(second);
  document.getElementById("content").innerHTML =
    '<span>' +
    first +
    ' + ' +
    second +
    ' = </span>' +
    '<span style="color:red;font-weight:bold;">' + sum + '</span>';
}