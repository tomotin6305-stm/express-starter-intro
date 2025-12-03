import { Router } from "express";
const router = Router();

router.get("/hello", (req, res) => {
    res.send("Hello, トモカ!");
});

router.get("/json", (req, res) => {
    res.json({
        message: "This is JSON!",
        author: "Tomoka",
        mood: "coding"
    });
});

export default router;
