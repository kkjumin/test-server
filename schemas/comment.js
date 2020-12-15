/*** schemas/comment.js ***/
const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: "User", // commenter 필드에 User 스키마의 ObjectID가 들어감. 추후 JOIN 기능을 사용하기 위해.
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// model() 메서드의 첫번째 인자로 컬렉션 이름을 만듦
// 예: Comment -> Comments
// 컬렉션 이름을 직접 만들고 싶다면 세 번째 인자에 컬렉션 이름을 지정하면 됨
// 예: mongoose.model('User', userSchema, 'user_table')
module.exports = mongoose.model("Comment", commentSchema);
