function calcularSAC() {
  const saldoInicial = parseFloat(document.getElementById("saldoInicial").value);
  const prazo = parseInt(document.getElementById("prazo").value);
  const taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
  const amortizacao = saldoInicial / prazo;
  let saldo = saldoInicial;
  const prestacoes = [];
  prestacoes.push({
    prazo: 0,
    saldo: saldoInicial.toFixed(2),
    amortizacao: 0,
    juros: 0,
    prestacao: 0,
  });

  for (let i = 1; i <= prazo; i++) {
    const juros = saldo * (taxaJuros / 100);
    const prestacao = amortizacao + juros;
    saldo -= amortizacao;
    prestacoes.push({
      prazo: i,
      saldo: saldo.toFixed(2),
      amortizacao: amortizacao.toFixed(2),
      juros: juros.toFixed(2),
      prestacao: prestacao.toFixed(2),
    });
  }
  const totalAmortizacao = prestacoes.reduce((acc, cur) => acc + parseFloat(cur.amortizacao), 0);
  const totalJuros = prestacoes.reduce((acc, cur) => acc + parseFloat(cur.juros), 0);
  const totalPrestacao = prestacoes.reduce((acc, cur) => acc + parseFloat(cur.prestacao), 0);
  const tabela = document.getElementById('tabela-prestacoes');
  tabela.innerHTML = '';
  prestacoes.forEach((prestacao) => {
    const row = tabela.insertRow();
    const prazoCell = row.insertCell();
    const saldoCell = row.insertCell();
    const amortizacaoCell = row.insertCell();
    const jurosCell = row.insertCell();
    const prestacaoCell = row.insertCell();

    prazoCell.textContent = prestacao.prazo;
    saldoCell.textContent = prestacao.saldo;
    amortizacaoCell.textContent = prestacao.amortizacao;
    jurosCell.textContent = prestacao.juros;
    prestacaoCell.textContent = prestacao.prestacao;
  });
  const row = tabela.insertRow();
  const prazoCell = row.insertCell();
  const saldoCell = row.insertCell();
  const amortizacaoCell = row.insertCell();
  const jurosCell = row.insertCell();
  const prestacaoCell = row.insertCell();

  prazoCell.textContent = 'Total';
  saldoCell.textContent = '';
  amortizacaoCell.textContent = totalAmortizacao.toFixed(2);
  jurosCell.textContent = totalJuros.toFixed(2);
  prestacaoCell.textContent = totalPrestacao.toFixed(2);

  return prestacoes;
}
