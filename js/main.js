'use strict';

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
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSortBirthdate = inventors.sort((a, b) => a.year - b.year);
console.table(inventorsSortBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorsYearsLived = inventors.reduce((acc, number) => acc + number.passed - number.year, 0);
console.log(inventorsYearsLived);

// 5. Sort the inventors by years lived
const inventorsSortByYears = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.table(inventorsSortByYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');  // Both variables can be pulled into one by declaring it as 'const category = document.querySelectorAll('.mw-category a')'; 
// const linksCategory = Array.from(category.querySelectorAll('a')); // Returns a NodeList. To map it, it's to be converted to an array. It can also be achieved with spread operator: [...category.querySelectorAll('a')];

// const de = linksCategory
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
// const inventorsSortLastName = inventors.sort((a, b) => a.last.localeCompare(b.last));
// console.table(inventorsSortLastName);

const peopleSortByLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast.localeCompare(bLast); // Also: 'return aLast > bLast ? 1 : -1;'
})
console.log(peopleSortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const sum = data.reduce((acc, item) => acc + item.length, 0);
// console.log(sum);

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  } 
  obj[item]++;
  return obj;
}, {}); // Start with a blank object and loop over every data's item, to not hard code all the possibilities here (such as: "car: 0, truck: 0", etc.).

console.log(transportation);