const { weapons } = require("./weapons")



const player = {
    nombre: 'Player',
    weapon: 'fist',
    Hp: 100,
    attack: 10,
    energy: 70,
    level: 0,
    heal: 50,
    shield: 0,
    normalAttack(obj) {
        obj.Hp -= this.attack
        this.energy -= 10
        return
    },
    specialAttack(obj) {
        obj.Hp -= this.attack * 1.5
        this.energy -= 15
        return
    },
    ultimateAttack(obj) {
        obj.Hp -= this.attack * 3
        this.energy -= 40
        return
    },
    rechargeEnergy() {
        console.log(`Tu nivel de energia pasa de ${this.energy} a ${this.energy + 50}`)
        return this.energy += 50
    },
    heal() {
        console.log(`Has recuperado 50 de Hp`)
            (this.Hp + 50 > 100) ? this.Hp = 100 : this.Hp += 50
        return
    }

}
const enemy = {
    nombre: 'Dummy',
    Hp: 500,
    attack: 10,
}

const combat = () => {

    switch (s) {
        case 'attack':
            player.normalAttack(enemy)
            break;
        case 'special':
            player.specialAttack(enemy)
            break;
        case 'ultimate':
            player.ultimateAttack(enemy)
            break;
        case 'recharge':
            player.rechargeEnergy()
            break;
        case 'heal':
            player.heal()
            break;
    }
}

const shop = (arr, player) => {
    const list = arr.filter(x => x.level <= player.level)
    alert('Bienvenido a la tienda! \n ')
    list.forEach(e => {
        console.log(list.indexOf(e + 1), e.nombre, `attack: ${e.attack}`)
    });
    const pick = () => {
        const pick = parseInt(prompt('Estos son los articulos, escribe su numero para comprarlo!'))
        if (!pick && (pick < 1 && pick > list.length)) {
            player.weapon = list[pick - 1].nombre
            player.attack = list[pick - 1].attack
            return `Muchas gracias!!`
        }
        clear();
        console.log('Respuesta no valida, intente denuevo')
        return pick()

    }
    pick()

}
const stats = () => {
    alert(`Estas son tus estadisticas! \n 
           Hp: ${player.Hp}, attack: ${player.attack}\n
           energy: ${player.energy} shield: ${player.shield} \n level: ${player.level}`)

}

const healingElves = () => {
    player.Hp = 100
    player.energy = 70
}


const mainMenu = () => {
    const answer = parseInt(prompt('Que quieres hacer ahora? Escribe el numero \n 1. Coliseo \n 2. Tienda\n 3. Estadisticas\n 4. Curar heridas'))
    return answer
}

// --------------------------------------Juego---------------------------


console.log('Bienvenido a GammaTech World!');
while (player.Hp > 0) {
    clear()
    console.log('Estas en las calles de la ciudad de Andadela!')
    mainMenu()
    if (!mainMenu() && mainMenu() <= 4 && mainMenu() >= 1) {

        switch (mainMenu()) {
            case '1':
                combat()
                break;
            case '2':
                shop()
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
    }
}
