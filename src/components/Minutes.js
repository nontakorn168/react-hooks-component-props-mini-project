import React from "react";

function MinutesEmoji({ minutes }) {
    const getReadingTimeDisplay = (minutes) => {
      if (minutes < 30) {
        const cups = Math.ceil(minutes / 5); // Coffee cups for every 5 minutes
        return "☕️".repeat(cups) + ` ${minutes} min read`;
      } else {
        const bentos = Math.ceil(minutes / 10); // Bento boxes for every 10 minutes
        return "🍱".repeat(bentos) + ` ${minutes} min read`;
      }
    };
  
    return <p>{getReadingTimeDisplay(minutes)}</p>;
  }
  
  export default MinutesEmoji;