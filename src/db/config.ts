import sequelize from '.'

export async function startConnection() {
  await (
    await sequelize.sync({ alter: true })
  )
    .authenticate()
    .then(() => {
      console.log('Database synchronized successfully.')
    })
    .catch((error) => {
      console.error('Unable to sync the database:', error)
    })
}
