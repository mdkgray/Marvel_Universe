# The Marvellous Marvel Universe

### By Jason Steer, Chris Wallace, Andrei Bondaret and Mackenzie Gray

## Technologies Used

- HTML
- CSS
- JavaScript

## Description 

The motivation for this project was to develop an application using the Marvel API and Google Images API, which could than be used by a Marvel enthusiast to search the Marvel Universe for images of their favourite characters and comics. The user can navigate through search parameters and then be presented with a list which is generated from the Marvel API. They can then select and particular item from the list and be presented with a list of images generated from the Google Images API.

## Outline of codebase writing
HTML:
- Linking Bootstrap, FontAwesome, Google Fonts, Favicon and CSS in the head of the page
- Linking of Bootstrap JavaScript, DayJS, and script.js at the bottom of the body section of the page
- Coding of the page header with text and images
- Coding of the user selection section, search history section and results section of the page using HTML and BootStrap
- Adding footer to the footer section of the page 

CSS:
- Styling for basic components of the page 
- Specifying font family using Google Fonts
- Styling of result list generated from Marvel API call
- Styling of images returned by Google API call

JavaScript:
- Defining global variables to be used in JavaScript code
- Writing of md5 hashstring function to be used in Marvel API call
- Generating event listener for search button and subsequent function for executing Marvel API call and returning results
- Developing pagination using buttons and javascript to allow the user to navigate through search results
- Returning Marvel API results as a list 
- Adding event listener on Marvel results list to execute the Google Images API call
- Writing of code for calling the Google Images API and returning results as cards with associated thumbnail images
- Writing of code for logging user selections to local storage and displaying in the search history section of the page

## Website URL
[Click here to view website](https://mdkgray.github.io/marvel_universe/)

## Screenshots


## Project Status
The application is deployed on the GitHub repository and URL above

## Credits
- https://github.com/iamkun/dayjs
- https://day.js.org/docs/en/display/unix-timestamp
- https://day.js.org/docs/en/installation/browser
- https://ourcodeworld.com/articles/read/1547/how-to-create-md5-hashes-in-javascript
- https://stackoverflow.com/questions/1655769/fastest-md5-implementation-in-javascript/60467595#60467595
- https://www.javascripttutorial.net/object/javascript-check-if-property-exists/

## Acknowledgements

- University of Sydney Coding Bootcamp 
- Marvel API 
- Google Images API

## Badges
[![](https://data.jsdelivr.com/v1/package/npm/dayjs/badge)](https://www.jsdelivr.com/package/npm/dayjs)