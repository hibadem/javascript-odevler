
//Remove element and Add X - START
var elements = document.getElementsByTagName("LI");
for (var i = 0; i < elements.length; i++) {
  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7"); //unicode =>  X
  span.className = "close";
  span.appendChild(spanText);
  elements[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var liDom = this.parentElement;
      var list = document.getElementById("list");
      if (list.hasChildNodes()) {
        list.removeChild(liDom);
      }
  };
}
//Remove element and Add X - END

// Add  checked class  to ListItem - START
var ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
// Add checked class to ListItem - END



// Add Element - Start
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.querySelector("#task").value;
  var inputText = document.createTextNode(inputValue);
  li.appendChild(inputText);
  if (!inputValue || !inputValue.replace(/\s/g,"")) $(".error").toast("show");
  else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.querySelector("#task").value = "";
  //Remove element and Add X, after adding a new element - START
  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var liDom = this.parentElement;
      var list = document.getElementById("list");
      if (list.hasChildNodes()) {
        list.removeChild(liDom);
      }
    };
  }
  //Remove element and Add X, after adding a new element - END
}
// Add Element - End

/////////////////////////////////////////////////////////////////////////////////////
// //Remove element and Add X - START
// var elements = document.getElementsByTagName("LI");
// for (var i = 0; i < elements.length; i++) {
//   var span = document.createElement("SPAN");
//   var spanText = document.createTextNode("\u00D7"); //unicode =>  X
//   span.className = "close";
//   span.appendChild(spanText);
//   elements[i].appendChild(span);
// }
// var close = document.getElementsByClassName("close");
// // var i;
// // for (i = 0; i < close.length; i++) {
// //   close[i].onclick = function () {
// //     var liDom = this.parentElement;
// //       var list = document.getElementById("list");
// //       if (list.hasChildNodes()) {
// //         list.removeChild(liDom);
// //       }
// //   };
// // }
// //Remove element and Add X - END

// // Add  checked class  to ListItem - START
// var ul = document.querySelector("ul");
// ul.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     event.target.classList.toggle("checked");
//   }
// });
// // Add checked class to ListItem - END

// //Show if todo in localStorage

// let localTodos = JSON.parse(localStorage.getItem("todos"));
// if(localStorage.getItem("todos")){
//   localTodos.forEach((todo,index) => {

//   var localLi = document.createElement("LI");
//   localLi.appendChild(document.createTextNode(todo));
//   document.getElementById("list").appendChild(localLi);

//   var span = document.createElement("SPAN");
//   var spanText = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(spanText);
//   localLi.appendChild(span);
//   for (j = 0; j < close.length; j++) {
//     close[j].onclick = function () {
//       var liDom = this.parentElement;
//       var list = document.getElementById("list");
//       if (list.hasChildNodes()) {
//         list.removeChild(liDom); 
//         var updatedTodos = localTodos.splice(j,1)
//       localStorage.removeItem("todos",JSON.stringify(updatedTodos));    
//       }      
      
//     };
//   }
// });
// }

// let todos = [];
// // Add Element - Start
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.querySelector("#task").value;
//   todos.push(inputValue);
//   localStorage.setItem("todos",JSON.stringify(todos));
//   var inputText = document.createTextNode(inputValue);
//   li.appendChild(inputText);
//   if (!inputValue || !inputValue.replace(/\s/g,"")) $(".error").toast("show");
//   else {
//     $(".success").toast("show");
//     document.getElementById("list").appendChild(li);
//   }
//   document.querySelector("#task").value = "";
//   //Remove element and Add X, after adding a new element - START
//   var span = document.createElement("SPAN");
//   var spanText = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(spanText);
//   li.appendChild(span);
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var liDom = this.parentElement;
//       var list = document.getElementById("list");
//       if (list.hasChildNodes()) {
//         list.removeChild(liDom);
//         var updatedTodos = todos.splice(i,1)
//       localStorage.removeItem("todos",JSON.stringify(updatedTodos));  
//       }
//     };
//   }
//   //Remove element and Add X, after adding a new element - END
// }
// // Add Element - End

