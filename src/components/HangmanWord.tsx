type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
  reveal?: boolean
}



function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div className="flex gap-1 text-[6rem] font-bold uppercase font-mono">
      {
        wordToGuess.split("").map((letter, index) => (
          <span className="border-b-0.1em border-black" key={index}>
            <span className={guessedLetters.includes(letter) || reveal ? "visible text-black" : "hidden text-red-700"}>
              {letter}
            </span>
          </span>
        ))}
    </div>
  )
}

export default HangmanWord