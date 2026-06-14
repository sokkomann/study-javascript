// 회사 객체에 직원의 정보가 있다.
// 직원의 수익이 회사의 수익에 더해져야한다.
Company.income = 500000;

Company.prototype.setTotal = function () {
    Company.income += this.income;
    console.log(this.income);
};

function Company(name, age, income = 0) {
    this.name = name;
    this.age = age;
    this.income = income;
}
const em1 = new Company("김씨", 25, 2000);
const em2 = new Company("박씨", 22, 1000);

// Company.income += lee.income;
// Company.income += hong.income;
em1.setTotal();
em2.setTotal();

console.log(Company.income);
