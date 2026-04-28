# 🔐 Auth Guide — VAPT Reference v2.0

> **Hosted on GitHub Pages · Protected by Firebase Authentication**

Live URL: `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`

---

## 📋 Project Structure

```
.
├── index.html           ← Login page (Firebase Auth)
├── auth_guide_v2.html   ← Protected VAPT reference (requires login)
├── firebase-config.js   ← Your Firebase project config (fill in once)
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml   ← Auto-deploy to GitHub Pages on push
```

---

## 🚀 Setup Guide (One-time)

### Step 1 — Create a Firebase Project (Free)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `upskill-vapt`) → **Continue**
3. Disable Google Analytics (optional) → **Create project**

---

### Step 2 — Enable Email/Password Auth

1. In the left sidebar: click **Authentication** → **Get started**
2. Go to the **Sign-in method** tab
3. Click **Email/Password** → toggle **Enable** → **Save**

---

### Step 3 — Add Your User Account

1. Stay in **Authentication** → click the **Users** tab
2. Click **Add user**
3. Fill in:
   - **Email:** `vishnu_u_s@upskill.local`
   - **Password:** `12345678@Abc`
4. Click **Add user**

> ⚠️ Use this exact email when signing in at the login page.

---

### Step 4 — Get Your Firebase Config

1. In the sidebar: click ⚙️ **Project Settings**
2. Scroll to **Your apps** → click **Add app** → choose **Web** (`</>`)
3. Give it a nickname (e.g. `vapt-web`) → click **Register app**
4. You'll see a `firebaseConfig` object like:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "upskill-vapt.firebaseapp.com",
  projectId: "upskill-vapt",
  storageBucket: "upskill-vapt.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

5. Open `firebase-config.js` in this repo and **replace all placeholder values** with your real values.

---

### Step 5 — Create GitHub Repository & Upload

```bash
# In your project folder:
cd "/home/hello/Downloads/UpSkill - Penetration Testing"

git init
git add .
git commit -m "Initial commit: VAPT Auth Guide with Firebase Auth"

# Create a new repo on github.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

---

### Step 6 — Enable GitHub Pages via GitHub Actions

1. Go to your repo on GitHub.com
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment** → **Source** → select **GitHub Actions**
4. That's it! The `.github/workflows/deploy.yml` handles the rest.

> Every time you `git push`, your site auto-deploys in ~30 seconds.

---

### Step 7 — Authorize Your Domain in Firebase

1. Back in Firebase Console → **Authentication** → **Settings** tab
2. Under **Authorized domains** → click **Add domain**
3. Add: `YOUR-USERNAME.github.io`
4. Click **Add**

> Without this step, Firebase will block sign-in from your GitHub Pages URL.

---

## 🔑 Login Credentials

| Field    | Value                       |
|----------|-----------------------------|
| Email    | `vishnu_u_s@upskill.local`  |
| Password | `12345678@Abc`              |

---

## 🏗️ How It Works

```
User visits index.html (GitHub Pages)
       ↓
Firebase Auth checks if already signed in
       ↓ No session         ↓ Has session
  Show login form    →  Redirect to auth_guide_v2.html
       ↓
User enters email + password
       ↓
Firebase validates credentials (free tier)
       ↓ Success
Redirect to auth_guide_v2.html
       ↓
Auth guard on page load checks Firebase session
       ↓ Not signed in     ↓ Signed in
  Redirect to login   →  Show the app + logout button
```

---

## 🆓 Cost

| Service        | Plan  | Cost |
|----------------|-------|------|
| GitHub Pages   | Free  | $0   |
| Firebase Auth  | Spark | $0   |
| Firebase quota | 10K sign-ins/month | $0 |

---

## 🛡️ Security Notes

- Firebase config keys in this repo are **safe to be public** — they identify your project, not your credentials
- The user list in Firebase is **never exposed** client-side
- Session tokens are stored in browser memory by Firebase SDK
- All traffic is over HTTPS (GitHub Pages enforces this)
