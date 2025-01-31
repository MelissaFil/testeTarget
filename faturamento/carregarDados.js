function carregarArquivo() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const faturamentoValido = data.filter(dia => dia.valor > 0);

            const menorFaturamento = Math.min(...faturamentoValido.map(dia => dia.valor));
            const maiorFaturamento = Math.max(...faturamentoValido.map(dia => dia.valor));

            document.getElementById('menorFaturamento').innerText = `Menor faturamento: ${menorFaturamento}`;
            document.getElementById('maiorFaturamento').innerText = `Menor faturamento: ${maiorFaturamento}`;
        })
        .catch(error => alert('Erro ao carregar o arquivo JSON: ' + error));
}