import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateCompletedQuery, validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateCompletedQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
