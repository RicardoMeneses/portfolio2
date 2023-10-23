import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Typewriter = ({
  words,
  delay,
  infinite,
  style,
}: {
  words: string[];
  delay: number;
  infinite: boolean;
  style: TextProps;
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < words[currentWordIndex].length + 1) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + words[currentWordIndex][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (currentWordIndex < words.length - 1) {
      // Move to the next word in the array
      setCurrentIndex(0);
      setCurrentText('');
      setCurrentWordIndex((prevWordIndex) => prevWordIndex + 1);
    } else if (infinite) {
      // Start from the beginning if infinite is set
      setCurrentIndex(0);
      setCurrentText('');
      setCurrentWordIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, words, currentWordIndex]);

  return (
    <Text {...style} _after={{ content: '" |"' }}>
      {currentText}
    </Text>
  );
};

export default Typewriter;
