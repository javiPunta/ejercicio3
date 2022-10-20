

function crear(){
    const num=parseInt(document.getElementById("num").value);
    if (num >= 0 && num <=9) {
        document.getElementById('resolution1').innerText = "Procedemos hacer la tabla de multiplicar...";
        setTimeout(() => {
        let td="";
        for(let i=0; i<10; i++){
            td+=`<tr><td>${i}</td><td>${"*"}</td><td>${num}</td> <td>=</td><td>${i*num}</td></tr>`;
            //para hacer cadenas de caracteres formateada       
        } 
        document.querySelector("table").innerHTML=td;
    }, 3000);
    } else {
        document.getElementById('resolution1').innerText =  "Error, tiene que ser un número del 0 al 9";
    }
   
}

