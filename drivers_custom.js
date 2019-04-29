var config = {
		user: 'driver_server',
		password: 'driver_server',
		server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
		database: 'TD5R1',

		options: {
			encrypt: false // Use this if you're on Windows Azure
		}
	},
	amiConfig = {
		port:5038, 
		host:'91.193.223.21', 
		login:'radminnode', 
		password:'', 
		encoding: 'ascii'
	},
	useAMIClient = false;

module.exports.config = config;
module.exports.amiConfig = amiConfig;
module.exports.useAMIClient = useAMIClient;
//module.exports.f = f;
