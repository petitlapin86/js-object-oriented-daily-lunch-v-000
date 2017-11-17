let store = {customers: [], meals: [], drivers: [], employers: []}

let customerId = 0 // begins at zero
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
  
deliveries() //returns all deliveries a customer has had
totalSpent() //returns total amount spent as a function of the cost of meals delivered

}
