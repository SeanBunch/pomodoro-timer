// const passport = require("passport");
// require("dotenv").config();
// const knex = require("knex");
// const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/google/callback",
//       passReqToCallback: true,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // Database operations (create or retrieve user record)
//       knex("users")
//         .insert({ google_id: profile.id, email: profile.email })
//         .returning("*")
//         .then((user) => {
//           done(null, user[0]);
//         })
//         .catch((err) => {
//           done(err, null);
//         });
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   knex("users")
//     .where({ id })
//     .first()
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((err) => {
//       done(err, null);
//     });
// });
