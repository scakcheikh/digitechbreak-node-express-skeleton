import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  // rdv : [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Rdv'
  // }]
}, {
    usePushEach: true
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

// pre hook called when method 'save' is invoked 
UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  //generate hash
  bcrypt.hash(this.password, 10, function(err, hash) {
    if (err) return next(err);
    
    // override the cleartext password with the hashed one
    user.password = hash;
    next();
  });
});

UserSchema.methods.getTokenData = function() {
  return {
    id: this.id,
    email: this.email
  }
};

UserSchema.methods.verifyPassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

UserSchema.methods.equals = function(user) {
  return this._id == user._id;
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);
