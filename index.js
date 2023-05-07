const index = require('./app');

index.listen(5000, () => {
	console.log('🚀 Server on port 5000');
});