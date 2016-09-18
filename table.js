function makeTable(container, data) {
    var table = $("<table/>").addClass('table table-striped table-hover');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

function appendTableColumn(table, rowData) {
  var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
  $.each(rowData, function(colIndex, c) { 
      lastRow.append($('<td/>').text(c));
  });
   
  return lastRow;
}
 
$(document).ready(function() {
    var data = [["City 1", "City 2", "City 3"], //headers
                ["New York", "LA", "Seattle"], 
                ["Paris", "Milan", "Rome"], 
                ["Pittsburg", "Wichita", "Boise"],
                ["Pittsburg", "Wichita", "Boise"]]
    var cityTable = makeTable($(document.body), data);
});


$(document).ready(function() {
    var table = makeTable(data);
    appendTableColumn(table, ["Calgary", "Ottawa", "Yellowknife"]);
});


String.prototype.embraceWith = function(tag) {
    return "<" + tag + ">" + this + "</" + tag + ">";
};

var results = [
  {type:"Fiat", model:500, color:"white"}, 
  {type:"Mercedes", model: "Benz", color:"black"},
  {type:"BMV", model: "X6", color:"black"}
];

var tableHeader = ("Type".embraceWith("th") + "Model".embraceWith("th") + "Color".embraceWith("th")).embraceWith("tr");
var tableBody = results.map(function(item) {
    return (item.type.embraceWith("td") + item.model.toString().embraceWith("td") + item.color.embraceWith("td")).embraceWith("tr")
}).join("");

var table = (tableHeader + tableBody).embraceWith("table");

$("#result-holder").append(table);