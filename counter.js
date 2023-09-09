function updateCountdown() {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30;  
  
  const currentDate = new Date();
  let targetDay = 10,
      targetMonth = 10;
 //console.log(currentDate)

  const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + targetMonth, targetDay);
  //console.log(targetDate) 
  // parameters inside of date constructor includes the year, month and day which is customisable
  const timeLeft = targetDate - currentDate;
  
  //difference between the current and target
  
  
  
  const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  //Math calculations assigned to variables

  document.getElementById('months').textContent = Math.floor(timeLeft / (month)) + ":",
  document.getElementById('days').textContent = Math.floor((timeLeft % (month)) / (day)) + ":",
  document.getElementById('hours').textContent = Math.floor((timeLeft % (day)) / (hour)) + ":",
  document.getElementById('minutes').textContent = Math.floor((timeLeft % (hour)) / (minute)) + ":",
  document.getElementById('seconds').textContent = Math.floor(timeLeft % (minute) / second);
  //update the html with DOM manipulation 

  const eventButton = document.getElementById("button")

  eventButton.addEventListener("click", () => {
    window.open("https://www.imo.org/en/About/Events/Pages/default.aspx#")
  })

  const hideMonth = document.getElementById("hide-month");
  const hideDay = document.getElementById("hide-day");

  if (month <= 0) {
      hideMonth.style.display = "none" 
  }
  if (days <= 0) {
      hideDay.style.display = "none";
  }
}


// Call the function initially and update every second
updateCountdown();
setInterval(updateCountdown,1000);
