
function onInstall() {
  onOpen();
}

function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu().addItem('Use this', '_use').addToUi();
}

function _use() {
  var title = 'EVE Spreadsheet Extension';
  var message = 'The formula EVEMARKET is now available, more information here: https://github.com/haggen/eve-spreadsheet-extension. Fly safe.';
  var ui = SpreadsheetApp.getUi();

  ui.alert(title, message, ui.ButtonSet.OK);
}

function _fetch(type, name) {
  var uri, cache, response, data;

  uri = 'https://eve-spreadsheet-extension-api.herokuapp.com/' + type + '.json?name=' + name;

  cache = CacheService.getUserCache();

  Logger.log(uri);

  // cache.remove(uri);
  response = cache.get(uri);

  if(!response) {
    response = UrlFetchApp.fetch(uri).getContentText();

    // Cache it for a month
    cache.put(uri, response, 60 * 60 * 24 * 30);

    // Avoid "service invoked too many times"
    Utilities.sleep(1000);
  }

  Logger.log(response);

  data = JSON.parse(response)[0];

  return data && 'id' in data ? data.id : 0;
}

/**
 * Fetches information about item prices in Eve, optionally, in a specific region or solar system.
 *
 * @param {"max"} value The value you're looking for, accepts "min" for minimum price, "max" for maximum price, or "avg" for average price.
 * @param {"buy"} order The type of the order, accepts "buy", "sell", or "all" for both types.
 * @param {2000} amount Minimum amount of the item being bought or sold. Accepts "any" for any amount.
 * @param {"Veldspar"} item Exact name of the item.
 * @param {"Jita"} locationName Optional. Exact name of the region or solar system.
 * @return Average price of the item if it's found, 0 otherwise.
 * @customfunction
 */
function EVEMARKET(value, order, amount, item, location) {
  var uri, cache, response, locationName, locationID;

  item = _fetch("types", item);

  uri = 'http://api.eve-central.com/api/marketstat/json?typeid=' + item;

  if(location) {
    locationID = _fetch("regions", location);

    if(locationID) {
      uri += '&regionlimit=' + locationID;
    } else {
      locationID = _fetch("systems", location);
      uri += '&usesystem=' + locationID;
    }
  }

  if(typeof amount == "number") {
    uri += '&minQ=' + amount;
  }

  cache = CacheService.getUserCache();

  Logger.log(uri);

  cache.remove(uri);
  response = cache.get(uri);

  if(!response) {
    response = UrlFetchApp.fetch(uri).getContentText();

    // Cache it for 1 minute
    cache.put(uri, response, 60);

    // Avoid "service invoked too many times"
    Utilities.sleep(1000);
  }

  Logger.log(response);

  return JSON.parse(response)[0][order][value];
}
