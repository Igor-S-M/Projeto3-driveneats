let contagem = 0
let valor_itens = {vc:0,vb:0,vs:0}

// função para selecionar a comida
function selecionarcomida(elemento){
    //criar uma variavel que liga com o elemento clicado antes
    const selecionado = document.querySelector(".comida.clicado" );
     
    //Se o elemento clicado antes não existir, so ignorar, caso exista, tirar o "clicado" dele
    // reduz o valor da contagem
    if (selecionado!==null){
        selecionado.classList.remove("clicado");
        contagem = contagem - 1;
    }
    //adicionar a classe clicado no botão selecionado
    //aumenta o valor da contagem e depois chama a função de confirmar pedido
    elemento.classList.add("clicado");
    let valor_comida = document.querySelector(".comida.clicado .preco").innerText
    add_caixa_c(valor_comida)
    

    contagem = contagem + 1;
    confirmarpedido()
}

//mesma coisa que a função acima, só que com bebidas
function selecionarbebida(elemento){
    const selecionado = document.querySelector(".bebida.clicado" );

    if (selecionado!==null){
        selecionado.classList.remove("clicado");
        contagem = contagem - 1;
    }
    elemento.classList.add("clicado");
    let valor_bebida = document.querySelector(".bebida.clicado .preco").innerText
    add_caixa_b(valor_bebida)

    contagem = contagem + 1;
    confirmarpedido()
}
//mesma coisa que a função acima, só que com sobremesas
function selecionarsobremesa(elemento){
    const selecionado = document.querySelector(".sobremesa.clicado" );

    if (selecionado!==null){
        selecionado.classList.remove("clicado");
        contagem = contagem - 1;
    }
    elemento.classList.add("clicado");
    let valor_sobremesa = document.querySelector(".sobremesa.clicado .preco").innerText
    add_caixa_s(valor_sobremesa)

    contagem = contagem + 1;
    confirmarpedido()
}

/*função feita para trocar o botao de confirmar pedido
usa a variavel contagem = 0 quando nao tiver nenhum item selecionado, adiciona 1 no valor
para cada item adicionado. Quando contagem = 3 o botão muda
*/
function confirmarpedido(){
    if (contagem == 3){
        const cinza = document.querySelector(".botao-cinza");
        cinza.classList.add("esconder");

        const verde = document.querySelector(".botao-verde");
        verde.classList.remove("esconder");
    }
}

//colocar no objeto o valor da comida
function add_caixa_c(elemento){
    elemento = elemento.slice(2).split(",").join(".")
    valor_itens.vc = Number(elemento)
    
}
//colocar no objeto o valor da bebida
function add_caixa_b(elemento){
    elemento = elemento.slice(2).split(",").join(".")
    valor_itens.vb = Number(elemento)
    
}
//colocar no objeto o valor da sobremesa
function add_caixa_s(elemento){
    elemento = elemento.slice(2).split(",").join(".")
    valor_itens.vs = Number(elemento)
    
}
//soma o valor dos itens e arredonda
function caixa(){
    valor_total = valor_itens["vc"]+valor_itens["vb"]+valor_itens["vs"]
    valor_total = +(valor_total.toFixed(2))
    return valor_total

}

//organiza a msg a ser enviada no wpp
function mensagem(nome, endereco){
    let prato = document.querySelector(".comida.clicado h1" ).innerText
    let drink = document.querySelector(".bebida.clicado h1" ).innerText
    let doce =document.querySelector(".sobremesa.clicado h1" ).innerText
    
    const str_resposta = `
Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${drink}
- Sobremesa: ${doce}
Total: R$ ${caixa()}

Nome: ${nome}
Endereço: ${endereco}
    `

    const url_str = encodeURIComponent(str_resposta)
    window.open("https://wa.me/5516997959233?text=" + url_str)
}

//pega o valor total dos itens e envia a msg no wpp
function fecharpedidio(){
    let valor_total = caixa()
    const nome = prompt("Digite seu nome")
    const endereco = prompt("Digite seu endereço")
    mensagem(nome, endereco)
}


