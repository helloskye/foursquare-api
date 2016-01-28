
var clientId = 'EQ124X2XB55O5STAT323FYVCLS3N1XOSGT50AWFSYLXHUZ4H';
var clientSecret = 'MNA04GQN1IYIP3ZRKBPYHXQKA42UKXPENUJ1NYLIFNY3J04Z';
// Backup Id and Secret: Only use these if indicated by teachers.
// var clientId = 'O4MPQEUQH5F50ZJIKINRZZLQWVDVVLAYOSFYMUHW4RFLBDXH';
// var clientSecret = 'TRVSKP35TAJW4AYD0XVTYARE0RI5A1MVSSHU5XANNJKRA4DV';


var searchEndpoint = 'https://api.foursquare.com/v2/venues/search';
var detailsEndpoint = 'https://api.foursquare.com/v2/venues/';
// Latitude and Longitude of the Google office.
var googleLatLon = '40.74138576966485,-74.00251216940646';

var authParams = {
    'client_id' : clientId,
    'client_secret' : clientSecret,
    'v' : '20160126'
};


$(document).ready(function(){
  $('#search-btn').click(function() {
        clearResults();
        addResultHeader();
        var query = $('#search-query').val();
        // TODO 1: Call searchFoursquare with the right parameters
    });
});


// Searchers for foursquare venues.
// Parameters:
//   query: String that represents the query.
//   latLon: String that represents the location nearby which you want to search.
//   callback: single-parameter function that processes the search results.
function searchFoursquare(query, latLon, callback) {
    // TODO 2: query the fourquare server here, using jQuery's $.get() function.
}

// Clears the html result elements, so you can then populate them with fresh results.
function clearResults() {
    $('#search-results').empty();
    $('#detail-results').empty();
}

// Adds a table header to the result table.
// TODO 3: Modify this if you want to display different attributes.
function addResultHeader() {
    $('#search-results').append("<th>Venue</th><th>Location</th><th>Url</th>");
}

// Adds a single result to the result table.
// TODO: Modify this if you want to display different attributes.
function addResult(venue) {
    var row = $('<tr>');
    // TODO 4: Make the name a clickable link that shows more details of this place.
    // You can use makeClickableLink() from below.
    row.append($("<td>").append(venue.name));
    row.append($("<td>").text(venue.location.address));
    if (!!venue.url) {
        var link = $('<a>').attr('href', venue.url).attr('target', '_blank').append(venue.url);
        row.append($("<td>").append(link));
    }
    $('#search-results').append(row);
}

// Creates a new link node (<a>) with the containing text that calls callback when clicked.
function makeClickableLink(text, callback) {
    return $('<a>').text(text).attr('href', 'javascript:;').click(callback);
}

// Appends details of a single place to the HTML details result block.
// TODO 5: Extend this to display more detailled data to the user.
function showDetails(data) {
    $('#detail-results').text(data.response.venue.likes.summary);
}