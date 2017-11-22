var express = require('express');
var router = express.Router();
const passport = require('passport');
const debug = require('debug')("app:router");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  '/is-logged',
  passport.authenticate('bearer', { session: false }),
  (req, res ) => res.json(req.user)
);
router.get(
  '/facebook',
  passport.authenticate('facebook',(...args)=>{
    debug("CUSTOM CALLBACK %O", args)
  })
)

router.get(
  '/facebook',
  passport.authenticate('facebook',{ failureRedirect: '/login',authType: 'rerequest',scope:['email','user_education_history','user_likes','user_website','user_work_history'],session:false })
)

router.get('/facebook/callback',
  passport.authenticate('facebook',(...args)=>{
    debug("CUSTOM CALLBACK %O", args)
  }),
  (req, res) => res.redirect('/')
);

router.get(
  '/linkedin',
  passport.authenticate('linkedin',{ session:false })
)
router.get('/linkedin/callback',
  passport.authenticate('linkedin',{session:false}),
  (req, res) => res.redirect('/')
);
module.exports = router;
