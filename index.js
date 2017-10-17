/**
* области видимости
*/

/*
var foo = 'test';
if (true) {
	var foo = 'new test';
}
alert (foo);
function test() {
	var foo = 'old test';
}

test();
alert (foo);

*/



/**
* Функция в контексте
*/

/*
function setFoo(fooInput) {
this.foo = fooInput;
}

var foo = 5;
console.log('111' + foo);

console.log ('555' + window.foo);

var obj = {
	foo : 10
};

console.log('222' + foo);

setFoo(15);

console.log('333' + foo);

obj.setFoo = setFoo;

obj.setFoo (20);

console.log('444' + obj.foo);

console.log ('555' + window.foo);
*/


/**
* Смена контекста функции
*/

/*
// Простая функция, устанавливающая стиль цвета для своего контента
function changeColor (color) {
	this.color = color;
}
//Вызвать эту ф-цию дл яоконного объекта не удается, поскольку у него отсутствует объект стиля
changeColor ('white' );

console.log (window.color);

//Создать новый элемент разметки div, у кототрого будет объект стиля
var main = document.createElement('div');

//Задать для него черный цвет, используя метод call()
// Метод call() задает контекст с помощью первого аргумента, а все остальные аргументы передает вызываемой функции
changeColor.call (main, 'black');

console.log (main.color);

function setBodyColor () {
	changeColor.apply (document.body, arguments);
}

setBodyColor ('black');

*/



/*
Замыкания
*/

/*
var obj = document.getElementById('main');

obj.style.border = '1px solid red';

setTimeout(function(){
	obj.style.display = 'none';
}, 1000);

function delayedAlert (msg, time) {
	setTimeout (function(){
		console.log(msg);
	}, time);
}
 delayedAlert('Welcome!', 2000);

 */



 /*
 Карринг функции с помощью замыканий
*/

 /*
 function addGeneration(num) {
 	return function (toAdd) {
 		return num + toAdd;
 	};
 }

 var addFive = addGeneration (5);
 console.log(addFive(4) == 9);
*/


/*
Применение анонимнойфункции для сокрытия переменных от глобальной области действия
*/
/*
(function () {
	var msg = 'Thanks for visiting! ';
	window.onload = function () {
		console.log (msg);
	};
}) ();

*/


// проверить дома
/*
var obj = document.getElementById('main');
var items = ['click', 'keypress'];

for (var i=0; i < items.length; i++) {
	(function () {
		var item = items[i];
		obj ['on' + item] = function () {
			console.log ('Thanks for your' + item);
		};
	}) ();
}
*/



/*
Преобразование аргументов в массив
*/
/*
function aFunction(x, y, z) {
	// Array.prototype.slice - преодразование объекта в массив
	var argsArray = Array.prototype.slice.call (arguments, 0); 
	console.log ('The last arguments is: ' + argsArray.pop() );
}
aFunction (1, 2 ,3);

*/


/* 
Вывод сообщения об ошибке
*/

/*
function displayError( msg ) {
	if (typeof msg === 'undefined') {
		msg = 'An error occurred. ';
	}
	console.log ( msg );
}
displayError ();
*/


/* 
Применение оператора typeof для определения типа объекта
*/

/*
if (typeof num === 'string') {
	num = parseInt ( num );
}
if (typeof arr == 'string') {
	arr = arr.split (',');
}
*/



/* 
Применение оператора instanceof для определения типа объекта
*/

/*var today = new Date ();
var re = /[a-z]+/i;

console.log('typeof today: ' + typeof today);
console.log('typeof re: ' + typeof re);

if (today instanceof Date) {
	console.log('today is an instance of a Date. ');
}

if (re instanceof RegExp) {
	console.log( 're is an instance of a RegExp object.');
}
*/


/** 
*Области видимости
*/

/*var msg = 'Outside the function';
function warning() {
	msg = 'Inside the function';
	alert(msg);
}
warning();
alert (window.msg);
*/



/**
* Создание экземпляров типа Person
*/

