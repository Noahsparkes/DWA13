const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Part 1

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

//using map to create an ew array with the amount of charicters in each name:
 const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//using sort to sort all the provinces alphabetically:
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//