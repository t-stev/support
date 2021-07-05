# Streaming history sync

After importing your data (which you can read more about [here](/import)) you of course want your data to be kept up to date, and that's what this feature is for

## How does it work?

About every 100 minutes your 50 recently played tracks are fetched from Spotify and saved in the same database where your imported streams are. By doing this 24/7 the database - and thus the data in the app - will be kept up to date :)

This feature is disabled by default and after importing your data this feature is automatically enabled so your data will be kept up to date.

## Should I enable this manually?

There is an option to enable the sync manually in the app. When you request your data it'll take about 2 weeks before it arrives and it will contain data from the birth of your Spotify account till about 2 days before you've received the files. For example: if you've requested the data on June 1st and you've received the data on June 14th, the data will include streams untill ~June 12th. Since this sync is started on the moment you import your data, there will probably be a gap of about 2 days. If you're concerned about this gap you can manually turn on the sync after you've requested your data.

### I don't want to import my data but I do want this feature

Of course you can enable this feature without importing your data, but please note that you wont be able to view (accurate) lifetime data.

## Can there be any duplicates between my imported data and the synced data?

No :)
