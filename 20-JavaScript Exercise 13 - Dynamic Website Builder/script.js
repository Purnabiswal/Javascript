function createCard(title, cName, views, monthsOld, duration, thumbnail){
    document.getElementById("thumbnail").src=thumbnail
    document.getElementById("title").innerText=title
    document.getElementById("views").innerText=views
    document.getElementById("monthsOld").innerText = monthsOld;
    document.getElementById("duration").innerText = duration;
    document.getElementById("cName").innerText = cName;
}


createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
);