/**
 * Created by Vaibhav on 7/6/2014.
 */
 
const W_URL = "api.wunderground.com";
const W_API = "/api/c0aec061aa4fcb82c7c2452bf67ac6c77e437070/conditions/q/";
const W_API_TIMEOUT = 3000; // 2000 milliseconds
const LOCAL_PORT = 8000;
const CITY = "city";
const STATE = "state";
const ALL_WEATHER = { CA: 'Campbell', NE: 'Omaha', TX: 'Austin', MD: 'Timonium' };

function weatherOptions(state, city) {
    var options = {
        host: W_URL,
        path: W_API + state + '/' + city + '.json'
    };

    return options;
}

module.exports = {
    W_URL: W_URL,
    W_API: W_API,
    W_API_TIMEOUT: W_API_TIMEOUT,
    LOCAL_PORT: LOCAL_PORT,
    ALL_WEATHER: ALL_WEATHER,
    CITY: CITY,
    STATE: STATE,
    weatherOptions: weatherOptions
};
