// from data.js
var tableData = data;

let tableBody = d3.select('tbody');

// building rows (<tr>) with 7 cells (<td>) in each row

for (let i = 0; i < data.length; i++) {
  let ufoData = data[i];

 
  let row = tableBody.append('tr');

  // city: "benton"
  // comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  // country: "us"
  // datetime: "1/1/2010"
  // durationMinutes: "5 mins."
  // shape: "circle"
  // state: "ar"

  
  let date = ufoData['datetime'];
  let city = ufoData['city'];
  let state = ufoData['state'];
  let country = ufoData['country'];
  let shape = ufoData['shape'];
  let duration = ufoData['durationMinutes'];
  let comments = ufoData['comments'];

  
  row.append('td').text(date);
  row.append('td').text(city);
  row.append('td').text(state);
  row.append('td').text(country);
  row.append('td').text(shape);
  row.append('td').text(duration);
  row.append('td').text(comments);

}

// FILTER BUTTON SECTION

var filterButton = d3.select('#filter-btn');

filterButton.on('click', function(event) {
  // prevent the page from reloading
  d3.event.preventDefault();

  // clear table body
  tableBody.html('');

  // getting date
  var date = d3.select("#datetime").property("value");

  //looking for matching date
  for(let i = 0; i < data.length; i++) {
    let ufoData = data[i];
  
    
    if (date == ufoData['datetime']) {
      let row = tableBody.append('tr');
    
      let date = ufoData['datetime'];
      let city = ufoData['city'];
      let state = ufoData['state'];
      let country = ufoData['country'];
      let shape = ufoData['shape'];
      let duration = ufoData['durationMinutes'];
      let comments = ufoData['comments'];
    
      row.append('td').text(date);
      row.append('td').text(city);
      row.append('td').text(state);
      row.append('td').text(country);
      row.append('td').text(shape);
      row.append('td').text(duration);
      row.append('td').text(comments);
    }
  
  }
})
