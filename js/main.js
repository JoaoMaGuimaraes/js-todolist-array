let toDoList = ["Studia", "Vai al mare", "Fare la spesa"];

// GET INITIAL LIST 
function getToList() {
  listContainer = document.createElement("div");
  listElement = document.createElement("ul");
  document.getElementsByTagName("body")[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (let i = 0; i < toDoList.length; ++i) {
    let listItem = document.createElement("li");
    listItem.innerHTML = toDoList[i];
    listElement.appendChild(listItem);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
    span.className = "closeBtn";
    span.appendChild(txt);
    listItem.appendChild(span);
  }
  
}
getToList();

// ADD NEW TASK TO THE TO DO LIST 
function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  toDoList.push(inputValue);
  li.appendChild(document.createTextNode(inputValue))
  if (inputValue === "") {
    alert("New task can't be empty!");
  } else {
    document.getElementById("todolist_ul").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "closeBtn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// DELETE TASK - DISPLAY=NONE 
var close = document.getElementsByClassName("closeBtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
