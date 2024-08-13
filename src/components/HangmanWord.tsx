
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div className="flex gap-2 text-4xl font-bold uppercase font-mono overflow-hidden min-h-10">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-2 border-black  inline-block w-8 text-center" key={index}>
          <span className={guessedLetters.includes(letter) || reveal ? "visible text-black" : "hidden text-red-700"}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
