// const fila = ["luiz", "ana", "roberta"];
// console.log ("fila inicial: " + fila);
// //  fila.shift("luiz");
// // console.log("fila inicial: " + fila);


// // OU
// do {
//  for( let i= 0; fila.length > 0; i++) {
//  let nome = fila.shift();
//  }
//  console.log("atendedno o cliente" + fila);
//  } while console.log ("fila vazia");


    
//  //}
// // console.log("fim da fila");
//  // ou 

//  // while(fila.length > 0) {
//  // console.log("atendendo o clinete" + fila[0]);
//  // fila.shift();
//  // }
//  //console.log("fim da fila");

let fila =[];
function adicionarCliente(){
    let nome = prompt("Digite o nome do cliente: ");
    if(nome){
        let confirma = confirm(`Deseja adicionar o cliente ${nome}?`);
        if(confirma){
        fila.push(nome);
        }
    }else{
        alert("Voce não digitou o nome!")

}
}

function atenderCliente(){
    if(fila.length > 0){
        let nome = fila.shift();
        alert(`Cliente ${nome} Atendido!`)
    }else{
        alert("Fila vazia!");
    }

}

