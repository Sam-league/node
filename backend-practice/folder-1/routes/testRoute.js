import express from "express";
import { createTest, getTest } from "../controller/testController.js";

const router = express.Router();

router.get("/", getTest);
router.post("/", createTest);

export default router;
