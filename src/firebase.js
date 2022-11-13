// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function firebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAZ-dRGdwa2w-XnLplMWoFQHe3lsUisW4E",
    authDomain: "reacting-2bd29.firebaseapp.com",
    projectId: "reacting-2bd29",
    storageBucket: "reacting-2bd29.appspot.com",
    messagingSenderId: "857327592510",
    appId: "1:857327592510:web:14b23f8ae390edf663dd6f",
    measurementId: "G-BZL420MN5N",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // fetching data from firestore database
  const db = getFirestore();
  // const colTaskRef = collection(db, "Task");
  // const colCollabRef = collection(db, "Collaborators");
  // getDocs(colTaskRef)
  //   .then((snapshot) => {
  //     let tasks = [];
  //     snapshot.docs.forEach((doc) => {
  //       tasks.push({ ...doc.data(), id: doc.id });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // getDocs(colCollabRef)
  //   .then((snapshot) => {
  //     let collabs = [];
  //     snapshot.docs.forEach((doc) => {
  //       collabs.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(collabs);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  //adding collaborators
  // const addCollaboratorForm = document.querySelector(".form__add-collaborator");
  // addCollaboratorForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   addDoc(colCollabRef, {
  //     colabname: addCollaboratorForm.colabname.value,
  //     email: addCollaboratorForm.email.value,
  //   });
  // });
  // addCollaboratorForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   addDoc(colCollabRef, {
  //     name: addCollaboratorForm.name.value,
  //     email: addCollaboratorForm.email.value,
  //   }).then(() => {
  //     addCollaboratorForm.reset();
  //   });
  // });

  // //adding tasks
  // const addTaskForm = document.querySelector(".add__task-form");
  // addTaskForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  // });
  // //deleting tasks
  // const deleteTaskBtn = document.querySelector(".delete__task-btn");
  // deleteTaskBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });
}

export { firebase };
export const db = getFirestore();
