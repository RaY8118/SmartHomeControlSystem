// src/writeRelayData.js
import { getDatabase, ref, set } from "firebase/database";
import { db } from "./firebase";


const writeRelayData = (relayId, state) => {
    try {
        set(ref(db, 'relays/' + relayId), {
            state: state
        })
        console.log("Data saved Successfully")
    } catch (error) {
        console.log("Some error occured", error)
    }
}

const writeFormData = (formData) => {
    try {
        set(ref(db, 'formValues'), formData)
        console.log("Form Data saved succcessfully")
    }
    catch (error) {
        console.log("Error saving the form data", error)
    }
}

const wifiData = async ({ ssid, password }) => {
    try {
        await set(ref(db, 'wifi/'), { ssid, password });
        console.log("Data saved successfully");
    } catch (error) {
        console.log("Some error occurred", error);
    }
};


export { writeFormData, writeRelayData, wifiData }
