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

export default writeRelayData;
