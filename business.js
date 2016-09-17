var pdetails =[
{"name": "Muther", address: "Cgutta", "branches": "1" },
{"name":"Hashmi" ,"address": "Snagar","branches" : "2"}
];

$.each(pdetails, function( key, value ) {
  $('#table1').html('<tr><td>' + pdetails[0].name + '</td>' + '<td>' + pdetails[0].address + '</td>' + '<td>' + pdetails[0].branches + '</td></tr>'  );
});

