const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

delete objPersonagem.aliado;
console.log(objPersonagem.aliado);

delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(objPersonagem.aliado);
console.log(objPersonagem.status);
