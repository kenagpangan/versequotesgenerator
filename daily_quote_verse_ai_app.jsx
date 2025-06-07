// DailyVerseAI – One Daily Quote or Bible Verse

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const demoQuotes = [
  "Every day is a new beginning. Trust in God’s plan.",
  "God’s grace is new every morning.",
  "With faith, all things are possible.",
  "Let go and let God.",
];

const demoVerses = [
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "Jeremiah 29:11 - 'For I know the plans I have for you,' declares the Lord...",
  "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "Romans 8:28 - All things work together for good to those who love God...",
];

function getDailyMessage() {
  const date = new Date().toISOString().split('T')[0];
  const hash = Array.from(date).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const showQuote = hash % 2 === 0; // Alternate quote or verse each day
  const contentArray = showQuote ? demoQuotes : demoVerses;
  const index = hash % contentArray.length;
  return { type: showQuote ? 'Quote' : 'Verse', content: contentArray[index] };
}

export default function DailyVerseAIApp() {
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    const todayMessage = getDailyMessage();
    setMessage(todayMessage);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
            <Card>
        <CardContent className="p-6 text-lg">
          <p className="mb-2 font-semibold">{message.type} of the Day</p>
          <p className="mb-4">{message.content}</p>
          <p className="text-sm text-gray-500">(Updates daily)</p>
        </CardContent>
      </Card>
    </div>
  );
}
