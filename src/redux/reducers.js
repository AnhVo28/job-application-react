import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// const person = {
//   fullName: "",
//   phone: "",
//   email: "",
//   reEmail: "",
//   address: "",
//   city: "",
//   state: "",
//   country: "",
//   zip: "",
//   hear: "",
//   skills: [
//     { label: "swimming", checked: true, id: "123" },
//     { label: "reading", checked: false, id: "535" },
//     { label: "cooking", checked: false, id: "909" },
//     { label: "dancing", checked: false, id: "435" }
//   ],
//   languages: ["English", "Finnish", "Arabic", "French", "Chinese"]
// };

// const user = (state = person, { type, payload }) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };

export default combineReducers({ form: formReducer });
