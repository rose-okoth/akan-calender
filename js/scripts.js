var d = new Date();
document.getElementById("demo").innerHTML = d.getDay();
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
        ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days =
       ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
    return mons[month-1] + ' ' + day + ', ' + year +' = ' + days[zeller(month, day, year)];
 }
 
 function doDemo() {
    var m = parseInt(document.getElementById('month').value);
    var d = parseInt(document.getElementById('day').value);
    var y = parseInt(document.getElementById('year').value);
    document.getElementById('result').innerHTML = demo(m,d,y);
 }

if (d = 0 && male) {
    console.log("Your Akan name is Kwasi.");
} else if (d = 1 && male) {
    console.log("Your Akan name is Kwadwo.");
} else if (d = 2 && male) {
    console.log("Your Akan name is Kwabena.");
} else if (d = 3 && male) {
    console.log("Your Akan name is Kwaku.");
} else if (d = 4 && male) {
    console.log("Your Akan name is Yaw.");
} else if (d = 5 && male) {
    console.log("Your Akan name is Kofi.");
} else if (d = 6 && male) {
    console.log("Your Akan name is Kwame.");
} else if (d = 0 && female) {
    console.log("Your Akan name is Akosua.");
} else if (d = 1 && female) {
    console.log("Your Akan name is Adwoa.");
} else if (d = 2 && female) {
    console.log("Your Akan name is Abenaa.");
} else if (d = 3 && female) {
    console.log("Your Akan name is Akua.");
} else if (d = 4 && female) {
    console.log("Your Akan name is Yaa.");
} else if (d = 5 && female) {
    console.log("Your Akan name is Afua.");
} else if (d= 6 && female) {
    console.log("Your Akan name is Ama.");
} else if (date<=0 || date>31) {
    console.log("Invalid date. Input correct date.")
} else if (month<= || month>12) {
    console.log("Invalid month. input the correct month.")
}
