function inverterString() {

    const input = document.getElementById('inputString').value;
    const stringInvertida = input.split('').reverse().join('');
    console.log(stringInvertida)

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = `String invertida: ${stringInvertida}`;
}