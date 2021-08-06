# Import your streaminghistory

Spotify provides some data through [their api](https://developer.spotify.com/documentation/web-api/reference/) but this does not include the amount of times you've streamed a specific artist or track

In order to gain access to these features you'll have to import your streaminghistory:

- Playcount (for artists, tracks & albums)
- Full streaminghistory (duhh)
- Order your top tracks & artists by the amount of streams [instead of machine learning](/)
- All charts which include some amount of streams

## How often do I need to import my streaminghistory?

From the moment you've imported your first endsong file the systems will automatically keep the file (actually the database, not an actual file) up-to-date about every 100 minutes. You can find a guide on how to import your streaminghistory into the app [here](/import/guide)

## Why does the app show a different number of streams than all the imported files summed up?

You may notice that the total amount of streams summed up from your imports doesn't match the number shown on the stats page. Spotistats filters out a couple types of streams:

- Skipped tracks\* (since they make your stats inaccurate)
- Streams under 30 seconds\* (since they make your stats inaccurate)
- Local files (since Spotify doesn't provide any info about these tracks, the tracks don't even have ID's...)
- Podcasts (since Spotify does not have an API for them where I can request info about the podcast, not even the name...)

\* these types of streams are saved in the database, but "hidden" from the stats. Soon you'll be able to include/exclude these from your stats, but for now they're excluded
