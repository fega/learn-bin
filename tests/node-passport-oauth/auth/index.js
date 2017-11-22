const config = require('config');
var passport = require('passport')
const debug = require('debug')('app:passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook');
const BearerStrategy = require('passport-http-bearer');

const {Token,User} = require('../db');

debug('load start')

passport.use(new BearerStrategy(
  async (token, done) => {
    debug('Bearer strategy, token: '+token)
    const tokenObj = await Token.findOne({ token: token })
    if (!token) return done(null, false);
    const user =await  User.findOne({_id:tokenObj.user},["-pass"])
    if (!user) return done("User doesn't exist")

    debug('Bearer strategy successful', user)
    return done(null, user, { scope: 'all' });
  }
));
passport.use(new FacebookStrategy(
  config.get('passport.facebook'),
  async (accessToken, refreshToken, profile, cb) => {
    debug('Facebook strategy ',accessToken,refreshToken)
    debug('Facebook strategy %O',profile._json)
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(null, {id:'FegaFace'});
    }
  ));
passport.use(new LinkedInStrategy(
  config.get('passport.linkedIn'),
  async (accessToken, refreshToken, profile, cb)=>{
    debug('LinkedIn strategy ',accessToken,refreshToken)
    debug('Facebook strategy %O',profile)
    return cb(null, {id:'FegaLinkeIn'});

  }
))

debug('load end')
