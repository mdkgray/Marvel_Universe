// variables for switch button selection 
var characterSelect = document.getElementById("characterInput");
var comicSelect = document.getElementById("comicInput");

// variables for buttons
var searchButton = document.getElementById("searchButton");
var clearHistoryBttn = document.getElementById("clearHistoryBttn");
var clearBttn = document.getElementById("clearBttn");
var nextButton = document.getElementById("nextBttn");
var prevButton = document.getElementById("prevBttn");
var gNextButton = document.getElementById("gNextBttn");
var gPrevButton = document.getElementById("gPrevBttn");


// variables for search results 
var searchHistoryDisplay = document.querySelector("#searchHistory");
var searchHistoryArray = [];
var searchParameters = document.querySelector(".searchParameters");
var searchResultsText = document.querySelector(".searchResultsText");
var marvelResults = document.querySelector(".marvel-result-name");
var searchResultsContainer = document.getElementById("searchResults");
var searchTerm;

// variables for pagination
var category ="";
var limit = 20;
var offset = 0;
var offsetCount = 0;
var totalCount;

// Marvel API Hash
var timeStamp = dayjs().unix();
var marvelAPIKey = "9994656a02f0ce9c84fd8dfa11d66b24";
var hashString = timeStamp+"df27d4d6846ba6ac7b38d0f10f87f913ccdbb401"+marvelAPIKey
var hash = md5(hashString);

// Function to create the Hash needed to authenticate the Marvel API call
function md5(hashString) {
  var hc="0123456789abcdef";
  function rh(n) {var j,s="";for(j=0;j<=3;j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
  function ad(x,y) {var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
  function rl(n,c)            {return (n<<c)|(n>>>(32-c));}
  function cm(q,a,b,x,s,t)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
  function ff(a,b,c,d,x,s,t)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
  function gg(a,b,c,d,x,s,t)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
  function hh(a,b,c,d,x,s,t)  {return cm(b^c^d,a,b,x,s,t);}
  function ii(a,b,c,d,x,s,t)  {return cm(c^(b|(~d)),a,b,x,s,t);}
  function sb(x) {
      var i;var nblk=((x.length+8)>>6)+1;var blks=new Array(nblk*16);for(i=0;i<nblk*16;i++) blks[i]=0;
      for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
      blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
  }
  var i,x=sb(hashString),a=1732584193,b=-271733879,c=-1732584194,d=271733878,olda,oldb,oldc,oldd;
  for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
      a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
      b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
      c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
      d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
      a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
      b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
      c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
      d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
      a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
      b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
      c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
      d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
      a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
      b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
      c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
      d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
      a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
      b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
      c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
      d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
      a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
      b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
  }
  return rh(a)+rh(b)+rh(c)+rh(d);
}

// Search button event listener to call Marvel API
searchButton.addEventListener("click", function (event) {
  offset = 0;

// Code to implement dynamic select to API Call
function dynamicSelect() { 
if(characterSelect.checked&&comicSelect.checked) {
  } else if(characterSelect.checked) {
    category = "characters";
    marvelAPICall(limit, offset);
  } else if(comicSelect.checked) {
      category = "comics";
      marvelAPICall(limit, offset);
  };
};
dynamicSelect();

  nextButton.setAttribute("class", "show");
  prevButton.setAttribute("class", "show");
// displaySearchHistory();
});

// Heres the Marvel API call. The data is logged to the console, however I'm still working on getting it to display.
function marvelAPICall (limit, offset) {
  var marvelAPIQueryURL = "https://gateway.marvel.com/v1/public/"+category+"?ts="+timeStamp+"&apikey="+marvelAPIKey+"&hash="+hash+"&limit="+limit+"&offset="+offset;
  // if offset + results goes above total acount then last page and hide next button.
  console.log(marvelAPIQueryURL);

  fetch(marvelAPIQueryURL)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
      totalCount = data.data.total;
      var marvelAPIData = data.data.results;
      if(category=="characters") {
        function characterDisplay (){ 
          searchParameters.innerHTML = "Showing "+totalCount+" results for all comics";
          searchResultsContainer.innerHTML = "";
          for (var i = 0; i < marvelAPIData.length; i++) {
            var marvelResultName = document.createElement("li");
            var resultLink = document.createElement("a");
            let dataName = (marvelAPIData[i].name);
            marvelResultName.classList.add("marvel-result-name");
            marvelResultName.textContent = marvelAPIData[i].name;
            marvelResultName.setAttribute("data-charName",dataName);
            marvelResultName.append(resultLink);
            searchResultsContainer.append(marvelResultName);
            marvelResultName.addEventListener("click",callGoogle);
          };
        }; characterDisplay();

      } else if(category=="comics") { 
          function comicDisplay (){ 
            searchParameters.innerHTML = "Showing "+totalCount+" results for all comics";
            searchResultsContainer.innerHTML = "";
            for (var i = 0; i < marvelAPIData.length; i++) {
              var marvelResultName = document.createElement("li");
              var resultLink = document.createElement("a");
              let dataName = (marvelAPIData[i].title);
              marvelResultName.classList.add("marvel-result-name");
              marvelResultName.textContent = marvelAPIData[i].title;
              marvelResultName.setAttribute("data-charName",dataName);
              marvelResultName.append(resultLink);
              searchResultsContainer.append(marvelResultName);
              marvelResultName.addEventListener("click",callGoogle);
            };
          }; comicDisplay();
        };
    });
};

