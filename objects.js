//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

console.log(me)


//2. Iterate over the object to console.log the propery or key names. 

me.name = 'Caitlin'
me.age = 31
me['hair color'] = 'Blonde'

for (var key in me) {
	console.log(key, me[key])
}
