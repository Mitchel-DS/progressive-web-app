import express from "express";
const router = express.Router();
import { fetchData } from "../controllers/home.js";
import details from "../controllers/details.js";
import error from "../controllers/error.js";

router.get('/', fetchData);
router.get('/details/:id', details)
router.get ('*', error);

export default router;