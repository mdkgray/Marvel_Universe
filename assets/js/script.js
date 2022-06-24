var tableBody = document.getElementById('searchResults');
var fetchButton = document.getElementById('searchButton');
var characterSelect = document.getElementById("characterInput").checked
var movieSelect = document.getElementById("movieInput").checked
var comicSelect = document.getElementById("comicInput").checked

function marvelAPICall () {
  var marvelPubAPIKey = "9994656a02f0ce9c84fd8dfa11d66b24";
  var timeStamp = dayjs().unix();
  var marvelPrvtAPIKey = "df27d4d6846ba6ac7b38d0f10f87f913ccdbb401";
  var userSearch = "thor"
  var hashString = timeStamp+marvelPrvtAPIKey+marvelPubAPIKey
  var hash =md5(hashString);
  var marvelAPIQueryURL = "http://gateway.marvel.com/v1/public/comics?ts="+timeStamp+"&apikey=9994656a02f0ce9c84fd8dfa11d66b24&hash="+hash;

  console.log(timeStamp)
  console.log(hashString)
  console.log(hash)
  console.log(marvelAPIQueryURL)

  if(characterSelect) {
  var category = "characters"
  };
  if(movieSelect) {
  var category = "movies"
  };
  if(comicSelect) {
  var category = "comics"
  };

  fetch(marvelAPIQueryURL)
    .then(function(response) {
    return response.json();
    })
      .then(function(data) {
        console.log(data);
      })
}

marvelAPICall();
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);
// 
// 
// 



// Heres the Google API call. The data is logged to the console, however I'm still working on getting it to display. 
// We may need to make a series of cards on the html and append the data to the cards
// Either way, the search variable is "searchTerm", if the marvel api result that the user wants to see is set to "searchTerm", the two api's will talk. 

function googleAPIcall(){

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
googleAPIcall();
