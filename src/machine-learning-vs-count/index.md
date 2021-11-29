# What's the difference between "Machine Learning" and "Count"?

You may have noticed that there's two ways to view/sort your top tracks, artists and albums:

## "Machine Learning"

This is currently the default option. The items are ranked and provided through [Spotify's Web API](https://developer.spotify.com/documentation/web-api/reference/#category-personalization). Spotify uses their enourmous database and fancy machine learning models to calculate the list. Which may sound cool, but has proven to be very inaccurate. Nothing has been confirmed but the order is probably based on these factors: total play time, skip through rate, at which time youve listened and if the item has every occured in your lists before. This means that some items may not be included in the list even though you've streamed them more than other items which do appear in the list. This is also the way all other Spotify stats apps and sites display your top tracks, artists and albums (inaccurately :P)

#### Pros

- Can be a little bit faster

#### Cons

- Limited to 3 timeranges (4 weeks, 6 months, lifetime)
- Has proven to be very inaccurate

## "Count"

This way of sorting the items is waaay more accurate, since it just uses the amount of streams of that item. To really make use of the sort by count, I highly suggest you to [import your lifetime streaminghistory](/import). Sorting by count will also allow for a list longer than 99 items, since it doesn't need the Spotify API (which is limited at 99). This also means that you can select custom timeranges, instead of the 3 predefined timeranges from the Spotify API.

#### Pros

- More accurate
- Custom timeranges

#### Cons

- Calculating this list can take up to 3 seconds (depending on how busy the servers are)
- Requires the [one time import of your history](/import)
