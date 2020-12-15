var days =
         ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
       'Thursday', 'Friday', 'Saturday'];

var mons =
         ['January','February','March','April','May','June',
        'July','August','September','October','November','December'];

var akanMale = 
         ['Kwasi' 'Kwadwo' 'Kwabena' 'Kwaku' 'Yaw' 'Kofi' 'Kwame'];
console.log(akanMale);

var akanFemale = ['Akosua' 'Adwoa' 'Abenaa' 'Akua' 'Yaa' 'Afua' 'Ama'];
console.log(akanFemale);

var dayOfBirth = '';

var theAkanName = '';

function retrieveInput() {
   var userInput = [];
   var date = parseInt(document.getElementById('date').value);
   userInput.push(date);
   var month = parseInt(document.getElementById('month').value);
   userInput.push(month);
   var year = parseInt(document.getElementById('year').value);
   userInput.push(year);
   var gender= parseInt(document.getElementById('gender').value);
   userInput.push(gender);
   return userInput;
}

function getTheDay() {
   var data = getInput();
   var cloneList = [];
   var CC = parseInt(data[2].split(data[2][2])[0]);
   var YY = parseInt(data[2].split(data[2][1])[1]);
   var MM = parseInt(data[1]);

   if( MM < 1 || MM > 12) {
      alert('INACCURATE MONTH. PLEASE TRY AGAIN!')
      return;
   }

   var DD = parseInt(data[0]);

   if( DD < 0 || DD > 31) {
      alert('INACCURATE MONTH. PLEASE TRY AGAIN!')
      return;
   }

   var gender = getGender(data[3]);

   if (gender) {
      if (gender === 1) {
         cloneList = akanMale;
      }

      if (gender === 2) {
         cloneList = akanFemale;
      }
   } else {
      return;
   }

   var dayOf = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   var dayOf = dayOf.toFixed();
   dayOfBirth = days[dayOf];
   theAkanName = cloneList[dayOf];

   if (theAkanName === '' || dayOfBirth === '') {
      alert('EMPTY FIELD. PLEASE INPUT YOUR DETAILS!');
      getTheDay();
   }

   var message = 'Your Akan name is: ' + 'theAkanName';
   message.concat('\n You were born on a: ') + 'dayOfBirth';
   alert(message);
}

function getGender(genderInput) {
   var gender = genderInput.toUpperCase();
   var isMale = 1;
   var isFemale = 2:

   if (gender.startsWith('M')) {
      return isMale;
   } else {
      if (gender.startsWith('F')) {
         return isFemale;
      }else {
         alert('UNKNOWN GENDER. INSERT THE CORRECT GENDER!')
      }
   }
}
 

