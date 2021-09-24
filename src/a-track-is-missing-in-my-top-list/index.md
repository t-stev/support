# A track is missing in my top list

Most songs are uploaded to Spotify multiple times: as a single, in an album, maybe as a second single, or in a compilation. Every time the song is uploaded it's treated as a completely different song by the Spotify API (all those versions have different unique identifiers which are short strings used to identify the song and request info about it for example).

When calculating your top 150 tracks, the server searches in our database for the most occurring identifiers (note that the identifiers are different for the different uploads of the song). The amount of times that identifier occurs is only the count that you've played that exact version with that exact identifier. To include all the streams for that song, the server then takes all those 150 songs and for each of those songs it looks up how many times another song with the same exact title and artists has been played in that timeframe, and then adds those streams to the total count.

## Example

For example, this song (Hurts So Good by Astrid S) is on Spotify twice:
As a single: https://open.spotify.com/track/46ydq5g3k17iLJs3qMDvO6
In an album: https://open.spotify.com/track/46u5B2WN4wryYLZuMAOmI4

Note that the identifier (the last "word" in the URL) is different (`46ydq5g3k17iLJs3qMDvO6` vs `46u5B2WN4wryYLZuMAOmI4`) (also easy to spot since they have different album covers)

So if I've played the single version 100 times, and the album version 50 times the total times played for that song is 150, but:

- Let's say every other item in my top 150 are on Spotify just as a single, and they all have 110 streams
- When the server now fetches the top 150 songs, it gets a list of all those songs with 110 streams, and the Hurts So Good is not included (despite it having 150 composite streams)

## So what now?

I've come up with a solution but it's really complicated and requires a lot of technical improvements to the current database and other systems which have to be done first. I'm doing my best to fix this asap 🙃
