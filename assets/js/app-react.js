var burgerBuilder =
  React.createElement('div', {},
    React.createElement('div', {className: 'row'},
      React.createElement('div', {className: 'large-12 columns'},
        React.createElement('h1', {className: 'large-12 columns'}, 'Custom Burger Builder')
      ),
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
                      React.createElement('input', {id: 'price', className: 'input-group-field'})
                    )
                  )
                ),

                React.createElement('div', {className: 'row'},

                  React.createElement('div', {className: 'large-4 columns'},
                      React.createElement('label', {}, 'Cheese'),
                      React.createElement('select', {})
                  ),
                  React.createElement('div', {className: 'large-8 medium-8 columns'},
                      React.createElement('label', {}, 'Sauces'),
                      React.createElement('div', {},
                        React.createElement('input', {type: 'checkbox'}),
                        React.createElement('label', {}, 'Sauce')
                      )
                   )
                 ),
                React.createElement('div', {className: 'row'},
                  React.createElement('div', {className: 'large-12 columns'},
                    React.createElement('p', {className: 'button'}, 'Add Veggies')
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement('div', {className: 'modal-wrapper'},
      React.createElement('div', {className: 'modal-container'},
        React.createElement('div', {className: 'modal'},
          React.createElement('a', {className: 'close-modal'},'x'),
          React.createElement('div', {id: 'modal-content'},
            React.createElement('div', {className: 'veggie-options'},
              React.createElement('label', {}, 'Veggies'),
              React.createElement('div', {},
                React.createElement('input', {type: 'checkbox'}),
                React.createElement('label', {}, 'Veggie')
              )
            )
          )
        )
      )
    )
  )

ReactDOM.render(burgerBuilder, document.getElementById('react-app'))

