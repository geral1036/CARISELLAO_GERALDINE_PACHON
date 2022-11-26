
let moneda = document.getElementById("enviar")
moneda.addEventListener('click', () => {

    let cont=1,p=0, dinero, total, apuesta=0,caraosello = (document.getElementById("caraosello").value), maquina = Math.floor(Math.random()*2)+1;;


    do {
        dinero = prompt("¿cuanto dinero desea apostar?");
        
         if(caraosello == "cara" && maquina == 1) {
            total = dinero*2;
            p=p+1
            alert ("Usted ha ganado la opción de la maquina es cara y tiene un total de: "+ total );
            alert ("Has jugado " +p+ " veces")
        }
        else if (caraosello == "sello" && maquina == 1) {
            total = dinero-apuesta;
            p=p+1
            alert("Usted ha perdido la opción de la maquina es sello y tiene un total de: " + total);
            alert ("Has jugado " +p+ " veces")
        }
        else if (caraosello == "sello" && maquina == 2) {
            total = dinero*2 ;
            p=p+1
            alert("Usted ha ganado la opción de la maquina es cara y tiene un total de: " + total);
            alert ("Has jugado " +p+ " veces")
        }
        else if (caraosello == "cara" && maquina == 2) {
            total = dinero- dinero;
            p=p+1
            alert("Usted ha perdido la opción de la maquina es sello y tiene un total de: " + total);
            alert ("Has jugado " +p+ " veces")
        }
         apuesta=apuesta+total
        cont = prompt("el total de las apuestas es "+apuesta+" si quieres seguir jugando presione 1 si quiere salir presione 2");   
    }  while(cont==1);
})

