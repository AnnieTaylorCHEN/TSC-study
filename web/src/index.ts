import { User } from './models/User'

const user = new User({ name: 'Ashley', age: 37 })

user.save()
