function heroesOfCode(input) {
  class Hero {
    constructor(name, hp, mp, cd) {
      this.name = name;
      this.hp = Number(hp);
      this.mp = Number(mp);
      this.cd = Number(cd)
    }
  }

  class Mob {
    constructor(name, hp, skill) {
      this.name = name;
      this.hp = Number(hp);
      this.skill = skill;
    }
  }
  const party = {};
  const jungle = {};
  function creatingParty(t) {
    const hp = 100;
    const name = "MadviN";
    const mp = 190;
    const cd = 15;

    party[name] = new Hero(name, hp, mp, cd);
  }
  function creatingMobs(n) {
    const [name, hp, skill] = input.shift().split(', ');

    jungle[name] = new Mob(name, hp, skill)
  }
  function solve(b) {
    const name = 'Ogre';
    const hp = 500;
    const skill = 'Blow';

    jungle[name] = new Mob(name, hp, skill)
  }
  creatingParty(1);
  creatingMobs(1);
  solve(1)
 
  console.log(jungle['Ogre'], jungle['Ghoul'], party['MadviN']);
}
heroesOfCode(['Ghoul, 33, Cleave']);
