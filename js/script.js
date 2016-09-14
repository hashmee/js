$('#formaction').submit(function  (event) {
formArray = [];
formArray.push($('#name').val(),
	$('#email').val(),
	$('#select').val())
  router(formArray);
  event.preventDefault();
});

function router(formvalues){
//	$('#formaction').hide();
	$.each(formvalues, function(i, v){
		$('.formClass').append( " - " + v);
	})
}


