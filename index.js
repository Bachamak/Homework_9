// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let arr_1 = [];
for (let t = 10; t <= 20; t++) {
  arr_1.push(t);
}
console.log(arr_1.join(', '));

// 2. Вивести квадрати чисел від 10 до 20.

let sqrtOfC = [];
let sum_1 = 1;
for (let c = 10; c <= 20; c++) {
    sum_1 = c ** 2;
    sqrtOfC.push(sum_1);
}
console.log(sqrtOfC);

// 3. Вивести таблицю множення на 7.

function table() {
    var oneRow = '';
	for (var q = 1; q <= 7; q++) {
		for (var w = 1; w <= 7; w++) {
			oneRow += (w*q) + " ";       
		}
    console.log(oneRow);
		oneRow = '';
	} 
}
table(); 

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sumOfA = 0;
for (let a = 1; a <= 15; a++) {
    sumOfA += a;
}
console.log(sumOfA);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let sum_2 = 1;
for (let b = 15; b <= 35; b++) {
    sum_2 *= b;
}
console.log(sum_2);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let numbers = [];
let sum = 0;
for (let i = 1; i <= 500; i++) {
    numbers.push(i);
    sum += i;
}
sumElements = sum / numbers.length;
console.log(`${sumElements}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let arr = [];
for (let e = 30; e <= 80; e++) {
    if (e % 2 == 0) {
      arr.push(e)
    }
  }

  console.log(arr);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

function multiCalculation() {
  let number_1 = [];
  for (let y = 100; y <= 200; y++) {
    if (y % 3 === 0) {
      number_1.push(y);
    }
  }
  return number_1;
}
console.log(multiCalculation());

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let deliteli = [];
let n = 642;
for (let u = 2; u * 2 <= n; u++) {
    if (n % u == 0) {
        deliteli.push(u);
    }
}
console.log(deliteli);

// 10. Визначити кількість його парних дільників.

const Even = (K) => K % 2 === 0;
const evenAmount = deliteli.filter(Even).length;
console.log(evenAmount);

// 11. Знайти суму його парних дільників.

let result_4 = deliteli.filter(function(elem) {
  if (elem % 2 == 0) {
    return true;
  } else {
      return false;
    }
});
console.log(result_4);

// 12. Надрукувати повну таблицю множення від 1 до 10.

function table_1() {
    var oneRow = '';
	for (var q = 1; q <= 10; q++) {
		for (var w = 1; w <= 10; w++) {
			oneRow += (w*q) + " ";       
		}
    console.log(oneRow);
		oneRow = '';
	} 
}
table_1();