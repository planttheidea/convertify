const STOP_POINTS = [
  ['special'],
  ['ten'],
  ['unit'],
  ['ten', 'unit'],
  ['unit', 'hundred'],
  ['unit', 'hundred', 'special'],
  ['unit', 'hundred', 'ten'],
  ['unit', 'hundred', 'unit'],
  ['unit', 'hundred', 'ten', 'unit'],
];

const TOKENS = {
  hundred: ['hundred'],
  power: ['thousand', 'million', 'billion', 'trillion'],
  special: [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ],
  ten: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  unit: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
};

const VALUES = {
  billion: 1000000000,
  eight: 8,
  eighteen: 18,
  eighty: 80,
  eleven: 11,
  false: 0,
  fifteen: 15,
  fifty: 50,
  five: 5,
  forty: 40,
  four: 4,
  fourteen: 14,
  hundred: 100,
  million: 1000000,
  nine: 9,
  nineteen: 19,
  ninety: 90,
  one: 1,
  seven: 7,
  seventeen: 17,
  seventy: 70,
  six: 6,
  sixteen: 16,
  sixty: 60,
  ten: 10,
  thirteen: 13,
  thirty: 30,
  thousand: 1000,
  three: 3,
  trillion: 1000000000000,
  true: 1,
  twelve: 12,
  twenty: 20,
  two: 2,
  zero: 0,
};

export {STOP_POINTS};
export {TOKENS};
export {VALUES};
