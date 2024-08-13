import { useCallback, useEffect, useState } from "react"
import './index.css'
import words from "./wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"


function App() {

  function getWord() {
    return words[Math.floor(Math.random() * words.length) + 1]
  }

  const [wordToGuess, setWordToGuess] = useState(getWord())

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("")
    .every(letter =>
      wordToGuess.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[A-Za-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return ()=>{
      document.addEventListener("keypress", handler)
    }
  }, [guessedLetters])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.addEventListener("keypress", handler)
    }
  }, [])





  return (
    <div className="max-w-[800px] flex flex-col gap-[2rem] m-auto justify-center items-center">
      <div className="text-center text-3xl">
        {isWinner && "You won -- Refresh to start a new Game"}
        {isLoser && "Nice Try-- Refresh to start a new Game"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className="self-stretch">
        <Keyboard disabled={isWinner|| isLoser}
                  activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
                  inactiveLetters={incorrectLetters}
                  addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  )
}

export default App