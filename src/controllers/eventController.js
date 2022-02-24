import { db } from '../firebaseSetup'
import * as functions from 'firebase-functions'
import { addDoc, getDoc, setDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useScrollTrigger } from '@mui/material';


// will serve as mediator between model and view
// deals with client-sided logic

let events = []; // within scope of element

const docRef = doc(db, "events");
const docCheck = await getDoc(docRef);

const collectionRef = collection(db, "events");

export const getCalendarEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await getDocs(collection(db, "events"));
        events.docs.map((doc) => (events.push({ ...doc.data() })))
    } catch(err) {
        res.status(400).send(error.message);
    }
}

export const createCalendarEvent = async (req, res) => {
    try {
        const body = req.body;
        await addDoc(collectionRef, { ...data, id: id + 1 }) // creates document with data and randomly generated user ID
    } catch(err) {
        res.status(400).send(error.message);
    }
}

export const updateCalendarEvent = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const events = await getDocs(collection(db, "events"));
        events.docs.map((doc) => (events.push({ ...doc.data(), id: doc.id })))
    } catch(err) {
        res.status(400).send(error.message);
    }
}

export const deleteCalendarEvent = async (req, res) => {
    try {
        const body = req.body;
        const events = await getDocs(collection(db, "events"));
        const {id} = req.params;
        events.doc.map((doc) => events.push({ ...docs.data(), id: doc.id }));
        if (events.find((calendarEvent) => calendarEvent.id === id)) {
            const eventDoc = doc(collectionRef, calendarEvent.id);
            deleteDoc(eventDoc);
        }
    } catch(err) {
        res.status(400).send(error.message);
    }
}


