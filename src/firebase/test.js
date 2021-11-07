import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("ocHWnAydAbm1Od7o7F4r")
  .collection("cartItems")
  .doc("eC2RKtBsmcfdgqeNwPyf");

firestore.doc("/users/ocHWnAydAbm1Od7o7F4r/cartItems/eC2RKtBsmcfdgqeNwPyf");

firestore.collection("/users/ocHWnAydAbm1Od7o7F4r/cartItems");
