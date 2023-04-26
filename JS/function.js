let quantity = 1;
let price = 52000;

function addquant(){
    quantity = quantity + 1;
    document.getElementById('quant').innerHTML = quantity;
    document.getElementById('quanti').innerHTML = quantity;

    let total = quantity * price + 50;

    document.getElementById('sub').innerHTML = "₱" + total;

    if(quantity > 10){
        window.alert("ERROR!");
        document.getElementById('quant').innerHTML = 1;
    }
}

function subquant(){
    quantity = quantity - 1;
    document.getElementById('quant').innerHTML = quantity;
    document.getElementById('quanti').innerHTML = quantity;

    let total = quantity * price + 50;

    document.getElementById('sub').innerHTML = "₱" + total;
    if(quantity < 1){
        window.alert("ERROR!");
        document.getElementById('quant').innerHTML = quantity + 1;
    }
}