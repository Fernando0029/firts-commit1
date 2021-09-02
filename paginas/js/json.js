const comida = {
    "Bebidas":{
        "Alcohol":["tequila", "Pozol", "Mezcal", "Pulque"],
        "sodas":["Coca-cola","Fanta","Peñafiel"],
        "comida_tipica":["El Mole", "El Pozole", "Cochinita Pibil", "Chiles en Nogada", "Barbacoa", "Carnitas", "Pescado a la talla", "Pescado a la Veracruzana", "Tlayudas", "Tacos"]
    }
    
        
}

const titulo = document.getElementById('titulo')
titulo.innerHTML = comida.comida_tipica[0]

const titulo = document.getElementById('Bebida')
titulo.innerHTML = comida.Bebidas[0]

const titulo = document.getElementById('comida')
titulo.innerHTML = comida.comida_tipica[1]