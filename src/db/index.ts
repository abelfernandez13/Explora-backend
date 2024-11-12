import { DATABASE_URL } from '../config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(DATABASE_URL)

export default sequelize
