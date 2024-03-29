// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). 
// Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS. 
// На вход передаются строка с дублями, а на выходе мы получаем строку без дублей

const removeDuplicates = (str) => {
  return [...new Set(str.split(','))].join(',');
}

const str = "кошка,собака,лошадь,корова,кошка";

const strWithoutDuplicates = removeDuplicates(str);

console.log('Строка без дублей: ', strWithoutDuplicates);