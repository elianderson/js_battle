// Components
//
var Modal = React.createClass({
  propTypes: {
    toggleModal: React.PropTypes.func.isRequired,
    recalculatePrice: React.PropTypes.func.isRequired,
  },

  render: function(){
    return (
      React.createElement('div', {className: 'modal-wrapper'},
        React.createElement('div', {className: 'modal-container'},
          React.createElement('div', {className: 'modal'},
            React.createElement('a', {className: 'close-modal', onClick: this.props.toggleModal},'x'),
            React.createElement('div', {id: 'modal-content'},
              React.createElement('div', {className: 'veggie-options'},
                React.createElement('label', {}, 'Veggies'),
                React.createElement(CheckBoxes, {list: toppings.filter(function(t){return t.type == 'veggie'}),
                  recalculatePrice: this.props.recalculatePrice
                })
              )
            )
          )
        )
      )
    )
  }
})

var SelectList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
    recalculatePrice: React.PropTypes.func.isRequired,
  },

  inputName: function(name){
    newName = name.toLowerCase()
    newName.replace(/\ /, '-')
    newName.replace(/\(|\)/, '')
    return newName
  },

  sendPrice: function(e){
    state.newBurger.cheese = parseInt(e.target.value);
    this.props.recalculatePrice()
  },

  options: function(){
    optionList = [];

    for (var i=0; i < this.props.list.length; i++ ) {
      optionList.push(React.createElement('option', {id: this.inputName(this.props.list[i].name), value: this.props.list[i].value}, this.props.list[i].name))
    }
    return optionList
  },

  render: function(){
    return (
      React.createElement('select', {onChange: this.sendPrice, value: state.newBurger.cheese}, this.options())
    )
  }
})

var CheckBoxes = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
    recalculatePrice: React.PropTypes.func.isRequired,
  },

  inputName: function(name){
    newName = name.toLowerCase()
    newName.replace(/\ /, '-')
    newName.replace(/\(|\)/, '')
    return newName
  },

  sendPrice: function(e){
    if(e.target.checked){
      state.newBurger.toppings += parseInt(e.target.value);
    }else{
      state.newBurger.toppings -= parseInt(e.target.value);
    }
    this.props.recalculatePrice()
  },

  checkboxes: function(){
    checkboxList = [];

    for (var i=0; i < this.props.list.length; i++ ) {
      checkboxList.push( React.createElement('span', {},
        React.createElement('input', {onClick: this.sendPrice, id: this.inputName(this.props.list[i].name), value: this.props.list[i].value, type: 'checkbox'}),
        React.createElement('label', {htmlFor: this.inputName(this.props.list[i].name) }, this.props.list[i].name )
      ))
    }
    return checkboxList
  },

  render: function(){
    return (
      React.createElement('div', {}, this.checkboxes())
    )
  }
})

// View
//
var BurgerBuilder = React.createClass({
  propTypes: {
    newBurger: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.bool.isRequired
  },

  toggleModal: function toggleModal(){
    setState({showModal: !this.props.showModal});
  },

  recalculatePrice: function recalculatePrice(priceModifier) {
    newPrice = 5 + this.props.newBurger.cheese + this.props.newBurger.toppings
    this.props.newBurger.price = newPrice
    this.setState({newBurger: this.props.newBurger});
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('div', {className: 'row'},
          React.createElement('div', {className: 'large-12 columns'},
            React.createElement('h1', {}, 'Custom Burger Builder')
          )),
        React.createElement('div', {},
          React.createElement('div', {className: 'row'},
            React.createElement('div', {className: 'large-12 columns'},
              React.createElement('div', {className: 'callout'},
                React.createElement('form', {},
                  React.createElement('div', {className: 'row'},

                    React.createElement('div', {className: 'large-9 columns'},
                      React.createElement('label', {},'Name'),
                      React.createElement('input', {id: 'name', type: 'text', placeholder: 'Epic Burger Name'})
                    ),

                    React.createElement('div', {className: 'large-3 medium-3 columns'},
                      React.createElement('div', {className: 'row collapse'},
                        React.createElement('label', {}, 'Burger Price')
                      ),
                      React.createElement('div', {className: 'input-group'},
                        React.createElement('span', {className: 'input-group-label'}, '$'),
                        React.createElement('input', {value: this.props.newBurger.price, type: 'text', id: 'price', className: 'input-group-field'})
                      )
                    )
                  ),

                  React.createElement('div', {className: 'row'},

                    React.createElement('div', {className: 'large-4 columns'},
                      React.createElement('label', {}, 'Cheese'),
                      React.createElement(SelectList, {list: toppings.filter(function(t){return t.type == 'cheese'}),
                      recalculatePrice: this.recalculatePrice,
                      currentListValue: 0})
                    ),
                    React.createElement('div', {className: 'large-8 medium-8 columns'},
                      React.createElement('label', {}, 'Sauces'),
                      React.createElement(CheckBoxes, {list: toppings.filter(function(t){return t.type == 'sauce'}),
                        recalculatePrice: this.recalculatePrice,
                      })
                    )
                  ),
                  React.createElement('div', {className: 'row'},
                    React.createElement('div', {className: 'large-12 columns'},
                      React.createElement('p', {className: 'button', onClick: this.toggleModal}, 'Add Veggies')
                    )
                  )
                )
              )
            )
          )
        ),
        this.props.showModal ? React.createElement(Modal, {toggleModal: this.toggleModal, recalculatePrice: this.recalculatePrice}) : null
      )
    )
  }})

// Data
//
var toppings = [
  {type: 'veggie', name: 'Tomato', value: 1},
  {type: 'veggie', name: 'Onion', value: 5},
  {type: 'veggie', name: 'Lettuce', value: 1},
  {type: 'veggie', name: 'Pickles', value: 1},
  {type: 'veggie', name: 'Bacon (yes its a veggie)', value: 2},
  {type: 'sauce', name: 'Ketchup', value: 1},
  {type: 'sauce', name: 'Mustard', value: 5},
  {type: 'sauce', name: 'Mayo', value: 1},
  {type: 'sauce', name: 'BBQ', value: 2},
  {type: 'cheese', name: 'Cheddar', value: 1},
  {type: 'cheese', name: 'Swiss', value: 5},
  {type: 'cheese', name: 'Provolone', value: 1},
  {type: 'cheese', name: 'American', value: 2},
  {type: 'cheese', name: 'Colby Jack', value: 2}
]
// The application's state holder
//
var state = {}

// Initialize the app
//
function setState(changes) {
  Object.assign(state, changes);
  ReactDOM.render(React.createElement(
    BurgerBuilder,
    Object.assign({}, state, {})
  ), document.getElementById('react-app'))

}

// Set Initial data
//
setState({
  newBurger: {name: '', price: 5, cheese: 0, toppings: 0},
  showModal: false
})
