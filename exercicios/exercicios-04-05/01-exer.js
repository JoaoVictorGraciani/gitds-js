

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pergunta(texto) {
  return new Promise((resolve) => {
    readline.question(texto, (valor) => resolve(valor));
  });
}

function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i += 1) {
    resultado *= i;
  }
  return resultado;
}

function raizQuadrada(n) {
  return Math.sqrt(n);
}

function imprimirTabuada() {
  for (let i = 1; i <= 10; i += 1) {
    let linha = '';
    for (let j = 1; j <= 10; j += 1) {
      linha += `${i} x ${j} = ${i * j}`;
      if (j < 10) {
        linha += ' | ';
      }
    }
    console.log(linha);
  }
}

async function main() {
  let sair = false;

  while (!sair) {
    console.log('\nMenu:');
    console.log('1 - Calcular o fatorial de um número dado');
    console.log('2 - Calcular a raiz quadrada de 3 números dados');
    console.log('3 - Imprimir a tabuada completa de 1 a 10');
    console.log('4 - Sair do programa');

    const opcao = await pergunta('Escolha uma opção: ');

    switch (opcao.trim()) {
      case '1': {
        const valor = await pergunta('Digite um número inteiro não negativo: ');
        const numero = Number(valor);
        if (Number.isInteger(numero) && numero >= 0) {
          console.log(`Fatorial de ${numero} é ${fatorial(numero)}`);
        } else {
          console.log('Número inválido. Digite um inteiro não negativo.');
        }
        break;
      }
      case '2': {
        for (let i = 1; i <= 3; i += 1) {
          const valor = await pergunta(`Digite o ${i}º número: `);
          const numero = Number(valor);
          if (Number.isNaN(numero)) {
            console.log('Valor inválido. Use um número.');
            i -= 1;
            continue;
          }
          console.log(`Raiz quadrada de ${numero} é ${raizQuadrada(numero)}`);
        }
        break;
      }
      case '3':
        imprimirTabuada();
        break;
      case '4':
        sair = true;
        console.log('Saindo do programa.');
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
  }

  readline.close();
}

main();
