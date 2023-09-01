function updateCountdown() {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30;  
  
  const currentDate = new Date();
  let targetDay = 76,
      targetMonth = 0;
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

  if (months <= 0) {
      hideMonth.style.display = "none" 
  }
  if (days <= 0) {
      hideDay.style.display = "none";
  }
}


// Call the function initially and update every second
updateCountdown();
setInterval(updateCountdown,1000);





// //Assiging the variables so that they will replace the string to a singular noun of it.

// function updateCountdown() {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24,
//     month = 30;

//   let today = new Date(),
//     dd = String(today.getDate()).padStart(2, "0"), //e.g. 01 for january
//     mm = String(today.getDate() + 1).padStart(2, "0"), //e.g. 06 for june
//     yy = today.getFullYear();

//     console.log(today);
    
//     today = dd + "/" + mm + "/" + yy; //reassigned the format of date
//     chooseDate = "15/10/",
//     targetEvent = chooseDate + yy;


//     console.log(today);
//     console.log(targetEvent);
  
//   const countDown = new Date(targetEvent).getTime(),
//       x = setInterval(function() {    
//         //console.log(countDown);

//         const now = new Date().getTime()
//               timeLeft = countDown - now;
//           document.getElementById("months").innerText = Math.floor(timeLeft / (month)),
//           document.getElementById("days").innerText = Math.floor(timeLeft / (day)),
//           document.getElementById("hours").innerText = Math.floor((timeLeft % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((timeLeft % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((timeLeft % (minute)) / second);
//         //do something later when date is reached
//         if (timeLeft < 0) {
//           document.getElementById("").innerText = "It's my birthday!";
//           document.getElementById("countdown").style.display = "none";
//           document.getElementById("content").style.display = "block";
//           clearInterval(x);
//         }
//         //seconds
//       }, 1000)
//   };

//   updateCountdown();
  