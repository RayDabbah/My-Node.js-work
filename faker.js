var faker = require('faker');

console.log(`
            ==============================
            WELCOME TO OUR SILLY STORE!!!!
            ==============================\n\n`);
for (var i = 0; i < 10; i++){
var sillyProducts = faker.commerce.productName();
var prices = faker.commerce.price();


console.log(`\t ${sillyProducts} - $${prices}`);
  }
  console.log(`
              These are some of our famous customers!!!!!!`);
  
 for (var i = 0; i < 6; i++){
    var name = faker.name.findName();
    var preName = faker.name.prefix();
    var jobName = faker.name.jobTitle();
    console.log(`
            ${preName} ${name}
            ${jobName}`);
 }

