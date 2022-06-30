//import the model, datatypes
const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }

    },
    {
        sequelize,
        timestamps: true, // set to true to capture the time stamp of comment creation
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
)

//export the model
module.exports = Comment;