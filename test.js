






// DB Config


// Connect to MongoDB
mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

