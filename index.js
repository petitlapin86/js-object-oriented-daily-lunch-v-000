let store = { customers: [], meals: [], deliveries: [], employers: [] };


// CUSTOMER CLASS BELOW 
let customerId = 0; // begins at zero
class Customer { //defines a class of customer
  constructor(name, employer = {}) {//input arguments here
    this.name = name;
    this.employerId = employer.id;
    this.id = ++customerId; //counts adding one each new id number
    store.customers.push(this); //pushes this info to store array
  }

meals(){ //returns all meals customer had delivered
    return this.deliveries().map(delivery => {
      return delivery.meal();
    });
  }

deliveries() { //returns all deliveries a customer has had
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    });
  }

totalSpent(){
    return this.meals().reduce(function(sum, meal) {
      return sum + meal.price;
    }, 0);
  } //returns total amount spent as a function of the cost of meals delivered
} // closes CUSTOMER CLASS

//MEAL CLASS BELOW
let mealId = 0;  // begins at zero
class Meal { //defines a class of meal
  constructor(name, price) {
  this.name = name;
  this.price = price;
  this.id = ++mealId; //counts adding one each new id number
  store.meals.push(this); //pushes this info to store array
}
}


// DELIVERIES CLASS BELOW
let deliveryId = 0;  // begins at zero
class Deliveries { //defines a class of meal
  constructor() {
    this.;
    this.;
    this.id = ++deliveryId; //counts adding one each new id number
    store.deliveries.push(this); //pushes this info to store array
  }
  
}
