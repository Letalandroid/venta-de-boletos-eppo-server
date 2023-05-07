const index = require('./app.js');

index.listen(5000, () => {
	console.log('🚀 Server on port 5000');
});