const app = require('./src/app.js');

app.listen(5000, (err) => {
	err ? console.log(err) : console.log('🚀 Server on port 5000');
});