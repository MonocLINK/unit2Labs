function calculatePizza() {
    // declare and input values
    var priceCheesePizza = 15.0;
    var pricePizzaTopping = 1.25;
    var numCoworkers = prompt("Enter the number of coworkers ordering pizza: ");
    var numCheesePizzas = prompt("Enter the number of cheese pizzas to order: ")
    var numPizzaToppings = prompt("Enter the total number of toppings you would like to add (across all pizzas if applicable): ")
    var totalCost;
    var individualCost;

    // parse values to correct data types
    numCoworkers = parseInt(numCoworkers);
    numCheesePizzas = parseInt(numCheesePizzas);
    numPizzaToppings = parseInt(numPizzaToppings);

    // calculate values
    totalCost = (priceCheesePizza * numCheesePizzas) + (pricePizzaTopping * numPizzaToppings);
    individualCost = totalCost / numCoworkers;

    // output
    alert(`You split ${numCheesePizzas} cheese pizzas between ${numCoworkers} coworkers with ${numPizzaToppings} toppings.
    To the total of \$${totalCost.toFixed(2)} between all of you, it would cost \$${individualCost.toFixed(2)}.`)
}