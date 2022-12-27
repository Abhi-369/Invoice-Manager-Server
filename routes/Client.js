import express from 'express'
import { create, createDropDown, editInvoice, get, getDropDown, getInvoice, getReport } from '../controller/Client.js';

const router = express.Router()

router.post('/', create)
router.get('/', get)

router.get('/find/:id', getInvoice)
router.get('/report', getReport)
router.put('/:id', editInvoice)

export default router;
