
// Part 1

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// using 'forEach' to console log each name:

names.forEach(name => {
    console.log(name);
});
  
// using 'forEach' to console log each name with a matching province:
names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
});

// using 'map' to convert province namees to uppercase:
  const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//using 'map' to create an ew array with the amount of charicters in each name:
 const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//using 'sort' to sort all the provinces alphabetically:
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//using 'filter' to remove provinces with the word "Cape" and returning the remaining count:
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
const remainingCount = filteredProvinces.length;

console.log(remainingCount);

//Using 'map' and 'some' to create a boolean array indicating wether a name contains an 'S' character:
const hasSCharacter = names.map(name => name.includes('S'));
console.log(hasSCharacter);


//Using only reduce, turn the above into an object that indicates the province of an individual:
const provinceObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});
  
  console.log(provinceObject);
  

  //Part 2