import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
<<<<<<< HEAD
import userRoutes from './routes/user.route.js';
=======
>>>>>>> 7cfd869f8f3d3d52d1f2bfdb7136f3732dfd022f
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to mongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('server listening on port 3000 !!!');
});
<<<<<<< HEAD


app.use("/api/user", userRoutes);
=======
>>>>>>> 7cfd869f8f3d3d52d1f2bfdb7136f3732dfd022f
