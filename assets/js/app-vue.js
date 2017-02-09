Vue.component('modal', {
  template: '#modal-template',
})

Vue.component('topping-checkbox', {
  template: '#topping-checkbox-template',
  props: ['topping'],
  methods: {
    inputName: function(name){
      newName = name.toLowerCase()
      newName.replace(/\ /, '-')
      newName.replace(/\(|\)/, '')
      return newName
    },
    calcToppingPrice: function(e) {
      if(e.target.checked){
        priceModifier = parseInt(e.target.value)
      }else{
        priceModifier = parseInt('-'+e.target.value)
      }
      app.updateToppingsPrice(priceModifier)
    }
  }
})

var app = new Vue({
  el: '#vue-app',
  data: {
    basePrice: 5,
    cheesePrice: 0,
    toppingsPrice: 0,
    showModal: false,
    toppings: [
      {type: 'veggie', name: 'Tomato', price: 1},
      {type: 'veggie', name: 'Onion', price: 5},
      {type: 'veggie', name: 'Lettuce', price: 1},
      {type: 'veggie', name: 'Pickles', price: 1},
      {type: 'veggie', name: 'Bacon (yes its a veggie)', price: 2},
      {type: 'sauce', name: 'Ketchup', price: 1},
      {type: 'sauce', name: 'Mustard', price: 5},
      {type: 'sauce', name: 'Mayo', price: 1},
      {type: 'sauce', name: 'BBQ', price: 2},
      {type: 'cheese', name: 'Cheddar', price: 1},
      {type: 'cheese', name: 'Swiss', price: 5},
      {type: 'cheese', name: 'Provolone', price: 1},
      {type: 'cheese', name: 'American', price: 2},
      {type: 'cheese', name: 'Colby Jack', price: 2}
    ]
  },
  methods: {
    toppingByType: function (toppings, type) {
      return toppings.filter(function(topping) {
        return topping.type == type
      })
    },
    updateToppingsPrice: function(amount) {
      this.toppingsPrice += amount
    }
  },
  computed: {
    totalPrice: function() {
      return this.basePrice + parseInt(this.cheesePrice) + parseInt(this.toppingsPrice)
    }
  }
})
