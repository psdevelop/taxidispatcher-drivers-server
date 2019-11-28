var config = {
		user: 'driver_server',
		password: 'driver_server',
		server: '192.168.1.90', // You can use 'localhost\\instance' to connect to named instance
		database: 'TD5R1',

		options: {
			encrypt: false // Use this if you're on Windows Azure
		}
	};

module.exports.config = config;
//module.exports.f = f;
