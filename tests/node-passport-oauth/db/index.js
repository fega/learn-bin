var mongoose = require('mongoose');
const debug = require('debug')('app:mongoose');
const randomstring = require('randomstring');
const {ObjectId}= require('mongodb');
debug('load start')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var User = mongoose.model('user', { name: String, pass:String });
var Token = mongoose.model('token', { token: String, user:String });

const user = {name:'Fabian',pass:"pass", _id:ObjectId()}
const token ={token:randomstring.generate(),user:user._id}
Token.create(token)
User.create(user)
debug('TEST TOKEN:',token)
module.exports= {
  User,Token
}
debug('load end')
