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
  deliveries() {
  return store.deliveries.filter(delivery => {
    return delivery.customerId == this.id;
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
  static byPrice() {
   return store.meals.sort((meal1, meal2) => {
     return meal1.price < meal2.price;
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
  meal() {
   return store.meals.find(meal => {
     return meal.id === this.mealId;
   });
 }
 customer() {
   return store.customers.find(customer => {
     return customer.id === this.customerId;
   });
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
  mealTotals() {
    let allMeals = this.deliveries().map(delivery => {
      return delivery.meal();
    });
    let summaryObject = {};
    allMeals.forEach(function(meal) {
      summaryObject[meal.id] = 0;
    });
    allMeals.forEach(function(meal) {
      summaryObject[meal.id] += 1;
    });
    return summaryObject;
  }
  employees() {
    return store.customers.filter(customer => {
      return customer.employerId == this.id;
    });
  }
  deliveries() {
    let allDeliveries = this.employees().map(employee => {
      return employee.deliveries();
    });
    let merged = [].concat.apply([], allDeliveries);
    return merged;
  }
  meals() {
    let allMeals = this.deliveries().map(delivery => {
      return delivery.meal();
    });
    let uniqueMeals = [...new Set(allMeals)];
    return uniqueMeals;
  }
}
