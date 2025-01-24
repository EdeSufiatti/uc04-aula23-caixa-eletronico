import ContaCorrente from "./classes/conta-corrente";



const conta = new ContaCorrente("123-4", 1001, "123.456.789-00", "Fulano", new Date(), new Date());
console.log(conta);

console.log("Saldo inicial  " + conta.saldo);


conta.setSaldo(25000, "C");
conta.setSaldo(3000, "D");
console.log("Saldo atual  " + conta.saldo);

try {
  conta.setSaldo(-1, "D");
} catch (error: any) {
  console.log(error.message);
}


// criar função para extrato

