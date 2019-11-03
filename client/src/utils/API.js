import axios from "axios";

export default {
  saveManifestoHeader: function(manifestoHeaderData) {
    console.log("Going to call axios")
    return axios.post("/api/manifestoHeader", manifestoHeaderData);
  },
  getManifestoItems: function() {
    console.log("Going to load Mainfesto items")
    return axios.get("/api/manifestoHeader");
  }
};
