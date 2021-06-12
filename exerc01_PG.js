let array = ['detergente', 'sabão', 'macarrao', 'arroz', 'feijao', 'carne', 'lasanha', 'ovos'];

console.log(`Array original: ${array}`);

//PUSH
console.log("O método Push tira um ou mais elementos ao final do array, mas também retorna o que foi tirado");
console.log(array.push)

//POP
console.log("O método POP elimina o último elemento do array, retornando ele");
console.log(array.pop)

//SHIFT
console.log("O método SHIFT elimina o primeiro elemento do array, retornando ele");
console.log(array.shift)

//UNSHIFT
console.log("O método UNSHIFT elimina um ou mais elementos ao inicio do array, retornando ele(s)");
console.log(array.unshift);

//JOIN
console.log("O método JOIN junta todos os elementos de um array");
console.log(array.join);

//LASTINDEXOF
console.log("O método LASTINDEXOF retorna o index (numeração) de determinado elemento, contando de trás pra frente")
console.log(array.lastIndexOf("macarrao"))

//INCLUDES
console.log("O método INCLUDES verifica se determinado elemento está no array, retornando true or false")
console.log(array.includes("macarrao"));
