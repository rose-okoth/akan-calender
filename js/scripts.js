var days =
         ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
       'Thursday', 'Friday', 'Saturday'];

var mons =
         ['January','February','March','April','May','June',
        'July','August','September','October','November','December'];

var akanMale = 
         ['Kwasi' 'Kwadwo' 'Kwabena' 'Kwaku' 'Yaw' 'Kofi' 'Kwame'];

var akanFemale = ['Akosua' 'Adwoa' 'Abenaa' 'Akua' 'Yaa' 'Afua' 'Ama'];

var dayOfBirth = '';

var theAkanName = '';




function zeller(month, day, year) {
    if (month < 3) {                                                    
       month += 12; year -= 1;
    }
    var h = (day + parseInt(((month + 1) * 26) / 10) +
       year + parseInt(year / 4) + 6 * parseInt(year / 100) +
       parseInt(year / 400) - 1) % 7;
    return h;
 }

 function demo(month, day, year,) {
   
    
    return mons[month-1] + ' ' + day + ', ' + year + ' = ' + days[zeller(month, day, year)];
 }
 
 function doDemo() {
    var m = parseInt(document.getElementById('month').value);
    var d = parseInt(document.getElementById('day').value);
    var y = parseInt(document.getElementById('year').value);
    document.getElementById('result').innerHTML = demo(m,d,y);
 }


