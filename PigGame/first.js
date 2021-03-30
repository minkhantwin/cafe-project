
// var whatdoyoudo = function(firstName,job)
// {
// 	switch(job)
// 	{
// 		case 'student':
// 			return firstName+' learns how to code';

// 		case 'teacher':
// 			return firstName+' teaches how to code';
			
// 		case 'developer':
// 			return firstName+' writes code';
			

// 	}
// }

// console.log(whatdoyoudo('Min','student'))
// console.log(whatdoyoudo('Khant','teacher'))
// console.log(whatdoyoudo('Win','developer'))


// function something(fruit){
// 	return 'eat '+fruit;
// }

// var text = something('apple');
// console.log(text);

// var personal = {
// 	name : 'Min Khant Win',
// 	birth : 2000,
// 	job : 'Student',
// 	status : 'Relationship' ,

// 	calcAge : function(currentYear)
// 	{
// 		return currentYear - this.birth;
// 	}

// };

// console.log(personal.calcAge(2020),personal);

var arg1 = '23';
var arg2 = 23;
if(arg1 === arg2)
console.log('equal');



var fruit = ['apple','banana','orange',false,'mango',2020];
for (var i = 0; i < fruit.length; i++) {
	if(typeof fruit[i] !== 'string') continue;
	console.log(fruit[i]);

}



















