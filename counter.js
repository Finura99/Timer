//Assiging the variables so that they will replace the string to a singular noun of it.

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    month = 30;
    console.log(month)

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getDate() + 1).padStart(2, "0"),
    yy = today.getFullYear();
    console.log(dd)
    
    today = dd + "/" + mm + "/" + yy;
    chooseDate = "15/10/",
    targetEvent = chooseDate + yy;
    console.log(targetEvent)
  

  // parameters inside of date constructor includes the year, month and day which is customisable
  //difference between the current and target

  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;
          document.getElementById("months").innerText = Math.floor(timeLeft / (month)),
          document.getElementById("days").innerText = Math.floor(timeLeft / (day)),
          document.getElementById("hours").innerText = Math.floor((timeLeft % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((timeLeft % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((timeLeft % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());