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
  
  //calculating non commercial bill
  function noncommercial(){	
  	var arr = [];
  	var first_50 = [];
  	var second_50 = [];
  	var result = [];
    var counter = 1
	  for(i = 1; i <= $units; i++){
	  	// switch (i) {
	  	//   case ( i <= 50):
	  	//     result.push(first_50.push(i * 1.25))
	  	//     break;	
	  	//   case ( i > 50 && i <= 100):
  		//     second_50.push(counter * 1.5)
    //         counter++
    //         var concat = first_50.slice(-1).pop() + second_50.slice(-1).pop()
    //         result.push(concat)
	  	// }
        if( i >= 1 && i <= 50){
           result.push(first_50.push(i * 1.25))
        }
        if( i > 50 && i <= 100){
           second_50.push(counter * 1.5)
           counter++
           var concat = first_50.slice(-1).pop() + second_50.slice(-1).pop()
           result.push(concat)
        }
	  }
      alert(result.slice(-1).pop())
   }

  function commercial(){

  }

  function agricultural() {
  }

  event.preventDefault();
})