module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: [
      env("CLOUDINARY_NAME"),
      env("CLOUDINARY_KEY"),
      env("CLOUDINARY_SECRET"),
    ],
  },
});

// cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET")
