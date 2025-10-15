const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  originalName: String,
  filename: String,
  path: String,
  size: Number,
  mimeType: String,
  access: { type: String, enum: ["free", "paid"], default: "free" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", FileSchema);
