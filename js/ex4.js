const createLink = () => {
  const parent = document.querySelector('#links');
  const newDiv = document.createElement('li');
  newDiv.innerHTML = '<a href="https://www.csulb.edu/college-of-business">College of Business</a>';
  const existingLink = document.querySelector('#is');
  parent.insertBefore(newDiv, existingLink);
};

createLink();