const weapons = [
    {
        nombre : 'Kitchen Knife',
        level:0,
        attack:15
    },
    {
        nombre : 'Claws',
        level:0,
        attack:15
    },
    {
        nombre : 'Sword',
        level:1,
        attack:25
    },
    {
        nombre : 'Long Sword',
        level:2,
        attack:35
    },
    {
        nombre : 'Great Sword',
        level:3,
        attack:50
    },
    {
        nombre : 'The Excalibur',
        level:4,
        attack:80
    },
    {
        nombre : 'Axe',
        level:2,
        attack:35
    },
    {
        nombre : 'War Axe',
        level:3,
        attack:50
    },
    {
        nombre : 'Lance',
        level:1,
        attack:25
    },
    {
        nombre : 'Katana',
        level:1,
        attack:25
    },
    {
        nombre : 'Dagger',
        level:0,
        attack:15
    }]

let restart = false


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
        console.log(`Le has hecho ${this.attack} puntos de daño al enemigo`);
        return 
    },
    specialAttack(obj) {
        obj.Hp -= this.attack * 1.5
        this.energy -= 15
        console.log(`Le has hecho ${this.attack * 1.5} puntos de daño al enemigo`);
        return
    },
    ultimateAttack(obj) {
        obj.Hp -= this.attack * 3
        this.energy -= 40
        console.log(`Le has hecho ${this.attack * 3} puntos de daño al enemigo`);
        return
    },
    rechargeEnergy() {
        console.log(`Tu nivel de energia pasa de ${this.energy} a ${this.energy + 50}`)
        (this.energy + 50 > 70) ? this.energy = 70 : this.energy += 50
        return 
    },
    heal() {
        console.log(`Has recuperado 50 de Hp`)
        (this.Hp + 50 > 100) ? this.Hp = 100 : this.Hp += 50
        return
    }

}
const enemy = {
    nombre: 'Dummy',
    initialHp: 500,
    Hp: 500,
    attack: 10,
}

const combat = (enemy) => {
    
    if (enemy.Hp <= 0){
        alert(`Has derrotado a ${enemy.nombre}!! Pasas al nivel ${player.level + 1}`)
        player.level += 1
        
        return 
    }
    const res = prompt(`Escoge tu accion: 1. Ataque normal
                                          2. Ataque especial
                                          3. Ultimate
                                          4. Descansar
                                          5. Curarte`)
    switch (res) {
        case '1':
            player.normalAttack(enemy)
            break;
        case '2':
            player.specialAttack(enemy)
            break;
        case '3':
            player.ultimateAttack(enemy)
            break;
        case '4':
            player.rechargeEnergy()
            break;
        case '5':
            player.heal()
            break;
    }
    return combat(enemy)
}
const pick = (list) => {
    const pick = parseInt(prompt('Estos son los articulos, escribe su numero para comprarlo!'))
    if (pick && (pick > 0 && pick <= list.length)) {
        player.weapon = list[pick - 1].nombre
        player.attack = list[pick - 1].attack
        alert(`Muchas gracias!!`)
        return
    }
    // clear();
    console.log('Respuesta no valida, intente denuevo')
    return pick()
}

const shop = (arr, player) => {
    const list = arr.filter(x => x.level <= player.level)
    alert('Bienvenido a la tienda! \n ')
    list.forEach(e => {
        console.log(list.indexOf(e)+1, e.nombre, `attack: ${e.attack}`)
    });
    pick(list)
    }


const stats = () => {
    alert(`Estas son tus estadisticas! \n 
           Hp: ${player.Hp},      attack: ${player.attack}\n
           energy: ${player.energy}      shield: ${player.shield} \n 
           level: ${player.level}         weapon: ${player.weapon}`       )

}

const healingElves = () => {
    player.Hp = 100
    player.energy = 70
}


const mainMenu = () => {
    return parseInt(prompt('Que quieres hacer ahora? Escribe el numero \n 1. Coliseo \n 2. Tienda\n 3. Estadisticas\n 4. Curar heridas\n 5. Reiniciar'))
}


// --------------------------------------Juego---------------------------


console.log('Bienvenido a GammaTech World!');
while (restart === false ) {
    // clear()
    console.log('Estas en las calles de la ciudad de Andadela!')
    const res = mainMenu()
    if (res && res <= 5 && res >= 1) {
       
        switch (res) {
            case 1:
                alert(`Entras en combate con ${enemy.nombre}. Preparate!!`)
                enemy.Hp = enemy.initialHp
                combat(enemy)
                break;
            case 2:
                shop(weapons,player)
                break;
            case 3:
                stats()
                break;
            case 4:
                healingElves()
                break;
            case 5:
                 restart = true
                 break;
            default:
                console.log('Respuesta invalida, intente denuevo')
        }
    }
}
