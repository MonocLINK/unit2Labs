$(document).ready(function() {
    // event handlers
    $("#calculatePizzaButton").click(calculatePizza);
    $("#calculateLibraryButton").click(calculateLibrary);
    $("#incrementClickButton").click(incrementClick);
    $("#outputClickButton").click(outputClick);
    $("#incrementAndOutputButton").click(incrementAndOutput);
    var clickNum = 0;

    // FUNCTIONS

    // LIBRARY

    function calculateLibrary() {

        // declare and input values
        var bookLateFee = 0.25;
        var dvdLateFee = 0.50;
        var numLateBooks = parseInt($("#numLateBooks").val());
        var numLateDvds = parseInt($("#numLateDvds").val());
        var numDaysLate = parseInt($("#numDaysLate").val());
        var userBookLateFee;
        var userDvdLateFee;
        var totalLateFee;

        // calculate values
        userBookLateFee = bookLateFee * numLateBooks * numDaysLate; // book
        userDvdLateFee = dvdLateFee * numLateDvds * numDaysLate; // dvd
        totalLateFee = userBookLateFee + userDvdLateFee; // total

        // output
        $("#numLateBooks").text(numLateBooks);
        $("#numLateDvds").text(numLateDvds);
        $(".numDaysLate").text(numDaysLate);
        $("#totalLateFee").text(totalLateFee.toFixed(2));
        $("#userBookLateFee").text(userBookLateFee.toFixed(2));
        $("#userDvdLateFee").text(userDvdLateFee.toFixed(2));
        $("#libraryOutput").css("display", "block");
    }

    // PIZZA

    function calculatePizza() {

        // declare and input values
        var priceCheesePizza = 15.0;
        var pricePizzaTopping = 1.25;
        var numCoworkers = parseInt($("#numCoworkers").val());
        var numCheesePizzas = parseInt($("#numCheesePizzas").val());
        var numPizzaToppings = parseInt($("#numPizzaToppings").val());
        var totalCost;
        var individualCost;


        // calculate values
        totalCost = (priceCheesePizza * numCheesePizzas) + (pricePizzaTopping * numPizzaToppings);
        individualCost = (totalCost / numCoworkers);

        // output
        $("#outputPizza").css("background-color");
        $("#numCoworkersOutput").text(numCoworkers);
        $("#numCheesePizzasOutput").text(numCheesePizzas);
        $("#numPizzaToppingsOutput").text(numPizzaToppings);
        $("#totalCostOutput").text(totalCost.toFixed(2));
        $("#individualCostOutput").text(individualCost.toFixed(2));
        $("#pizzaOutput").css("display", "block");
    }

    function incrementClick() {
        clickNum++;
    }

    function outputClick() {
        $("#clickNum").text(clickNum);
        $("#clickOutput").css("display", "block");
    }

    function incrementAndOutput() {
        clickNum++;
        $("#clickNum").text(clickNum);
        if ($('#clickOutput').css('display') === 'none') {
            $("#clickOutput").css("display", "block");
        }
    }
});