import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
     apiKey :process.env.GATSBY_FIREBASE_API_KEY,
 authDomain :process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
 projectId :process.env.GATSBY_FIREBASE_PROJECTID,
 storageBucket :process.env.GATSBY_FIREBASE_STORAGE_BUCKET_BLOG,
 messagingSenderId :process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
 appId :process.env.GATSBY_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }