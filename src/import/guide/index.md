# Import Guide

::: warning
The StreamingHistory.json files which were previously used to import have proven to be very inaccurate and only contain 1 year of data, Spotistats won't accept that format anymore. Instead you'll now be able to import your so called "endsong.json" files. These files contain your full streaminghistory since the day your Spotify account was made, and even include offline streams.

This guide may changed since the last time you've checked it.
:::

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

### 3. Wait till your data arrives in your email

This can take a while. As Spotify states:

> We're currently gathering a copy of your personal data. This shouldn't take longer than 30 days. But don't worry, we'll send you an email when it's ready.

But in most of the cases you'll receive the data within ~3 days.

### 4. Download the files

Once your data is ready to download youl'll get an email with a link to download it.
![Step 4 image](https://media.discordapp.net/attachments/830562126560231464/856578846354571324/unknown.png)

### 5. Download and extract the .ZIP file

Once you've downloaded your data, it will be in a .ZIP file. Depending on what Spotify has send you, this can a lot of personal information which **you should never share with others**
<br>
[How to extract a .ZIP file](https://www.youtube.com/watch?v=do3u3tXAbWQ)

### 6. Get your import code

To link your files to your account, you'll need to fill in a special import code. You can find your unique import code in the Spotistats app on the Manage imports page. "Then copy (tap the code) or type the code into website.
![Step 6 image](https://media.discordapp.net/attachments/830562126560231464/830562249177432134/step-4.png)

### 7. Upload your files

When you have your .JSON files ready, click the "Choose files" button. Then, select the `endsong.json` files (hold shift to select multiple files).

Note: depending on the number of streams this can take a couple of
seconds to minutes to upload

### ![Step 7 image](https://media.discordapp.net/attachments/830562126560231464/856580472050286602/unknown.png)

### 8. Wait till all your streams are processed

Once your streams have reached the Spotistats servers, they have to be processed. Duplicate streams will be filtered out, and there will be a lot of calculations made for each stream in order to save it securely in the database. Depending on the amount of streams and the amount of people importing their streams at once this can take just a couple seconds up to a couple of hours.

::: tip
You can close the website while your streams are being processed
:::

Once all green progress bars have reached 100% (or "Fully imported") you'll be ready to go.

![Step 8 image](https://media.discordapp.net/attachments/830562126560231464/856580928582189057/unknown.png)

### 8. Ready to go!

Congratulations! You can now view your full listening history, playcount, and much more. Your future streams will be synced to the database automatically.
