import axios from 'axios';
import * as dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite';

// Configure dotenv
// dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIRESTORE_API_KEY,
  authDomain: import.meta.env.FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIRESTORE_APP_ID,
};

// Initialize Firebase, and create db connection
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getAllVans() {
  try {
    const querySnapshot = await getDocs(vansCollectionRef);
    const vansArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return {
      isSuccess: true,
      vans: vansArr,
    };
  } catch (err) {
    console.error(err);
    throw new Error({
      message: 'Failed to fetch vans!',
      isSuccess: false,
    });
  }
}

export async function getVan(id) {
  try {
    const docRef = doc(db, 'vans', id);
    const vanSnapshot = await getDoc(docRef);
    const vanData = {
      ...vanSnapshot.data(),
      id: vanSnapshot.id,
    };
    return {
      isSuccess: true,
      van: vanData,
    };
  } catch (error) {
    throw new Error({
      message: 'Failed to fetch vans!',
      isSuccess: false,
    });
  }
}

export async function getHostsAllVans() {
  const hostVansQuery = query(vansCollectionRef, where('hostId', '==', '123'));

  try {
    const hostVansSnapshot = await getDocs(hostVansQuery);
    const hostVansArr = hostVansSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return {
      isSuccess: true,
      vans: hostVansArr,
    };
  } catch (error) {
    throw new Error({
      message: 'Failed to fetch host vans!',
      isSuccess: false,
    });
  }
}

export async function getHostsVan(id) {
  return getVan(id);
}

export async function loginUser(creds) {
  try {
    const res = await axios.post('/api/login', creds);
    return res.data;
  } catch (error) {
    throw {
      message: error.message,
      statusText: error.statusText,
      status: error.status,
    };
  }
}
