$('#formaction').submit(function(event){
  
  var $units = $('#units').val()
  
  //checking the dropdown
  if($('#select').val() == 'noncommercial'){
    if ($units > 0){
      noncommercial()
    }else{
    	alert('number should be greater than zero')
    }
  }else if($('#select').val() == 'commercial'){
    commercial()
  }else{
   agricultural()
  }
  
  //calculation for bill
  function calculate(r1, r2) {
    var arr = [];
    var first_50 = [];
    var second_50 = [];
    var result = [];
    var counter = 1
    for(i = 1; i <= $units; i++){
        if( i >= 1 && i <= 50){
           first_50.push(i * r1)
           result.push(first_50.slice(-1)[0])
        }
        if( i > 50 && i <= 100){
           second_50.push(counter * r2)
           counter++
           var concat = first_50.slice(-1).pop() + second_50.slice(-1).pop()
           result.push(concat)
        }
    }
      alert(result.slice(-1).pop());
  }

  //calculating non commercial bill
  function noncommercial(){
    calculate(1.25, 1.5)
  	
   }

  function commercial(){
    calculate(1.5, 1.75)
  }

  function agricultural() {
    calculate(0.75, 1)
  }

  event.preventDefault();
})