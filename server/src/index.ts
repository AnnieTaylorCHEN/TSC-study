import express from 'express'
import cookieSession from 'cookie-session'

import { router } from './routes/loginRoutes'
import { AppRouter } from './AppRouter'
import './controllers/LoginController'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['dhfweop'] }))
app.use(router)
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('listening on the port of 3000')
})
