var pdetails =[
{"name": "Muther", address: "Cgutta", "branches": "1" },
{"name":"Hashmi" ,"address": "Snagar","branches" : "2"}
];

$.each( pdetails, function( key, value ) {
  console.log( "key", key, "value", value );
});

$.each( pdetails, function( i, v ) {
for (i = 0 ; i < pdetails.length; i++ ) {
$.appendto("#table1"){	
 out += "<tr><td>" +
 pdetails[i].name + "</td><td>" +
 pdetails[i].address + "</td><td>" +
 pdetails[i].branches + "</td></tr>"
 }
}
 });