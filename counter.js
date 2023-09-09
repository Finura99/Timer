function updateCountdown() {
<<<<<<< HEAD
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30;  
  
  const currentDate = new Date();
  let targetDay = 10,
      targetMonth = 10;
 //console.log(currentDate)
=======
>>>>>>> 0c855e215cf6e1fce0c0dd6d2a8073dbf0ad2afe

let currentDate = new Date(),
    targetMonth = 2, //months
    targetDay = 0, //Day
    targetHour = 0,  //hour
      //customisable however it is hard coded
    targetMin = 0;
    targetSec = 0;
     //calc from todays time
     const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + targetMonth, targetDay, targetHour, targetMin, targetSec, currentDate.getDay()),
     timeLeft = targetDate - currentDate;
     console.log (targetDate)
 
  // parameters inside of date constructor includes the year, month and day which is customisable

  const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30)),
        days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  //Math calculations assigned to variables

  document.getElementById('months').textContent = months + " :",
  document.getElementById('days').textContent = days + " :",
  document.getElementById('hours').textContent = hours + " :",
  document.getElementById('minutes').textContent = minutes + " :",
  document.getElementById('seconds').textContent = seconds ;
  //update the html with DOM manipulation 

  const eventButton = document.getElementById("button");

  eventButton.addEventListener("click", () => {
    window.open("https://www.imo.org/en/About/Events/Pages/default.aspx#")
  })
<<<<<<< HEAD

  const hideMonth = document.getElementById("hide-month");
  const hideDay = document.getElementById("hide-day");

  if (month <= 0) {
      hideMonth.style.display = "none" 
=======
  if (months <= 0) {
      document.getElementById("hide-month").style.display = "none"; 
>>>>>>> 0c855e215cf6e1fce0c0dd6d2a8073dbf0ad2afe
  }
  if (days <= 0) {
      document.getElementById("hide-day").style.display = "none";
  }
  if (hours <= 0) {
    document.getElementById("hide-hour").style.display = "none";
  }

let stopTimer = (months && days && hours && minutes && seconds <= 0) ? clearInterval(updateCountdown) : console.log("test")
}
updateCountdown();
<<<<<<< HEAD
setInterval(updateCountdown,1000);
=======
setInterval(updateCountdown,1000);
>>>>>>> 0c855e215cf6e1fce0c0dd6d2a8073dbf0ad2afe
