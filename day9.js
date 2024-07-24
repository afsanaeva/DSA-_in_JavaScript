// leap year 
function leapYear(year){

 if(year % 400 == 0 ||
    (year %100 != 0 && year % 4 ==0))
    console.log("its leap year",year);
 else{
    console.log("its not leap year",year)
 }
  return 0;  
 }

const result = leapYear(2024);
console.log(result);