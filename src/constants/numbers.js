const STOP_POINTS = [
  ['special'],
  ['ten'],
  ['unit'],
  ['ten', 'unit'],
  ['unit', 'hundred'],
  ['unit', 'hundred', 'special'],
  ['unit', 'hundred', 'ten'],
  ['unit', 'hundred', 'unit'],
  ['unit', 'hundred', 'ten', 'unit']
];

const TOKENS = {
  hundred: [
    'hundred'
  ],
  power: [
    'thousand',
    'million',
    'billion',
    'trillion'
  ],
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
    'nineteen'
  ],
  ten: [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ],
  unit: [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]
};

const VALUES = {
  'false': 0,
  'true': 1,

  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000
};

export {STOP_POINTS};
export {TOKENS};
export {VALUES};
