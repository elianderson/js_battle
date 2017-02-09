$('.open-modal').on('click', function(e){
  $('.modal-wrapper').removeClass('hide');
});

$('.close-modal').on('click', function(e){
  $('.modal-wrapper').addClass('hide');
});

$('input').on('change', function(e){
  price = parseInt($('#price').val())

  if ($(this).attr('id') == 'name' ){
  } else {
    if ($(this).prop('checked') == true) {
      price += parseInt($(this).val());
    } else {
      price -= parseInt($(this).val());
    }
  }

  $('#price').val(price);
})

$('select').on('change', function(e){
  price = parseInt($('#price').val())
  price += parseInt($(this).val());
  $('#price').val(price);
})
