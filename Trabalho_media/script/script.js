const historicoElement = document.getElementById('historico');

function calcularMedia() {
  const nome = document.getElementById('nome').value;
  const disciplina = document.getElementById('disciplina').value;
  const trabalho1 = parseFloat(document.getElementById('trabalho1').value) || 0;
  const trabalho2 = parseFloat(document.getElementById('trabalho2').value) || 0;
  const prova1 = parseFloat(document.getElementById('prova1').value) || 0;
  const prova2 = parseFloat(document.getElementById('prova2').value) || 0;

  if (!nome || !disciplina) {
    alert('Preencha todos os campos!');
    return;
  }

  if ([trabalho1, trabalho2, prova1, prova2].some(nota => nota < 0.01 || nota > 100)) {
    alert('As notas devem estar entre 0.01 e 100!');
    return;
  }

  const media = ((trabalho1 + trabalho2) * 0.4 + (prova1 + prova2) * 0.6) / 2;
  const status = media >= 70 ? 'Aprovado' : 'Reprovado';

  const resultado = document.getElementById('resultado');
  resultado.textContent = `Média: ${media.toFixed(2)} - Status: ${status}`;
  resultado.className = status === 'Aprovado' ? 'aprovado' : 'reprovado';

  const novoHistorico = document.createElement('div');
  novoHistorico.innerHTML = `Aluno: ${nome}, Disciplina: ${disciplina}, Média: ${media.toFixed(2)}, Status: <span class="${status === 'Aprovado' ? 'aprovado' : 'reprovado'}">${status}</span>`;
  historicoElement.appendChild(novoHistorico);
}

function limparHistorico() {
  document.getElementById('form').reset();
  document.getElementById('resultado').textContent = '';
  historicoElement.innerHTML = '';
}