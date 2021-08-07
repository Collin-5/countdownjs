const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

// select items
const giveaway = document.querySelector(".giveaway");
const counts = document.querySelectorAll(".count h4");
const time = document.querySelector(".time");

//temp date
let tDate = new Date();
const tyear = tDate.getFullYear();
const tmonth = tDate.getMonth();
const tdate = tDate.getDate();
const tday = tDate.getDay();
const thour = tDate.getHours();
const tminutes = tDate.getMinutes();
const tseconds = tDate.getSeconds();

let fDate = new Date(tyear, tmonth, tdate + 10, thour, tminutes, tseconds);

// let fDate = new Date(2021, 10, 20, 14, 20, 0);

const fyear = fDate.getFullYear();
const fmonth = months[fDate.getMonth()];
const fdate = fDate.getDate();
const fday = weekdays[fDate.getDay()];
const fhour = fDate.getHours();
const fminutes = fDate.getMinutes();
const fseconds = fDate.getSeconds();

giveaway.innerHTML = `The Offer End on ${fday}, ${fdate}, ${fmonth}, ${fyear}, ${fhour}:${fminutes}pm`

function remTime(){
 const current = new Date().getTime();
 
 //rem time
 const t = fDate.getTime() - current;
 
 // single times
 let oneday = 24*60*60*1000;
 let onehour = 60*60*1000;
 let oneminute = 60*1000;

 // converting remaining time
 let days = Math.floor(t/oneday);
 let hours = Math.floor((t%oneday) / onehour);
 let minutes = Math.floor((t%onehour) / oneminute);
 let seconds = Math.floor((t%oneminute) / 1000);
 
 //arrays
 const values = [days, hours, minutes, seconds];

 //adding a 0
 function format(item){
    if (item < 10){
        return `0${item}`;
    }
    else {
        return item;
    }
 }

 counts.forEach(function(item, index){
     item.innerHTML = format(values[index]);
 })

 if (t < 0){
     clearInterval(countdown);
     time.innerHTML = `<h4 style="color: red">Offer Exired!</h4>`
 }
}

const countdown = setInterval(remTime, 1000);
remTime();