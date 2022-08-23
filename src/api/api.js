import axios from "axios";
export default class Api {

    // Get Blogs API
    static getBlogs = async () => {
        try {
            const res = await axios.get(`https://dev.freshtrack.ma/Front-api/Overview/Blog`);
            return res;
        } catch (error) {
            return error.response.data;
        }
    }

    // Get Incident Reports API
    static getIncidentReports = async () => {
        try {
            const res = await axios.get(`https://dev.freshtrack.ma/Front-api/Overview/Incidents`);
            return res;
        } catch (error) {
            return error.response.data;
        }
    }

    // Get Pinned Shipment API
    static getPinnedShipment = async () => {
        try {
            const res = await axios.get(`https://dev.freshtrack.ma/Front-api/Overview/PinnedShipments`);
            return res;
        } catch (error) {
            return error.response.data;
        }
    }

    // Get TaskDetail API
    static getTaskDetail = async (param) => {
        try {
            const res = await axios.get(`https://dev.freshtrack.ma/Front-api/Overview/TaskDetail/{"action":"${param}"`);
            return res;
        } catch (error) {
            return error.response.data;
        }
    }

    // Get OfferDetail API
    static getOfferDetail = async (id) => {
        try {
            const res = await axios.get(`https://dev.freshtrack.ma/Front-api/Overview/_Offers_To_Preaffect_Detail/{"id":"${id}"}`);
            return res;
        } catch (error) {
            return error.response.data;
        }
    }

}