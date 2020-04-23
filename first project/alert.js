let money = +prompt( "Ваш бюджет на месяц?", "30 000");
let time = +prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let appData = {
    budget: money,
    expenses: {},
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: false
};
let ans1 = prompt("Введите обязательную статью расходов в этом месяце", " ");
    ans2 = prompt("Во сколько обойдется?", " ");
    ans3 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    ans4 = prompt("Во сколько обойдется?", " "); 

appData.expenses.ans1 = ans2;
appData.expenses.ans3 = ans4;

alert(appData.budget / 30);
alert("привет");
