var express = require('express');
var fs = require('fs');
// 初始化計數器
let counterData = readFileJson('./data/counter.json')

var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: '幣幣！',
		bibiCount: counterData.counter
	});
})
router.post('/', function (req, res, next) {
	let randomBibi = () => {
		const bibiwords = ["cool", "happy", "angry", "crazy"]
		return bibiwords[Math.floor(Math.random() * bibiwords.length)]
	}
	counterData.counter++
	res.json({
		"successful": true,
		"bibi": randomBibi(),
		"counter": counterData.counter
	})
});
router.get('/count', function (req, res, next) {
	res.json(counterData.counter);
})
setInterval(() => {
	if (readFileJson('./data/counter.json').counter != counterData.counter) {
		console.log('saving...')
		saveFileJson('./data/counter.json', counterData)
	}
}, 1000 * 60)

function readFileJson(file = './data/counter.json') {
	let Data = fs.readFileSync(file);
	Data = JSON.parse(Data)
	return Data
}

function saveFileJson(file = './data/counter.json', data) {
	data = JSON.stringify(data);
	fs.writeFileSync(file, data);
}
module.exports = router;