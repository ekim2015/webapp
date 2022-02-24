import { db } from '../firebaseSetup'

const router = express.Router();

router.get('/groups', getGroups);
router.get('/groups/:gid', getGroup);
router.post('/groups', createGroup);
router.delete('/groups', deleteGroup);
router.put('/groups', updateGroup);

router.get('/groups/:descID', getGroupDesc);
router.put('/groups/:descID', updateGroupDesc);

// group members
router.get('/groups/members', getGroupMembers);
router.delete('/groups/members/:uid', removeMember);

