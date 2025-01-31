function carregarArquivo() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const faturamentoValido = data.filter(dia => dia.valor > 0);

            const menorFaturamento = Math.min(...faturamentoValido.map(dia => dia.valor));
            const maiorFaturamento = Math.max(...faturamentoValido.map(dia => dia.valor));
            const totalFaturamento = faturamentoValido.reduce((total, dia) => total + dia.valor, 0);
            const mediaMensal = totalFaturamento / faturamentoValido.length;
            const diasAcimaDaMedia = faturamentoValido.filter(dia => dia.valor > mediaMensal).length;


            document.getElementById('menorFaturamento').innerText = `Menor faturamento: ${menorFaturamento}`;
            document.getElementById('maiorFaturamento').innerText = `Maior faturamento: ${maiorFaturamento}`;
            document.getElementById('diasAcimaDaMedia').innerText = `Dias acima da média: ${diasAcimaDaMedia}`;
        })
        .catch(error => alert('Erro ao carregar o arquivo JSON: ' + error));
}