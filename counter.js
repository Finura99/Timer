
//Assiging the variables so that they will replace the string to a singular noun of it.

function updateCountdown() {
    const currentDate = new Date(),
        targetDate = new Date(currentDate.getFullYear(), 
                    currentDate.getMonth() + 1, 0); 

    // parameters inside of date constructor includes the year, month and day which is customisable
    const timeLeft = targetDate - currentDate;
    //difference between the current and target
    
    
    const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    //Math calculations assigned to variables

    document.getElementById('months').textContent = months + ":";
    document.getElementById('days').textContent = days + ":";
    document.getElementById('hours').textContent = hours + ":";
    document.getElementById('minutes').textContent = minutes + ":";
    document.getElementById('seconds').textContent = seconds;
    //update the html with DOM manipulation 

    
    //assigning strings to singular nouns

    const hideMonth = document.getElementById("hide-month");
    const hideDay = document.getElementById("hide-day");

    if (months <= 0) {
        console.log("check")
        hideMonth.style.display = "none" 
    }
    if (days <= 0) {
        hideDay.style.display = "none";
    }
}


// Call the function initially and update every second
updateCountdown();
setInterval(updateCountdown, 1000);
//used dry principle to cut down 10 lines of code

// function updateCountdown() {
//     const second = 1000,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24,
//           month = day * 30
//     let today = new Date(),
//         dd = today.getDate(),
//         mm = today.getMonth(),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy,
//         dayMonth = "1/29/",
//         birthday = dayMonth + yyyy;
    
//     today = mm + "/" + dd + "/" + yyyy;
//     if (today > birthday) {
//       birthday = dayMonth + nextYear;
//     }
    
//     const countDown = new Date(birthday).getTime(),
//         x = setInterval(function() {    
  
//           const now = new Date().getTime(),
//                 distance = countDown - now;
  
//                 document.getElementById("days").innerText = Math.floor(distance / (day)),
//                 document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
//           //do something later when date is reached
//           if (distance < 0) {
//             document.getElementById("headline").innerText = "It's my birthday!";
//             document.getElementById("countdown").style.display = "none";
//             document.getElementById("content").style.display = "block";
//             clearInterval(x);
//           }
//           //seconds
//         }, 0)
//     };