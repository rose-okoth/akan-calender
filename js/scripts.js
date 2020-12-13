function zeller(month, day, year) {
    if (month < 3) {
       month += 12; year -= 1;
    }
    var h = (day + parseInt(((month + 1) * 26) / 10) +
       year + parseInt(year / 4) + 6 * parseInt(year / 100) +
       parseInt(year / 400) - 1) % 7;
    return h;
 }

 function demo(month, day, year) {
    var mons =
        ['January','February','March','April','May','June',
        'July','August','September','October','November','December'];
    var days =
       ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
       'Thursday', 'Friday', 'Saturday'];
    return mons[month-1] + ' ' + day + ', ' + year +
    ' = ' + days[zeller(month, day, year)];
 }
 
 function doDemo() {
    var m = parseInt(document.getElementById('month').value);
    var d = parseInt(document.getElementById('day').value);
    var y = parseInt(document.getElementById('year').value);
    document.getElementById('result').innerHTML = demo(m,d,y);
 }

 if (day = 0 && male) {
   console.log("Your Akan name is Kwasi.");
} else if (day = 1 && male) {
   console.log("Your Akan name is Kwadwo.");
} else if (day = 2 && male) {
   console.log("Your Akan name is Kwabena.");
} else if (day = 3 && male) {
   console.log("Your Akan name is Kwaku.");
} else if (day = 4 && male) {
   console.log("Your Akan name is Yaw.");
} else if (day = 5 && male) {
   console.log("Your Akan name is Kofi.");
} else if (day = 6 && male) {
   console.log("Your Akan name is Kwame.");
} else if (day = 0 && female) {
   console.log("Your Akan name is Akosua.");
} else if (result === Monday && gender === female) {
   console.log("Your Akan name is Adwoa.");
} else if (day = 2 && female) {
   console.log("Your Akan name is Abenaa.");
} else if (day = 3 && female) {
   console.log("Your Akan name is Akua.");
} else if (day = 4 && female) {
   console.log("Your Akan name is Yaa.");
} else if (day = 5 && female) {
   console.log("Your Akan name is Afua.");
} else if (day = 6 && female) {
   console.log("Your Akan name is Ama.");
} else if (day <=0 || >31) {
   console.log("Invalid date. Input correct date.")
} else if (month<=0 || month>12) {
   console.log("Invalid month. input the correct month.")
}
