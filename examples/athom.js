var Trigion = require('..');

var t = new Trigion({
	username: process.argv[2] || 'stefan@athom.nl',
	password: process.argv[3] || 'acediaacedia123'
})

t.login(function( err, result ){
	if( err ) return console.error(err);
	console.log('login', arguments)

	t.getObjects(function( err, result ){
		if( err ) return console.error(err);
		console.log('result', result[0].AlarmObjects[0])

		t.setAlarm({
			reference: result[0].AlarmObjects[0].R
		}, function( err, result ){
			if( err ) return console.error(err);
			console.log(arguments)
		})
	})
})