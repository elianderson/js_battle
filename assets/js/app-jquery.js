$('.open-modal').on('click', function(e){
  modalContentContainer = $($(this).attr('data-modal-content'));
  modalContentContainer.addClass('replace-here');
  modalContent = modalContentContainer.children().clone(true);
  modalContentContainer.html('');

  $('#modal-content').html(modalContent);
  $('.modal-wrapper').removeClass('hide');

});

$('.close-modal').on('click', function(e){
  modalContentContainer = $('.replace-here');
  modalContentContainer.append($('#modal-content').children().clone(true));
  modalContentContainer.removeClass('replace-here');

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
