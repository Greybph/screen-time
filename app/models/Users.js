const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  likes: Array,
  profiles: Array,
})

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema)

export default Users