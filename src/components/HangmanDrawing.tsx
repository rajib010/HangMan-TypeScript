import React from 'react';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = (
  <div className="w-12 h-12 rounded-full border-4 border-black absolute top-[35px] right-0" />
);

const BODY = (
  <div className="w-1 h-[4vw] bg-black absolute top-[6vw] right-5" />
);

const RIGHT_ARM = (
  <div className="w-14 h-1 bg-black absolute top-24 right-6 rotate-[-30deg] origin-right-bottom" />
);

const LEFT_ARM = (
  <div className="w-14 h-1 bg-black absolute top-24 left-[275px] rotate-[30deg] origin-left-bottom" />
);


const RIGHT_LEG = (
  <div className="w-14 h-1 bg-black absolute top-[180px] left-[248px] rotate-[-60deg] origin-left-bottom" />
);

const LEFT_LEG = (
  <div className="w-14 h-1 bg-black absolute top-[180px] left-[245px] rotate-[60deg] origin-right-bottom" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative h-[20vw] top-0 p-5">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-5 w-2 bg-black absolute top-5 right-5"></div>
      <div className="h-2 w-40 bg-black ml-24"></div>
      <div className="h-[38vh] w-2 bg-black ml-24"></div>
      <div className="h-2 w-[15vw] bg-black"></div>
    </div>
  );
}
