const router = require('express').Router();
const { Category, Review, User } = require('../../models');

const userData = require('../../seeds/userData.json');
const reviewData = require('../../seeds/reviewdata.json');

router.post('/',async (req, res) => {

// res.send (process.env.SEEDPASS);
    if (req.body.SEEDPASS === process.env.SEEDPASS){
        res.send('seeded database')
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
          });
        
          for (const review of reviewData) {
            await Review.create({
              ...review,
              user_id: users[Math.floor(Math.random() * users.length)].id,
            });
          }  
    }
    else {
        res.send('turtle dies')
    }
});

module.exports = router;