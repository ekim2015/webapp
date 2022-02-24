import { db } from "../firebaseSetup";
import { getCalendarEvent, updateCalendarEvent, createCalendarEvent, deleteCalendarEvent } from "../controllers/eventController";

const express = express();

const router = express.Router();

router.get('/events', getCalendarEvent);
router.patch('/events', updateCalendarEvent);
router.post('/events', createCalendarEvent);
router.delete('/events', deleteCalendarEvent);