// Next & Previous button functions
nextButton.addEventListener("click", function(event) {
  if(offset >=totalCount) {
    return;
  }
  searchResultsContainer.innerHTML = "";
  offset = offset + 20;
  marvelAPICall(limit, offset);
});
prevButton.addEventListener("click", function(event) {
  if(offset == 0) {
    return;
  };
  searchResultsContainer.innerHTML = "";
  offset = offset - 20;
  marvelAPICall(limit, offset);
});

// // next button function
// gNextButton.addEventListener("click", function(event) {
//   if(offset >=totalCount) {
//     return;
//   }
//   searchResultsContainer.innerHTML = "";
//   offset = offset + 20;
//   googleAPICall();
// });

// // previous button function
// gPrevButton.addEventListener("click", function(event) {
//   if(offset == 0) {
//     return;
//   };
//   searchResultsContainer.innerHTML = "";
//   offset = offset - 20;
//   googleAPICall();
// });

// Function to Call Google API with Marvel search Term
function callGoogle() {
    var searchTerm = this.getAttribute("data-charName")
    searchParameters.innerHTML = "Get inspired by\:  " + searchTerm;

    logHistory(searchTerm);
    displaySearchHistory();
  // Google API call.
  function googleAPICall(limit, offset){
    var googleAPIKey = "AIzaSyD7sP34KCHB1bSqJZEouHRFLhFVPC9pu7w";
    var queryURL = "https://www.googleapis.com/customsearch/v1?key="+googleAPIKey+"&cx=716b6da6cc16aa14e&q="+searchTerm+"Marvel"+"&searchType=image&limit="+limit+"&offset="+offset;
    console.log(queryURL);

    // gNextButton.setAttribute("class", "show");
    // gPrevButton.setAttribute("class", "show");

    fetch(queryURL)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          if(category=="characters") {;
          var googleAPIData = data.items;
          console.log(googleAPIData);
          searchResultsContainer.innerHTML = "";

          for(let i = 0; i < googleAPIData.length; i++) {
            var resultCard = document.createElement("div");
            resultCard.classList.add('card', 'bg-dark', 'border-white', 'cols-sm-3', 'w-10', 'p-3', 'm-3');

            let imageElement = document.createElement("img");
            imageElement.classList.add("imageEl");
            let imgThumbLink = data.items[i].image.thumbnailLink;

            imageElement.setAttribute("src", imgThumbLink); 
            resultCard.appendChild(imageElement);
            searchResultsContainer.appendChild(resultCard);
            // searchResultsContainer.setAttribute("data-imgEL", imgLink);
            };

          } else if(category=="comics") {
            var googleAPIData = data.items;
            console.log(googleAPIData);
            searchResultsContainer.innerHTML = "";
    
            for(let i = 0; i < googleAPIData.length; i++) {
              if (data.items[i].hasOwnProperty("image")) {
                var resultCard = document.createElement("div");
                resultCard.classList.add('card', 'bg-dark', 'border-white', 'cols-sm-3', 'w-10', 'p-3', 'm-3');

                let imageElement = document.createElement("img");
                imageElement.classList.add("imageEl");
                let imgThumbLink = data.items[i].image.thumbnailLink;

                imageElement.setAttribute("src", imgThumbLink);
                resultCard.appendChild(imageElement);
                searchResultsContainer.appendChild(resultCard);
              } else {
                var resultCard = document.createElement("div");
                resultCard.classList.add('card', 'bg-dark', 'border-white', 'cols-sm-3', 'w-10', 'p-3', 'm-3');

                let imageElement = document.createElement("img");
                imageElement.classList.add("imageEl");
                let imgThumbLink = data.items[i].pagemap.cse_thumbnail[0].src;

                imageElement.setAttribute("src", imgThumbLink);
                resultCard.appendChild(imageElement);
                searchResultsContainer.appendChild(resultCard);
              }; 
            };
          };
        });
  };
  googleAPICall();
  nextButton.setAttribute("class", "hide");
  prevButton.setAttribute("class", "hide");
};

// Log search history to local storage
function logHistory(searchTerm) {
    searchHistoryArray.push(searchTerm);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArray));
};

// Display search history to page 
function displaySearchHistory() {
    var searchHistoryArray = JSON.parse(localStorage.getItem("searchHistory"));
    searchHistoryDisplay.innerHTML = ""
    clearBttn.setAttribute("class", "show");
    for (var i = 0; i < searchHistoryArray.length; i++) {
        var searchHistoryItem = document.createElement("li");
        searchHistoryItem.textContent = searchHistoryArray[i];
        searchHistoryDisplay.appendChild(searchHistoryItem);
    }
};

// event listener for clear search history
clearHistoryBttn.addEventListener("click", clearSearchHistory);

// function to clear search history
function clearSearchHistory() {
    localStorage.clear();
    searchHistoryArray = [];
    searchHistoryDisplay.innerHTML = "";
    clearBttn.setAttribute("class", "hide");
};