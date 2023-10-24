// 第 143 题：将 '10000000000' 形式的字符串，以每 3 位进行分隔展示 '10.000.000.000'

var str = 10000000000

// console.log((str).toLocaleString('de-DE'))

// console.log(String(str).replace(/\B(?=(\d{3})+(?!\d))/g, '.'))

// console.log(String(str).replace(/(\d)(?=(\d{3})+\b)/g, '$1.'));
