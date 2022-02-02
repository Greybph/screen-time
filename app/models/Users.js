const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema)

export default Users