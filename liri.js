var keys = require('./keys.js');
var Twitter = require('twitter');

function Spotify() { require('spotify') };
var spotify = new Spotify(keys.spotifyKeys);


var grabbingTwitties = function() {
    var client = new Twitter(keys.twitterKeys);
    var params = { screen_name: 'UUBCWilder' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log('---------------------------');
                console.log(tweets[i].text);
            }
        }
    });
}

var grabSpotify = function(songName) {

    console.log(spotify);
    // var spotify = new Spotify(keys.spotifyKeys);
    spotify.search({ type: 'track', query: 'songName' }, function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        console.log(data);
    });
}

var chooseAction = function(caseData, functionData) {
    switch (caseData) {
        case 'my-tweets':
            grabbingTwitties();
            break;
        case 'spotify-this-song':
            grabSpotify(functionData);
            break;
        default:
            console.log('type something else, I was made by beginners!');
    }
}

var runApp = function(firstChoice, secondChoice) {
    chooseAction(firstChoice, secondChoice);
};
runApp(process.argv[2], process.argv[3]);