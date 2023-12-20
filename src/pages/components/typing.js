import { useState, useEffect } from 'react';

export default function useTypingEffect(text, typingSpeed = 150) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text.length === 0) return;

    const intervalId = setInterval(() => {
      setDisplayedText((currentText) => {
        // If current displayed text is equal to the full text, clear the interval.
        if (currentText.length === text.length) {
          clearInterval(intervalId);
          return currentText;
        }
        // Else, add the next character to the displayed text.
        return currentText + text[currentText.length];
      });
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed]);

  return displayedText;
}
