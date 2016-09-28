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
    var dDetails = $('.panel-body')
    var id = $(this).attr('id')
    var persnDetl = pDetails.find(x => x.id == id)
    $('.panel-heading > .panel-title').text('Personal Information')
    dDetails.html('<b>Name : </b>' + ' ' + persnDetl.name + '<br>' + '<b>Address : </b>' + ' ' + persnDetl.address + '<br>' + '<b>Accounts : </b>' + ' ' + persnDetl.accounts + '<br>' + '<b>Job : </b>' + ' ' + persnDetl.job)
    $('#business-show').toggle();
    $('#business-list').toggle();
})

$('#member').click(function() {
    var name = $('#name').val();
    var address = $('#address').val();
    var account = $('#account').val();
    var job = $('#job').val();

    $('#business-form').toggle();
    $('#business-list').toggle();
})

$('#business-show').hide();
$('#business-form').hide();
