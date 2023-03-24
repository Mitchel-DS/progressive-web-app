import express from "express";
const router = express.Router();
import { fetchData } from "../controllers/home.js";
import error from "../controllers/error.js";

router.get('/', fetchData);

router.get ('*', error);

export default router;