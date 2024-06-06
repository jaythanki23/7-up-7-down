import express from 'express'
import { playGame } from "./api.js";

const router = express.Router();

router.route('/').post(playGame);

export { router };