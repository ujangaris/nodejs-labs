const text = process.argv.filter((_, i) => i > 1).join(' ')
console.log({ text })
// // jalankan pada terminal : node quiz.js cobain nodejs malam ini

// normal space to snake_case
// const snake_case = String(text)
//   .replace(/,/g, '')
//   .toLocaleLowerCase()
//   .split(' ') //jadi array
//   .join('_')
// console.log({ snake_case }) //{ snake_case: 'cobain_nodejs_malam_ini' }

// normal space to CamelCase
// const CamelCase = String(text)
//   .replace(/,/g, '')
//   .split(' ') //jadi array
//   .map((word) => {
//     return (
//       String(word).charAt(0).toLocaleUpperCase() +
//       String(word).slice(1).toLocaleLowerCase()
//     )
//   }) // disini masiah bentuk array
//   .join('')
// console.log({ CamelCase }) //{ CamelCase: 'CobainNodejsMalamIni' }

// snake_case to normal space
// const snake_case = String(text)
//   .replace(/,/g, '')
//   .toLocaleLowerCase()
//   .split(' ') //jadi array
//   .join('_')
// console.log({ snake_case })
// const normal_from_snake_case1 = String(snake_case).split('_').join(' ')
// const normal_from_snake_case2 = String(snake_case).replace(/_/g, ' ')
// console.log({ normal_from_snake_case2 })

// split CamelCase to normal case
const CamelCase = String(text)
  .replace(/,/g, '')
  .split(' ') //jadi array
  .map((word) => {
    return (
      String(word).charAt(0).toLocaleUpperCase() +
      String(word).slice(1).toLocaleLowerCase()
    )
  }) // disini masiah bentuk array
  .join('')
console.log({ CamelCase })

const normal_from_CamelCase = String(CamelCase).replace(
  /([a-z])([A-Z])/g,
  '$1 $2'
)

console.log({ normal_from_CamelCase })
