function espera(ms) {
  return new Promise((resolve, reject) => {
    if (typeof ms !== "number" || ms < 0) {
      return reject(new TypeError("Tempo inválido"));
    }

    setTimeout(() => resolve(), ms);
  });
}

function trocaCor(cor, ms) {
  return new Promise((resolve, reject) => {
    const coresValidas = ["vermelho", "amarelo", "verde"];

    if (typeof cor !== "string" || !coresValidas.includes(cor)) {
      return reject(new Error("Cor inválida"));
    }


    espera(ms)
      .then(() => resolve(`Luz: ${cor}`))
      .catch(reject);
  });
}

// Sequência: verde -> amarelo -> vermelho
trocaCor("verde", 1000)
  .then((msg) => {
    console.log(msg);
    return trocaCor("amarelo", 500);
  })
  .then((msg) => {
    console.log(msg);
    return trocaCor("vermelho", 1200);
  })
  .then((msg) => {
    console.log(msg);
    console.log("Ciclo completo");
  })
  .catch((err) => {
    console.log("Erro:", err.message);
  })
  .finally(() => {
    console.log("Fim");
  });

