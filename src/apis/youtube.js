import axios from "axios";

const KEY_PROD = "AIzaSyBn1bcP50drRwtXIYb5vIU-OqPDz07H-n4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY_PROD
  }
});
