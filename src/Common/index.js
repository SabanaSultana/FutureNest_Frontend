
import axios from "axios";

const backendDomin = import.meta.env.VITE_BACKEND_URL;

const SummaryApi = {
  signUp: {
    url: `${backendDomin}/api/v1/auth/signup`,
    method: axios.post
  },
  current_user: {
    url: `${backendDomin}/api/v1/auth/current-user`,
    method: axios.get
  },

  sendOtp: {
    url: `${backendDomin}/api/v1/auth/sendotp`,
    method: axios.post
  },
  login: {
    url: `${backendDomin}/api/v1/auth/login`,
    method: axios.post
  },
  logout: {
    url: `${backendDomin}/api/v1/auth/logout`,
    method:axios.post,
  },
  contactUs: {
    url: `${backendDomin}/api/v1/contact/contact-us`,
    method: "post",
  },
  bookMeet: {
    url: `${backendDomin}/api/v1/contact/book-meet`,
    method: "post",
  },
  allOrphanages: {
    url: `${backendDomin}/api/v1/orphanages`,
    method: "get",
  },
  singleOrphanage: {
    url: `${backendDomin}/api/v1/orphanages/681cf98b6aaaf76614664d16`,
    method: "get",
  },
  addChild: {
    url: `${backendDomin}/api/v1/children/addChildren`,
    method: "post",
  },
  orphanageChildren: {
    url: `${backendDomin}/api/v1/children/orphanage/681cf98b6aaaf76614664d16`,
    method: "get",
  },
  getChildDetails: {
    url: `${backendDomin}/api/v1/children/681d283eebec1e1734684812`,
    method: "get",
  },
  updateChildDetails: {
    url: `${backendDomin}/api/v1/children/681d283eebec1e1734684812`,
    method: "put",
  },
  deleteChild: {
    url: `${backendDomin}/api/v1/children/681d282debec1e173468480d`,
    method: "delete",
  },
};

export default SummaryApi;
