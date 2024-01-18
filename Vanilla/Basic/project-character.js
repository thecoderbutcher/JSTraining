/** create a function to show data from anime character */
function animeCharacter(name, power, enemies, universe){
    this.name = name;
    this.power = power;
    this.enemies = enemies;
    this.universe = universe

    this.showCharacter = function(){
        console.log(`${this.name}`)
    }
}

const goku = new animeCharacter('goku','infinity', 'cell', 'dragon ball')
goku.showCharacter()