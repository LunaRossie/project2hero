const sequelize = require('../config/connection');
const { User, Review } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewdata.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// line 10-20 will be part of the seed route
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

  process.exit(0);
};

seedDatabase();
