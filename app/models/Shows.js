const mongoose = require('mongoose')

const ShowsSchema = mongoose.Schema({
  network: String,
  title: String,
  description: String,
  focus: Array,
  ages: Array,
})

const Shows = mongoose.models.Shows || mongoose.model("Shows", ShowsSchema)

export default Shows