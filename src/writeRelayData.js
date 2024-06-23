// src/writeRelayData.js
import { getDatabase, ref, set } from "firebase/database";
import { db } from "./firebase";

function writeRelayData(relayId, state) {
    set(ref(db, 'relays/' + relayId), {
        state: state
    })
        .then(() => {
            console.log('Data saved successfully!');
        })
        .catch((error) => {
            console.error('Error saving data: ', error);
        });
}


function writeFormData(formData) {
    set(ref(db, 'formValues'), formData)
        .then(() => {
            console.log('Form data saved successfully!');
        })
        .catch((error) => {
            console.error('Error saving form data: ', error);
        });
}

export { writeFormData, writeRelayData }
