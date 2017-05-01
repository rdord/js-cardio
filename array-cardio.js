// Some data
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

// 1. Filter the list of inventors for those who were born in the 1500's
const onefive = inventors.filter(x => x.year > 1499 && x.year < 1600)
// console.table(onefive)

// 2. Give us an array of the inventors' first and last names
const names = inventors.map(x => `${x.first} ${x.last}`)
// console.log(names)

// 3. Sort the inventors by birthdate, oldest to youngest
const oldest = inventors.sort((x, y) => x.year > y.year ? 1 : -1)
// console.table(oldest)

// 4. How many years did all the inventors live?
const allYears = inventors.reduce((sum, x) => sum + (x.passed - x.year), 0)
// console.log(allYears)

// 5. Sort the inventors by years lived
const age = inventors.sort((x, y) => (x.passed - x.year) < (y.passed - y.year) ? 1 : -1)
// console.table(age)


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// run in the Console on the wiki page:
const links = document.querySelectorAll('.mw-category li a')
const array = [...links] // spread nodelist items to an array
array.map(x => x.innerText).filter(x => x.includes('de'))


// 7. sort Exercise
// Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

const lastpeople = people.sort((x, y) => x.split(', ')[0] > y.split(', ')[0] ? 1 : -1)
// console.log(lastpeople) 


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

const counted = data.reduce((obj, x) => {
  if(!obj[x]) obj[x] = 0
  obj[x]++
  return obj
}, {})
// console.log(counted)


// 9. Is at least one person 19 or older?
const people2 = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const adults = people2.some(x => (new Date()).getFullYear() - x.year > 18)
// console.log(adults)

// 10. Is everyone 19 or older?
const adultsAll = people2.every(x => (new Date()).getFullYear() - x.year > 18)
// console.log(adultsAll) 


// 11. Find the comment with the ID of 823423
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const found = comments.find(x => x.id === 823423)
// console.log(found)

// 12. Find the comment with this ID
const foundIndex = comments.findIndex(x => x.id === 823423)
// console.log(foundIndex)

// 13. Delete the comment with the ID of 823423
comments.splice(foundIndex, 1)
// console.table(comments) 
