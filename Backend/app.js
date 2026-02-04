import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRouter from "./form.js";

// ✅ Load environment variables (works locally + production)
dotenv.config();

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: function (origin, callback) {
    const allowed = [
      "https://trambak.app",
      "https://www.trambak.app",
      "https://280408b2.trimbak.pages.dev", 
    ];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.options("*", cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200).send("OK");
});
 
// ✅ Health check (used by ELB / EB)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// ✅ Routes
app.use("/api", formRouter);
// ✅ Request logger (for debugging)
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// ✅ Global error handler (prevents silent 500 crashes)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("MAIL_USER:", process.env.MAIL_USER ? "Loaded" : "Missing");
});
