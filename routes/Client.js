import express from 'express'
import { create, get } from '../controller/Client.js';

const router = express.Router()

router.post('/', create)
router.get('/', get)

export default router;