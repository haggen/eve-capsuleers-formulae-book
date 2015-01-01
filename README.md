# EVE Capsuleer's Formulae Book

> EVE related formulae for Google Spreadsheets.

- Last update on 2015-01-01T20:08:39-0300
- EVE SDE Rhea 1.0 109013
- Market data from [EVE-Central](https://eve-central.com)

### Read before use:

The add-on and the external services it depends on are not guaranteed to work 100% of the time. They might cease to exist without notice, and the data provided might not be reliable.

All the effort I put here is pro-bono. If you feel like something's not right, missing or have any feedback you can contact me at hagg3n at gmail dot com, but I can't guarantee I'll respond in time or at all.

Meanwhile enjoy.

## Usage:

[Get the add-on](http://) then open your spreadsheet and choose the menu option **Add-ons** &rarr; **EVE Capsuleer's Formulae Book** &rarr; **Use in this spreadsheet**. Now you can start typing `=EVE` in any cell to see a list of all formulas available to you.

## Formulae:

You can check out below all the formulas you'll have by using this add-on.

### EVEMARKET

#### Example:

```
=EVEMARKET("max", "buy", "any", "Veldspar", "Verge Vendor")
```

#### Arguments:

1. The value you're looking for, accepts "min" for minimum price, "max" for maximum price, or "avg" for average price.
2. The order bid, accepts "buy", "sell", or "all" for both.
3. Minimum order volume for it to be included. Accepts a number, or "any" for any amount.
4. Exact name of the item. e.g. "Veldspar", "Retriever", "1MN Microwarpdrive I"
5. Optional. Exact name of the region or solar system. e.g. "Sinq Laison", "The Forge", "Jita", "Trossere". If it's not provided the result include orders from all regions.

## License

See [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
