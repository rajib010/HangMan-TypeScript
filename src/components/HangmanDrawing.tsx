
const HEAD = (
  <div className="w-50 h-50 rounded-full border-10 border-black absolute top-12 right-[-30px]" />
)


const BODY = (
  <div className="w-10 h-100 bg-black absolute top-[120px] right-0" />
)


const RIGHT_ARM = (
  <div className="w-100 h-10 bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-left-bottom" />
)


const LEFT_ARM = (
  <div className="w-100 h-10 bg-black absolute top-[150px] right-2 rotate-30deg origin-right-bottom" />
)



const RIGHT_LEG = (
  <div className="w-100 h-10 bg-black absolute top-[210px] right-[-90px] rotate-60deg origin-left-bottom" />
)


const LEFT_LEG = (
  <div className="w-100 h-10 bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-right-bottom" />
)


const BODY_PARTS =  [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps ={
  numberOfGuesses : number
}


export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps){
  return (
    <div className="relative">
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0"></div>
      <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black"></div>
    </div>
  )
}