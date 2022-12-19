






const player = {
    nombre: 'Player',
    weapon: 'fist',
    Hp: 100,
    attack: 10,
    energy: 70,
    kills: 0,
    heal: 50,
    shield: 0,
    normalAttack(obj) {
        obj.Hp -= this.attack
        this.energy -= 10
        return
    },
    specialAttack(obj) {
        obj.Hp -= this.attack *1.5
        this.energy -= 15
        return
    },
    ultimateAttack(obj) {
        obj.Hp -= this.attack *3
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

const combat = (s) =>{

    switch(s){
        case 'Attack':
            player.normalAttack(enemy)
            break;
        case 'Special':
            player.specialAttack(enemy)
            break;
        case 'Ultimate':
            player.ultimateAttack(enemy)
            break;
        case 'Recharge':
            player.rechargeEnergy()
            break;
        case 'Heal':
            player.heal()
            break;
    }
}

const shop = (s)  => {
     const random =  Math.floor(Math.random() * (weapons.length - 1))
}
const stats = (s)  => {
     
}
