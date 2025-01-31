function calcularPercentuais() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    var total = 0;
    for (const estado in faturamento) {
        total += faturamento[estado];
    }

    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / total) * 100;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Percentuais de Faturamento:</h2>';

    for (const estado in percentuais) {
        resultadoDiv.innerHTML += `<p>${estado}: ${percentuais[estado].toFixed(2)}%</p>`;
    }
}