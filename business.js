// business objects
var pDetails = [
    { "id": 1, "name": "Muther", 'address': "Cgutta", "accounts": "1", job: 'front-end' },
    { "id": 2, "name": "Hashmi", "address": "Snagar", "accounts": "2", job: 'full-stack' },
    { "id": 3, "name": "Nazeem", "address": "kukatpally", "accounts": "2", job: 'web-desinger' }
];

// business listing
$.each(pDetails, function(key, value) {
    $('#detailList').append('<tr id= ' + value.id + ' class= "details"> <td>' + value.name + '</td>' +
        '<td>' + value.address + '</td>' +
        '<td>' + value.accounts + '</td></tr>'
    );
});

// business show
$('.details').click(function() {
    var id = $(this).attr('id')
    var persnDetl = pDetails.find(x => x.id == id)
    $('.panel-heading > .panel-title').text('Personal Information')
    $('#business-show').toggle();
    $('#business-list').toggle();
})

$('#business-show').hide();
