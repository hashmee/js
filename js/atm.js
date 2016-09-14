$('.atm').submit(function(event){
  if($('#pin').attr('type') == 'password'){  
    var pin = $('#pin').val();
    $('.password').hide();
    $('#pin').val('');
    $('.cash').show();
    $('#pin').attr('type', 'text');
  }else{
    var accCash = 10000;
    var giveCash;
    amount = $('#pin').val()
    while(amount < accCash){
      giveCash = accCash - amount
      amount = amount + giveCash;
    }
    $('#pin').val('')
    if($('#pin').val() < accCash){
      alert('balance in your account is' + giveCash)
    }

  }
  event.preventDefault();
})

$('.cash').hide();
