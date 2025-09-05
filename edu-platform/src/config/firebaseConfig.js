// Import needed Firebase modules
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your Firebase project configuration (from Firebase console)
const firebaseConfig = {
    apiKey: 'AIzaSyDqb-dyVpRoqESw0okJCL57T1maZ6406tk',
    authDomain: 'edu-1-57c76.firebaseapp.com',
    projectId: 'edu-1-57c76',
    storageBucket: 'edu-1-57c76.firebasestorage.app',
    messagingSenderId: '864615166784',
    appId: '1:864615166784:web:b0268c57bf740b96fa40a5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
