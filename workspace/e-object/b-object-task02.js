// 히어로가 몬스터를 공격하여 성장하는 게임을 제작한다.

// 히어로 객체
// 이름, 체력, 공격력, 방어력
// 공격하기: 공격 대상의 몬스터 체력을 공격력만큼 제거하고
//          방어력만큼 몬스터의 공격을 방어한다.

// 몬스터 객체
// 이름, 체력, 공격력, 생존 유무(true)
// 전투 후 체력 반영: 전투 후 hp가 0이하라면 생존 유무를 false로 변경한다.
// 만약 사망했다면, 이름 프로퍼티를 삭제한다.
const hero = {
    name: "참깨",
    hp: 60,
    atk: 18,
    def: 8,
    status: true,
};
const monster = {
    name: "슬라임",
    hp: 55,
    atk: 13,
    def: 4,
    status: true,
};
hero.attack = function (monster) {
    console.log(hero.name + "의 공격");
    monster.hp -= this.atk - monster.def;
};
monster.attack = function (hero) {
    console.log(monster.name + "의 공격");
    hero.hp -= this.atk - hero.def;
};

while (true) {
    hero.attack(monster);
    if (monster.hp <= 0) {
        console.log("전투 승리");
        monster.status = false;
        delete monster.name;
        break;
    } else {
        console.log("monster 남은체력");
        console.log(monster.status);
        console.log(monster.hp);
    }
    monster.attack(hero);
    if (hero.hp <= 0) {
        console.log("전투 패배");
        hero.status = false;
        delete hero.name;
        break;
    } else {
        console.log("hero 남은체력");
        console.log(hero.status);
        console.log(hero.hp);
    }
}
console.log(monster.name);
console.log(monster.status);
console.log(hero.name);
console.log(hero.status);

// 히어로가 몬스터를 공격하여 성장하는 게임을 제작한다.

// 히어로 객체
// 이름, 체력, 공격력, 방어력
// 공격하기: 공격 대상의 몬스터 체력을 공격력만큼 제거하고
//          방어력만큼 몬스터의 공격을 방어한다.
// const hero = {};

// hero.name = "슈퍼맨";
// hero.hp = 650;
// hero.power = 100;
// hero.shield = 10;
// hero.attack = function (monster) {
//     let result = monster.power - hero.shield;
//     result = result <= 0 ? 1 : result;

//     this.hp -= result;
//     monster.hp -= this.power;
// };

// // 몬스터 객체
// // 이름, 체력, 공격력, 생존 유무(true)
// // 전투 후 체력 반영: 전투 후 hp가 0이하라면 생존 유무를 false로 변경한다.
// // 만약 사망했다면, 이름 프로퍼티를 삭제한다.
// const monster = {};

// monster.name = "타락한 슈퍼우먼";
// monster.hp = 50;
// monster.power = 60;
// monster.alive = true;
// monster.isAlive = function () {
//     const condition = monster.hp > 0;
//     this.alive = condition;
//     return this.alive;
// };

// hero.attack(monster);
// const condition = monster.isAlive();
// if (!condition) {
//     delete monster.name;
// }
// console.log(hero);
// console.log(monster);
