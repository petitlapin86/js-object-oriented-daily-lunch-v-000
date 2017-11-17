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
  constructor(title, price) {
  this.title = title;
  this.price = price;
  this.id = ++mealId; //counts adding one each new id number
  store.meals.push(this); //pushes this info to store array
}

deliveries() { //returns all deliveries a customer has had
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    });
}
customers() {
    return this.deliveries().map(delivery => {
      return delivery.customer();
    });
  }
}

// DELIVERIES CLASS BELOW
let deliveryId = 0;  // begins at zero
class Delivery { //defines a class of meal
  constructor(meal, customer) {
    this.meal = mealId; // returns object with attributes of mealId
    this.customer = customerId; // returns object with attributes of customerId
    this.id = ++deliveryId; //counts adding one each new id number
    store.deliveries.push(this); //pushes this info to store array
  }
} //closes DELIVERY class

// EMPLOYER CLASS BELOW
let employerId = 0;  // begins at zero
class Employer { //defines a class of meal
  constructor(name) {
    this.name = name;
    this.id = ++employerId; //counts adding one each new id number
    store.employers.push(this); //pushes this info to store array
  }

}