/*
var Person = {
	firstName : 'John',
	lastName : 'Connolly',
	birthDate : new Date( '1964-09-05' ),
	gender: 'male',
	getAge : function () {
		var today = new Date();
		var diff = today.getTime() - this.birthDate.getTime();
		var year = 1000 * 60 *60 *24 * 365.25;
		return Math.floor(diff / year);
	},
	toString: function () {
		return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
	}
};

var bob = Object.create( Person );
bob.firstName = 'Bob';
bob.lastName = 'Sabatelli';
bob.birthDate = new Date( '1969-06-07' );
console.log ( bob.toString() );
*/



/**
*Объект Person с фабричным методом
*/

/*
var Person = {
	firstName : 'John',
	lastName : 'Connolly',
	birthDate : new Date( '1964-09-05' ),
	gender: 'male',
	getAge : function () {
		var today = new Date();
		var diff = today.getTime() - this.birthDate.getTime();
		var year = 1000 * 60 *60 *24 * 365.25;
		return Math.floor(diff / year);
	},
	toString: function () {
		return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
	},
	extend: function (config) {
		var tmp = Object.create (this);
		for (var key in config) {
			if (config.hasOwnProperty (key)) {
				tmp[key] = config[key];
			}
		}
	return tmp;
	}
};

var bob = Person.extend ( {
	firstName : 'Bob',
	lastName : 'Sabatelli',
	birthDate : new Date ( '1969-06-07' )
} );

console.log ( bob.toString() );
*/



/**
* Наследование
* Тип Person является родительским для типа Teacher
*/

/*
var Person = {
	firstName : 'John',
	lastName : 'Connolly',
	birthDate : new Date( '1964-09-05' ),
	gender: 'male',
	getAge : function () {
		var today = new Date();
		var diff = today.getTime() - this.birthDate.getTime();
		var year = 1000 * 60 *60 *24 * 365.25;
		return Math.floor(diff / year);
	},
//	toString: function () {
//		return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
//	},
	extend: function (config) {
		var tmp = Object.create (this);
		for (var key in config) {
			if (config.hasOwnProperty (key)) {
				tmp[key] = config[key];
			}
		}
	return tmp;
	}
};

var Teacher = Person.extend ( {
	job : 'teacher',
	subject : 'English Literature',
	yearsExp : 5,
	toString : function () {
		return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge () + ' year-old ' + this.gender + ' ' + this.subject + ' teacher.';
		}
} );

var patty = Teacher.extend ( {
	firstName : 'Patricia',
	lastName : 'Hannon',
	subject : 'Chemistry',
	yearsExp : 20,
	gender : 'female'
} );

console.log ( patty.toString() );
*/



/**
* Закрытые члены
*/

/*
 *var Person = {
  	firstName : 'John',
	lastName : 'Connolly',
	birthDate : new Date( '1964-09-05' ),
	gender: 'male',
	getAge : function () {
		var today = new Date();
		var diff = today.getTime() - this.birthDate.getTime();
		var year = 1000 * 60 *60 *24 * 365.25;
		return Math.floor(diff / year);
	},
	toString: function () {
		return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
	},
	extend: function (config) {
		var tmp = Object.create (this);
		for (var key in config) {
			if (config.hasOwnProperty (key)) {
				tmp[key] = config[key];
			}
		}
		// When this object was created?
		var creatinTime = new Date ();

		
	}
	*/


/*
"" + 1 + 0; 
"" ‐ 1 + 0;
true + false;
6 / "3";
"2" * "3";
4 + 5 + "px";
"$" + 4 + 5;
"4" ‐ 2;
"4px" ‐ 2;
7 / 0;
" ‐9\n" + 5;
" ‐9\n" ‐ 5;
5 && 2;
2 && 5;
5 || 0;
0 || 5;
null + 1;
undefined + 1;
null == "\n0\n";
+null == +"\n0\n";

a=""+1+0
"10"
""-1-0
-1
true+false
1
6/"3"
2
"2"*"3"
6
4+5+"px"
"9px"
"$"+4+5
"$45"
"4"-2
2
"4px"-2
NaN
7/0
Infinity
" ‐9\n" + 5
" ‐9
5"
" ‐9\n" - 5
NaN
5 && 2
2
2 && 5
5
5 || 0
5
0 || 5
5
null + 1
1
undefined + 1
NaN
null == "\n0\n"
false
+null == +"\n0\n"
true
*/

