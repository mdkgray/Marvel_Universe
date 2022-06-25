var tableBody = document.getElementById('searchResults');
var fetchButton = document.getElementById('searchButton');
var characterSelect = document.getElementById("characterInput").checked
var movieSelect = document.getElementById("movieInput").checked
var comicSelect = document.getElementById("comicInput").checked

// Heres the Marvel API call. The data is logged to the console, however I'm still working on getting it to display.
function marvelAPICall () {
  var marvelPubAPIKey = "9994656a02f0ce9c84fd8dfa11d66b24";
  var timeStamp = dayjs().unix();
  var marvelPrvtAPIKey = "df27d4d6846ba6ac7b38d0f10f87f913ccdbb401";
  var userSearch = "thor"
  var hashString = timeStamp+marvelPrvtAPIKey+marvelPubAPIKey
  var hash =md5(hashString);
  var marvelAPIQueryURL = "http://gateway.marvel.com/v1/public/comics?ts="+timeStamp+"&apikey=9994656a02f0ce9c84fd8dfa11d66b24&hash="+hash;

  console.log(timeStamp)
  console.log(marvelAPIQueryURL)

  fetch(marvelAPIQueryURL)
    .then(function(response) {
    return response.json();
    })
      .then(function(data) {
        console.log(data);
      })
}

marvelAPICall();


// fetchButton.addEventListener('click', getApi);

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
