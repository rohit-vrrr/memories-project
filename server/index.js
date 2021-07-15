import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// prefix the postRoutes with '/posts'
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send("Memories API");
});

const port = process.env.PORT || 5000;

/* setting up mongoose connection */
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    })
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
