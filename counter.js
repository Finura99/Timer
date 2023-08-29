
//Assiging the variables so that they will replace the string to a singular noun of it.

function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // parameters inside of date constructor includes the year, month and day which is customisable
    const timeLeft = targetDate - currentDate;
    
    
    const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('months').textContent = months + ":";
    document.getElementById('days').textContent = days + ":";
    document.getElementById('hours').textContent = hours + ":";
    document.getElementById('minutes').textContent = minutes + ":";
    document.getElementById('seconds').textContent = seconds;
    //update the html with DOM manipulation of document prototype
    let singlemonth = "MONTH";
    let singleday = "DAY";
    let singlehour = "HOUR";
    let singleminute = "MINUTE";
    let singlesecond = "SECOND";
    
    if (months <= 1) {
        document.getElementById("singlemonth").textContent =  singlemonth;
    }

    if (days <= 1) {
        document.getElementById("singleday").textContent = singleday;
    } else {
        document.getElementById("singlesecond").textContent = "DAYS";
    }

    if (hours <= 1) {
        document.getElementById("singlehour").textContent = singlehour;
    } else {
        document.getElementById("singlehour").textContent = "HOURS";
    } 

     if (seconds <= 1) {
         document.getElementById("singlesecond").textContent = singlesecond;
    } else {
        document.getElementById("singlesecond").textContent = "SECONDS";
    }
    
    
    
}

// Call the function initially and update every second
updateCountdown();
setInterval(updateCountdown, 1000);
//used dry principle to cut down 10 lines of code