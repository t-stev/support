# Import Guide

### 1. Request your data from Spotify

In order to request your `endsong.json` files you'll need to send Spotify a simple email. You can use this as a template:

> Hi,
> <br><br> I would like to receive a copy of my extended lifetime streaming history in technical endsong.json format. The data requested from the privacy tab on the spotify.com/account page only includes the data of last year, and I want my lifetime data (so the endsong.json files). A link to my Spotify profile is `link to your Spotify profile` and my username is `your username`. A song I've recently added to my library is "`name of a song youve recently added to your library`" by `name of the artist`.
> And just to be sure: I don't want the data I can request myself with the button on my account page, I'm looking for the "endsong.json" files.
> <br><br>Best regards,
> <br>`your name`

You can send this email to `privacy@spotify.com`, and if you **send this from the emailadress linked to your Spotify account** that will make the process easier and a lot quicker. Otherwise they may ask for another way to verify your identification (naming a song you've recently added to your library already does this, but they can still reject that).

### 2. Confirm your request

When your request is accepted by Spotify they'll email you a link to confirm the request. Click "confirm" and they'll start gathering your data.
![Step 2 image](https://media.discordapp.net/attachments/830562126560231464/830562247663288411/step-2.png)

### 3. Turn on the Streams Sync to prevent a gap in your data

The files you receive from Spotify miss the last 2-5 days of data. For example: if you've requested the data on June 1st and you've received the data on June 14th, the data will include streams untill ~June 12th. Since you (of course) want accurate data you can turn on the Streams Sync after you've requested your files (so at this step). You can do that in Settings > Import management > Sync streaminghistory. Make sure to set this to "enabled". You can read more about the Stream Sync [here](/streams/sync))

![Step 3 image](https://media.discordapp.net/attachments/830562126560231464/870771640445829190/image0.png?width=211&height=457)

### 4. Wait till your data arrives in your email

This can take a while. As Spotify states:

> We're currently gathering a copy of your personal data. This shouldn't take longer than 30 days. But don't worry, we'll send you an email when it's ready.

But in most of the cases you'll receive the data within ~3 days.

### 5. Download the files

Once your data is ready to download youl'll get an email with a link to download it.
![Step 5 image](https://media.discordapp.net/attachments/830562126560231464/856578846354571324/unknown.png)

### 6. Download and extract the .ZIP file

Once you've downloaded your data, it will be in a .ZIP file. Depending on what Spotify has send you, this can a lot of personal information which **you should never share with others**
<br>
[How to extract a .ZIP file](https://www.youtube.com/watch?v=do3u3tXAbWQ)

### 7. Get your import code

To link your files to your account, you'll need to fill in a special import code. You can find your unique import code in the Spotistats app on the Manage imports page. "Then copy (tap the code) or type the code into website.
![Step 7 image](https://media.discordapp.net/attachments/830562126560231464/830562249177432134/step-4.png)

### 8. Upload your files

When you have your .JSON files ready, click the "Choose files" button. Then, select the `endsong.json` files (hold shift to select multiple files).

Note: depending on the number of streams this can take a couple of
seconds to minutes to upload

### ![Step 8 image](https://media.discordapp.net/attachments/830562126560231464/856580472050286602/unknown.png)

### 9. Wait till all your streams are processed

Once your streams have reached the Spotistats servers, they have to be processed. Duplicate streams will be filtered out, and there will be a lot of calculations made for each stream in order to save it securely in the database. Depending on the amount of streams and the amount of people importing their streams at once this can take just a couple seconds up to a couple of hours.

::: tip
You can close the website while your streams are being processed
:::

Once all green progress bars have reached 100% (or "Fully imported") you'll be ready to go.

![Step 9 image](https://media.discordapp.net/attachments/830562126560231464/856580928582189057/unknown.png)

### 10. Ready to go!

Congratulations! You can now view your full listening history, playcount, and much more. Your future streams will be synced to the database automatically.
