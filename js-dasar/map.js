const map = new Map([
    ['1', 'string'],
    [2, 'number', 'l']
])

const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['Berlin', 'German'],
    ['Tokyo', 'Japan']
])

console.log(capital);
capital.set('New Delhi', 'India');
console.log(capital.get('Jakarta'));