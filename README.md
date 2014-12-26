# EVE Spreadsheet Extension

> Fetch EVE market prices from Google Spreadsheets.

- Last update on 2014-12-26T12:08:32-0300
- EVE SDE Rhea 1.0 109013
- Market data from [EVE-Central](https://eve-central.com)

## Usage:

[Get the add-on](http://) then open your spreadsheet and choose the menu option **Add-ons** &rarr; **EVE Spreadsheet Extension** &rarr; **Use this**, and it's done.

From now on you'll have the formula `EVEMARKET` available in your spreadsheet.

### Example:

```
=EVEMARKET("max", "buy", 10000, "Veldspar", "Verge Vendor")
```

### Arguments:

1. The first argument is what information you want, it accepts `min` for minimum price, `max` for maximum price, or `avg` for average price.
2. The second argument is the type of order you want, it accepts `buy`, `sell`, or `all` for both.
3. The third argument is the minimum amount required for the order to be included in the search, it also accepts `any` for any[1] amount.
4. The fourth argument is the **exact name** of the item you're looking for, e.g. "Veldspar", "Retriever", "1MN Microwarpdrive I", etc.
5. The final argument is optional, it's the **exact name** of the region or solar system you're interested in, e.g. "Sinq Laison", "The Forge", "Jita", "Trossere", etc. If it's not provided the formula includes orders from all regions.

Beware that the script depends on external services, meaning if any one of them are unresponsive, the formula won't work. Also the market data retrieved is cached for 1 minute.

[1] Actually it's not really any amount, there's already a fixed minimum requirement in place for each type of item.
