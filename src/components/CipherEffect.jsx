import React, { useState, useEffect, useRef } from 'react';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/?!@#$%^&*()1234567890";

const CipherEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span className="cipher-text" aria-label={text}>
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          // A character is "solved" if it matches the original text
          className={char === text[index] ? 'solved' : 'scrambled'}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default CipherEffect;