import express from 'express';

import {
  createInsurance,
  deleteInsurance,
  getInsurance,
  getInsurances,
  updateInsurance,
} from '../controllers/insurance.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createInsurance);

//UPDATE
router.put('/:id', verifyAdmin, updateInsurance);

//DELETE
router.delete('/:id', deleteInsurance);

//GET
router.get('/:id', getInsurance);

//GET ALL
router.get('/', getInsurances);
export default router;
