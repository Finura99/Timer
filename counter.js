function updateCountdown() {

  const currentDate = new Date();
  let targetDay = 5,
      targetMonth = 5;
 //console.log(currentDate)

  const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + targetMonth, targetDay),
        timeLeft = targetDate - currentDate;
  //console.log(targetDate) 
  // parameters inside of date constructor includes the year, month and day which is customisable

  const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30)),
        days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  //Math calculations assigned to variables

  document.getElementById('months').textContent = months,
  document.getElementById('days').textContent = days,
  document.getElementById('hours').textContent = hours,
  document.getElementById('minutes').textContent = minutes,
  document.getElementById('seconds').textContent = seconds
  //update the html with DOM manipulation 

  const eventButton = document.getElementById("button")

  eventButton.addEventListener("click", () => {
    window.open("https://www.imo.org/en/About/Events/Pages/default.aspx#")
  })

  const hideMonth = document.getElementById("hide-month");
  const hideDay = document.getElementById("hide-day");

  if (months <= 0) {
      hideMonth.style.display = "none" 
  }
  if (days <= 0) {
      hideDay.style.display = "none";
  }
}

// Call the function and update every second (1000 milliseconds)
updateCountdown();
setInterval(updateCountdown,1000);
