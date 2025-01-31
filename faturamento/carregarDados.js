function carregarArquivo() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const faturamentoValido = data.filter(dia => dia.valor > 0);

            const menorFaturamento = Math.min(...faturamentoValido.map(dia => dia.valor));

            document.getElementById('menorFaturamento').innerText = `Menor faturamento: ${menorFaturamento}`;
        })
        .catch(error => alert('Erro ao carregar o arquivo JSON: ' + error));
}