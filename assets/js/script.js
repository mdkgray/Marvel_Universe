var tableBody = document.getElementById('searchResults');
var fetchButton = document.getElementById('searchButton');

// 
// Example Fetch, feel free to delete of modify
// 

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);
// 
// 
// 



// Heres the Google API call. The data is logged to the console, however I'm still working on getting it to display. 
// We may need to make a series of cards on the html and append the data to the cards
// Either way, the search variable is "searchTerm", if the marvel api result that the user wants to see is set to "searchTerm", the two api's will talk. 

function googleAPIfunction(){

var googleAPIKey = "AIzaSyD7sP34KCHB1bSqJZEouHRFLhFVPC9pu7w";
var searchTerm = "apple";
var queryURL = "https://www.googleapis.com/customsearch/v1?key="+googleAPIKey+"&cx=716b6da6cc16aa14e&q="+searchTerm;
// &callback=hndlr"


    fetch(queryURL)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)})

function hndlr(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    // Make sure HTML in item.htmlTitle is escaped.
    document.getElementById("content").append(
      document.createElement("br"),
      document.createTextNode(item.htmlTitle)
  );
}}
 };
googleAPIfunction();
