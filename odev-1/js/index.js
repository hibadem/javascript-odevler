let userName = prompt("İsminiz nedir?")
document.getElementById("myName").innerText = userName;

function showTime(){
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
switch (new Date().getDay()) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
       day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
  }


hour = hour < 10 ? '0'+hour : hour;
minute = minute < 10 ? '0'+ minute : minute;
second = second < 10 ? '0'+ second : second;

let time = `${hour}:${minute}:${second} ${day}`;
document.getElementById('myClock').innerHTML = time;


setTimeout(showTime,1000);

}
showTime();