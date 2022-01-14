import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
     apiKey :process.env.React_FIREBASE_API_KEY,
 authDomain :process.env.React_FIREBASE_AUTH_DOMAIN,
 projectId :process.env.React_FIREBASE_PROJECTID,
 storageBucket :process.env.React_FIREBASE_STORAGE_BUCKET_BLOG,
 messagingSenderId :process.env.React_FIREBASE_MESSAGING_SENDER_ID,
 appId :process.env.React_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }