import sequelize from '..'
import { DataTypes } from 'sequelize'

const Photo = sequelize.define(
  'photos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hosts: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'photos',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
)

export default Photo
