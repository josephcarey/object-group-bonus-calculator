class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function determineBonus(employee){
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
  if (employee.reviewRating < 3){
    employeeBonus.bonusPercentage = 0;
    console.log(employee.name, 'received a review score below 3');
  }
  else if( employee.reviewRating === 3){
    employeeBonus.bonusPercentage = .04;
    console.log(employee.name, 'received a review score of 3');
  }
  else if( employee.reviewRating === 4){
    employeeBonus.bonusPercentage = .06;
    console.log(employee.name, 'received a review score of 4');
  }
  else if( employee.reviewRating === 5){
    employeeBonus.bonusPercentage = .1;
    console.log(employee.name, 'received a review score of 5');
  }
  if (employee.employeeNumber.length === 4){
    employeeBonus.bonusPercentage += .05;
    console.log(employee.name, 'has been with the company more than 15 years');
  }
  if (Number(employee.annualSalary) > 65000){
    employeeBonus.bonusPercentage -= .01;
    console.log(employee.name, 'makes too much money');
  }
  if(employeeBonus.bonusPercentage > .13){
    employeeBonus.bonusPercentage = .13;
    console.log(employee.name, 'has reached the bonus cap');
  }
  if(employeeBonus.bonusPercentage < 0){
    employeeBonus.bonusPercentage = 0;
    console.log(employee.name, 'is a new employee and needs to work harder');
  }
  employeeBonus.totalBonus =  Math.round(employee.annualSalary * employeeBonus.bonusPercentage);
  console.log('total bonus is ', employeeBonus.totalBonus);

  employeeBonus.totalCompensation = parseInt(employee.annualSalary) + employeeBonus.totalBonus;
  console.log('total compensation is', employeeBonus.totalCompensation);

  return employeeBonus;
}

for(let plebian of employees){
  temporaryObjectToLog = determineBonus(plebian)
  $( '#bonusList' ).append('<li>This Is Cool</li>');
}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


$( document ).ready( readyNow() );

function readyNow () {
  console.log('JQ');
  
}