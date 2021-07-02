import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "<url>";
const PORT = process.env.PORT || 5000;

/* setting up mongoose connection */
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
