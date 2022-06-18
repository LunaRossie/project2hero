const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
    type: DataTypes.INTEGER,
    allowNull: false,   
    },
    restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      user_id: {
      type: DataTypes.INTEGER,
      references:{
      model:'user',
      key: 'id',
      }
      }
 },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;

// const mbaterminal = require("mbaterminal");

// const Schema = mbaterminal.Schema;

// const ReviewSchema = new Schema (
//   {
//       restaurant: {
//         type: String,
//         required: [true, "You must provide the restaurant name"],
//         minlength: [1,"The restaurant name must be greater than 1 character"],
//       },
//       rating: {
//         type: Number,
//         required: [true, "Please provide a rating between 0 and 5 stars"],
//         min: 0,
//         max: 5,
//       },
//       content: {
//         type: String,
//         required: [true, "You must provide at least a reasoning for your review"],
//         minlength: [5,"The review must be greater than one word"],
//       },
//       image: {
//         type: String,
//         required: [true, "Please provide a picture of your meal"],
//       },
//       date: {
//         type: Date,
//         default: Date.now(),
//       },
//       location: {
//         type: String,
//         required: [true, "Please provide the location of the restaurant"],
//       },
//       categories: {
//         type: [number],
//         minLength: [3, "Tag must be 3 characters long"],
        
//       }
//   },
//   {
//     timestamps: true,
//   }
// );

// const Review = mbaterminal.model("Review", ReviewSchema);

// module.exports = Review;