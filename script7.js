(() => {
    console.clear();
    const currentdate = new Date();
    console.log(

        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " year " +
        currentdate.getUTCFullYear()


    )
})();

console.log('Function return statements: exercise')


//function bigger then 100 



const numerBig = function (value) {
    if (value > 100) {
        return true;
    } else {
        return false;
    }
};
const result = numerBig(101);
console.log(result);


// Funtion Brenda the bouncer. 

//"come in" - the maximum number of people in the club
//"it's too busy now, come back later" - the current number of people in the club
//"this is a club for adults" - the age of the person wanting to enter the club



const brenda = function (age, maxPeople) {
    if (age < 18) {
        return 'This is a club for adults.'
    } else if (maxPeople > 250) {
        return 'its too busy now, come back later'
    } else {
        return 'Welcome'
    }
}
const allow = brenda(17, 251);
console.log(allow);





// Function bereken het gemiddelde 

const average = function (numbers) {
    const gemiddelde = numbers.reduce((total, n) => total + n) / numbers.length;
    return gemiddelde;


}


const numbers = [1, 2, 3, 4];
console.log(average(numbers));