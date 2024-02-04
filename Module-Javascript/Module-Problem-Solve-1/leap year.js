function leapYear(year){
    if(year % 4 === 0){
        // console.log('This year is leap year',year);
        return 'This year is leap year';
    }
    else{
        // console.log("This year is not leap year",year)
        return 'This year is not leap year'; 
    }
    // return year;

}

// console.log(leapYear(2025));
// console.log(leapYear(2052));


// ignore it different way
function leapYearOrnot(year){
    if((year % 100 !== 0 ) && (year % 4 === 0)){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }

}
console.log(leapYearOrnot(2025));
console.log(leapYearOrnot(2052));