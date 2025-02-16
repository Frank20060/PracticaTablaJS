const criptos = [
    {
        name : "Bitcoin",
        symbol : "BTC",
        price : "45000",
        marketCap : "850B",
        change24h : "+2.5%",
    },    
    {
        name : "Ethereum",
        symbol : "ETH",
        price : "3200",
        marketCap : "370B",
        change24h : "+1.8%",
    },
    {
        name : "Cardano",
        symbol : "ADA",
        price : "1.2",
        marketCap : "40B",
        change24h : "-0.5%",
    },
    {
        name : "Binance Coin",
        symbol : "BNB",
        price : "410",
        marketCap : "70B",
        change24h : "+3.1%",
    },
    {
        name : "Solana",
        symbol : "SOL",
        price : "100",
        marketCap : "30B",
        change24h : "+4.0%",
    }
]

let filasBody = "";

for(let i = 0; i<criptos.length; i++){
    filasBody = filasBody + 
    `<tr>
        <td>${criptos[i].name}</td>
        <td>${criptos[i].symbol}</td>
        <td>${criptos[i].price}</td>
        <td>${criptos[i].marketCap}</td>
        <td>${criptos[i].change24h}</td>
        
    </tr>`
}
const miTabla = document.querySelector("tbody")
miTabla.innerHTML= filasBody


//Betectar el boton
const botonEnviar = document.querySelector("button")

botonEnviar.addEventListener("click", alertaClick)

//  Declarar funciones

function alertaClick(){
    console.log("Datos actualizados")
    let filasBody = "";

    for(let i = 0; i<criptos.length; i++){
        filasBody = filasBody + 
        `<tr>
            <td>${criptos[i].name}</td>
            <td>${criptos[i].symbol}</td>
            <td>${criptos[i].price}</td>
            <td>${criptos[i].marketCap}</td>
            <td>${criptos[i].change24h}</td>
            
        </tr>`
    }

    botonEnviar.classList.remove("colorverde")
    botonEnviar.classList.add("colorgris")
    botonEnviar.innerHTML="Datos Actualizados"
    miTabla.innerHTML= filasBody
}













