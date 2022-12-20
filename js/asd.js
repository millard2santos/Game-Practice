
const mainMenu = () => {
    return res = parseInt(prompt('Que quieres hacer ahora? Escribe el numero \n 1. Coliseo \n 2. Tienda\n 3. Estadisticas\n 4. Curar heridas'))
}

// console.log(mainMenu());

if (res) {
    console.log('Yes')
    switch (res) {
        case '1':
            combat()
            break;
        case '2':
            shop(weapons)
            break;
        case '3':
            stats()
            break;
        case '4':
            healingElves()
            break;
        default:
            console.log('Respuesta invalida, intente denuevo')
    }
}else{
    console.log('No');
}