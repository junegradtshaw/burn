var urlString="https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY"

var getter = $.ajax({
  urlString,
  method: "GET",
  dataType: "json"
})

getter.done(function(response) {
  console.log("Succeeded AJAX call");
  generateTable(response);
})

getter.fail(function() {
  console.log("Failed AJAX call NASA");
})

function generateTable(response) {
  var row=generateRow(response);
  $('#NASA').append(row);
}

function generateRow(cellArray) {
  var rowText="<tr>";
  cellArray.forEach(function(cell) {
    rowText+="<td>"+cell+"</td";
  })
  rowText+="</tr";
  }
}
