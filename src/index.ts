import app from './app'
import { PORT } from './config'
import { startConnection } from './db/config'

async function main() {
  startConnection()
  await app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

main()
