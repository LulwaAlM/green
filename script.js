document.getElementById("contactForm").onsubmit = function () {
  alert("Your inquiry has been submitted.");
  return false;
};


document.getElementsByTagName("tr")[1].onclick = function () {
  alert("Tutor Info:\nDate: Monday\nTime: 10 - 11 PM\nLocation: B20.104");
};

document.getElementsByTagName("tr")[2].onclick = function () {
  alert("Tutor Info:\nDate: Thursday\nTime: 12 - 1 PM\nLocation: B20.104");
};
