import { db } from "../firebaseSetup";
const express = express();

const router = express.Router();

router.get('/:uid', getUser);
router.delete('/:uid', deleteUser);


