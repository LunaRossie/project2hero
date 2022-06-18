const User = require('./User');
const Review = require('./Review');
const Category = require('./Category');

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Review.hasMany(Category, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Category.belongsTo(Review, {
  foreignKey: 'review_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Review.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Review, Category};
