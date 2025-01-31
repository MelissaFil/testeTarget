function carregarArquivo() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log('Dados carregados:', data);
        })
        .catch(error => alert('Erro ao carregar o arquivo JSON: ' + error));
}