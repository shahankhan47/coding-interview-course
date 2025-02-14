// Find 1st and Find nth tweet
const tweetArray = ["tweet1", "tweet2", "tweet3", "tweet4"];
const firstTweet = tweetArray[0];
const lastTweet = tweetArray[tweetArray.length-1]

// Now tweetArray has objects with dates and you need to compare dates of 2 tweets:
const newTweetArray = [
    {
        tweet: "tweet1",
        date: 2011
    },
    {
        tweet: "tweet2",
        date: 2014
    },
    {
        tweet: "tweet3",
        date: 2018
    }
]

// If we compare conventionally we'll have to use nested loop which will cost O(n^2) time.
