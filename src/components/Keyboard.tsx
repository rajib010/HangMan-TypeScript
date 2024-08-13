const KEYS = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

type KeyboardProps = {
  disabled?: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}


function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div className="grid grid-cols-auto-fit min-w-[75px] gap-2 p-4">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button onClick={() => addGuessedLetter(key)}
            className={`p-4 py-2 font-semibold rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
              ${isInactive ? 'bg-gray-400 text-gray-500' : ''}${disabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
            key={key}>
            {key}
          </button>
        )
      })}
    </div >
  )
}

export default Keyboard