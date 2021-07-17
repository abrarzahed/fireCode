// import firebase from "firebase/app";
// import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyD5w6yDUjN6WEddybqR5Hb2FcGAdGQkl1k",
//   authDomain: "fireblogtvm.firebaseapp.com",
//   projectId: "fireblogtvm",
//   storageBucket: "fireblogtvm.appspot.com",
//   messagingSenderId: "463616965582",
//   appId: "1:463616965582:web:8e19004a4a4322627ec99f",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

// export { timeStamp };
// export default firebaseApp.firestore();

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: "AIzaSyD5w6yDUjN6WEddybqR5Hb2FcGAdGQkl1k",
  authDomain: "fireblogtvm.firebaseapp.com",
  projectId: "fireblogtvm",
  storageBucket: "fireblogtvm.appspot.com",
  messagingSenderId: "463616965582",
  appId: "1:463616965582:web:8e19004a4a4322627ec99f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
