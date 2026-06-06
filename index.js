import express from "express";

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get("/", (_, res) => {
    return res.json({
        message: "Server is healthy.",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
