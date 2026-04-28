// ============================================================
//  Firebase Configuration
//  👉 After creating your Firebase project, replace ALL values
//     below with your real config from:
//     Firebase Console → Project Settings → Your Apps → Web App
// ============================================================

const firebaseConfig = {
  apiKey:            "PASTE_YOUR_apiKey_HERE",
  authDomain:        "PASTE_YOUR_authDomain_HERE",
  projectId:         "PASTE_YOUR_projectId_HERE",
  storageBucket:     "PASTE_YOUR_storageBucket_HERE",
  messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
  appId:             "PASTE_YOUR_appId_HERE"
};

// Initialize Firebase (shared by index.html and auth_guide_v2.html)
firebase.initializeApp(firebaseConfig);
