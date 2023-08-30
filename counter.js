
//Assiging the variables so that they will replace the string to a singular noun of it.

function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 10, 1);

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

    let singleMonth = "MONTH";
    let singleDay = "DAY";
    let singleHour = "HOUR";
    let singleMinute = "MINUTE";
    let singleSecond = "SECOND";
    //assigning strings to singular nouns

    if (months <= 1) {
        document.getElementById("singlemonth").textContent =  singleMonth;
    }

    if (days <= 1) {
        document.getElementById("singleday").textContent = singleDay;
    } else {
        document.getElementById("singlesecond").textContent = "DAYS";
    }

    if (hours <= 1) {
        document.getElementById("singlehour").textContent = singleHour;
    } else {
        document.getElementById("singlehour").textContent = "HOURS";
    } 

     if (seconds <= 1) {
         document.getElementById("singlesecond").textContent = singleSecond;
    } else {
        document.getElementById("singlesecond").textContent = "SECONDS";
    }

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