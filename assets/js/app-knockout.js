var Condiment = function(name, price) { 
    this.name = name; 
    this.price = price; 
    this.onBurger = ko.observable(false);
}

var BurgerBuilder = function() { 
  var self = this;
  self.selectedCheese = ko.observable(); 
  self.basePrice = 5;
  self.showModal = ko.observable(false); 

  self.cheeses = ko.observableArray([
    new Condiment('Cheddar', 2),
    new Condiment('Swiss', 1),
    new Condiment('Provolone', 3),
    new Condiment('American', 1),
    new Condiment('Colby Jack', 2),  ]);

  self.sauces = ko.observableArray([
    new Condiment('Ketchup', 1),
    new Condiment('Mustard', 5),
    new Condiment('Mayo', 1),
    new Condiment('BBQ', 2),  ]);

  self.veggies = ko.observableArray([
    new Condiment('Tomato', 1),
    new Condiment('Onion', 5),
    new Condiment('Lettuce', 1),
    new Condiment('Pickles', 1),
    new Condiment('Bacon (yes its a veggie)', 2),  ]);

  self.toggleModal = function() {
    self.showModal(!self.showModal());
  } 

  self.total = ko.pureComputed(function() {   
      price = self.basePrice;

      $.each(self.veggies().concat(self.sauces()), function(index, topping) {     
        if (topping.onBurger()) {       
          price += topping.price     
        }   
      });

      if (self.selectedCheese() != undefined) {     
        price += self.selectedCheese()   
      }   
      return price 
  });
};

ko.applyBindings(new BurgerBuilder());
