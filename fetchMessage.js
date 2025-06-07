export async function fetchDailyMessage() {
  try {
    const response = await fetch("/dailyMessages.json");
    const data = await response.json();

    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const totalQuotes = data.quotes.length;
    const totalVerses = data.verses.length;

    const dailyQuote = data.quotes[dayOfYear % totalQuotes];
    const dailyVerse = data.verses[dayOfYear % totalVerses];

    return Math.random() > 0.5 ? dailyQuote : dailyVerse;
  } catch (error) {
    console.error("Error fetching daily message:", error);
    return "Sorry, something went wrong.";
  }
}