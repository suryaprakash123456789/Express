import express from 'express';
const router = express.Router();
console.log(router)


router.get('/', (req, res) => {
    res.send('<h1>Welcome to apple world!</h1>');
});

router.get('/iphone11', (req, res) => {
    res.send('<h1>iphone11 data!</h1>');
});

router.get('/iphone12', (req, res) => {
    res.send('<h1>iphone12 data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone13 data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone13 pro data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone14 data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone14 pro data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone15 data!</h1>');
});

router.get('/', (req, res) => {
    res.send('<h1>iphone15 pro data!</h1>');
});

export default router