function calculateLibrary() {
    // declare and input values
    var bookLateFee = 0.25;
    var dvdLateFee = 0.50;
    var numLateBooks = prompt("Enter the amount of late books you have: ");
    var numLateDvds = prompt("Enter the amount of late DVDs you have: ");
    var numDaysLate = prompt("Enter the amount of days late your items are: ");
    var userBookLateFee;
    var userDvdLateFee;
    var totalLateFee;

    // parse values to correct data types
    numLateBooks = parseInt(numLateBooks);
    numLateDvds = parseInt(numLateDvds);

    // calculate values
    userBookLateFee = bookLateFee * numLateBooks * numDaysLate; // book
    userDvdLateFee = dvdLateFee * numLateDvds * numDaysLate; // dvd
    totalLateFee = userBookLateFee + userDvdLateFee; // total

    // output
    alert(`You owe the Library a total of \$${totalLateFee.toFixed(2)}. 
    ${numLateBooks} books are late by ${numDaysLate}, costing \$${userBookLateFee.toFixed(2)}.
    ${numLateDvds} dvds are late by ${numDaysLate}, costing \$${userDvdLateFee.toFixed(2)}.`)
}