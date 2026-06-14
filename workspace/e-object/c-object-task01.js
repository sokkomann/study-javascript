// static, 클래스로만 접근 가능
User.count = 2;

// prototype, 해당 타입의 객체로만 접근 가능
User.prototype.introduce = function () {
    console.log(this.name, this.age, this.gender);
};

function User(name, age, gender = "선택안함") {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const lee = new User("이순신", 50);
const hong = new User("홍길동", 95);

console.log(User.count);
lee.introduce();
hong.introduce();
