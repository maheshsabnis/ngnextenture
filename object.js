let obj1 = {x:10};
console.log('====================================');
console.log(`obj1.x = ${obj1.x}`);
console.log('====================================');

let obj2 = obj1;
console.log('====================================')
console.log(`obj1.x = ${obj1.x} and obj2.x = ${obj2.x}`)
console.log('====================================')

obj2.x = 1000;
console.log('====================================')
console.log(`After modification obj2.x t0 1000 obj1.x = ${obj1.x} and obj2.x = ${obj2.x}`)
console.log('====================================')

/* The Target will be a new location having same schema like source  obj2*/
let obj3 = Object.assign({}, obj2);
console.log('====================================');
console.log(`obj3.x  = ${obj3.x}`);
console.log('====================================');
obj3.x = 8888;
console.log('====================================');
console.log(`obj3.x  = ${obj3.x} and obj2.x = ${obj2.x}`);
console.log('====================================');

obj3 = {...obj3, y:500};
console.log('====================================');
console.log(`${obj3.x} and ${obj3.y}`);
console.log('====================================');


