
const KEYS = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M"
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-10 gap-1 mb-2">
        {KEYS.slice(0, 10).map(key => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`p-2 text-sm font-semibold rounded ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } ${
                isInactive ? 'bg-gray-400 text-gray-500' : ''
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              key={key}
              disabled={disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-9 gap-1 mb-2">
        {KEYS.slice(10, 19).map(key => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`p-2 text-sm font-semibold rounded ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } ${
                isInactive ? 'bg-gray-400 text-gray-500' : ''
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              key={key}
              disabled={disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {KEYS.slice(19).map(key => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`p-2 text-sm font-semibold rounded ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } ${
                isInactive ? 'bg-gray-400 text-gray-500' : ''
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              key={key}
              disabled={disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
