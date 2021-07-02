import express from "express";

const router = express.Router();

// route: '/posts'

router.get('/', (req, res) => {
    res.send("Working!");
});

export default router;
