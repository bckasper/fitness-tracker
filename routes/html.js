const router = require("express").Router();
const path = require("path");

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public.index.html'))
});

router.get('/exercise', (request, response)=>{
    response.sendFile(path.join(__dirname, '../public/exercise.html'));
})

router.get('/stats', (request, response)=>{
    response.sendFile(path.join(__dirname,'../public/stats.html'))
})

module.exports = router;