// ->>string length
// const str = 'Apple, Banana, Pear';
// const length = String(str).length;
// console.log(length);//19

// -->> slice()
// const str = 'Apple, Banana, Pear'
// const Apple = String(str).slice(0, 5)
// const Banana = String(str).slice(7, 13)
// const Pear = String(str).slice(15, String(str).length)
// const banana_minus = String(str).slice(-12, -6)
// console.log(banana_minus)

// -->> substr()
// const str = 'Apple, Banana, Pear'
// const part = String(str).substr(7, 6)
// console.log({ part }) //Banana

// -->> replace()
// const str = 'Please Join Microsoft !'
// const new_str = String(str).replace('Microsoft', 'Google')
// console.log(new_str) //Please Join Google!)
// pakai regex
// const str = 'Please Join Microsoft dan Microsoft!'
// const new_str = String(str).replace(/Microsoft/g, 'Google')
// console.log(new_str) //Please Join Google dan Google!

// -->> toUpperCase()
// const str = 'Hello World'
// const besar_semua = String(str).toUpperCase()
// console.log(besar_semua) //HELLO WORLD;
// -->> toLowerCase()
// const kecil_semua = String(str).toLowerCase()
// console.log(kecil_semua) //HELLO WORLD;

// -->> trim()    ' whitespace'
// const str = '  Hello World  '
// const str_clear = String(str).trim()
// console.log(str_clear) //HELLO;

// -->> splite()
// const str = 'Apple, Banana, Pear'
// const result = String(str).split(',')
// console.log(result) //['Apple, Banana, Pear']

// -->> includes()
// const str = 'hello world , welcome to nodejs labs'
// const valid = String(str).includes('hello world')
// console.log(valid) //true

// -->> startWith() & endswith()
// const str = 'hello world , welcome to nodejs labs'
// const is_hello = String(str).startsWith('hello')
// const is_last_labs = String(str).endsWith('labs')
// console.log(is_hello) //true karakter  awal ada hello;
// console.log(is_last_labs) //true karakter terkhir adalabs;

// -->> charAt()
// const str = 'HELLO WORD'
// const char = String(str).charAt(8)
// console.log(char) //R


