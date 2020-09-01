# Cookie Clicker Market Tips
Simple Stock Market Tips addon for Cookie Clicker

Calculates "Resting Value" for each stock and a recommendation for whether you should buy or sell.

It's not get very smart and can't tell if a stock is going up and down so use your own judgement. The mod bases its decision purely on current price and not trajectory.

### Recendly Added
* Stock Market tips now display in their own panel.
* Table for each stock includes Stock, Stock Value, Price, Resting Value, Difference Between Price and Resting Value and Recommendation.
* Buy/Sell buttons directly in panel allow you to buy or sell max stock.
* Total Asset value now displayed (ie if you sold all stock at current prices).

### Features
* Displays "Resting Value" for each stock and directly compares with current price.
* Displays stock level and value of stock at current stock price.
* Displays Buy, Sell or Hold recommendation based on current value and resting value.

### Planned Features
* Typical High/Low for each stock under different modes

### Oh and Maybe...?
* Display mode that stock is in
* Display duration before stock changes mode

## Using
Copy this code and save it as a bookmark. Paste it in the URL section. To activate, click the bookmark when the game's open.

```javascript
javascript: (function () {
	Game.LoadMod('https://raw.githack.com/ephant/ccmarkettips/master/markettips.js');
}());
```

