# 🔐 Auth Guide — VAPT Reference v2.0

> **Hosted on GitHub Pages · Protected by Firebase Authentication · Cost: $0/month**

**🌐 Live URL:** https://vishnu-u-s.github.io/vapt-auth-guide/

---

## 📋 Table of Contents

1. [What is this project?](#what-is-this-project)
2. [Project Structure](#project-structure)
3. [How I Deployed This — Step by Step](#how-i-deployed-this--step-by-step)
   - [Step 1 — Set Up Firebase Project](#step-1--set-up-firebase-project)
   - [Step 2 — Enable Email/Password Login](#step-2--enable-emailpassword-login)
   - [Step 3 — Add Your User Account](#step-3--add-your-user-account)
   - [Step 4 — Register Web App & Get Config](#step-4--register-web-app--get-config)
   - [Step 5 — Add Authorized Domain](#step-5--add-authorized-domain)
   - [Step 6 — Create GitHub Repository](#step-6--create-github-repository)
   - [Step 7 — Push Code to GitHub](#step-7--push-code-to-github)
   - [Step 8 — Enable GitHub Pages](#step-8--enable-github-pages)
   - [Step 9 — Watch Auto-Deployment](#step-9--watch-auto-deployment)
   - [Step 10 — Test the Live Login](#step-10--test-the-live-login)
4. [How to Update Content in Future](#how-to-update-content-in-future)
5. [Login Credentials](#login-credentials)
6. [Cost Breakdown](#cost-breakdown)
7. [How the Auth System Works](#how-the-auth-system-works)

---

## What is this project?

This is a **VAPT (Vulnerability Assessment & Penetration Testing) Reference Guide** for Authentication Methods. It covers 16 different authentication techniques (JWT, OAuth, SAML, MFA, etc.) with beginner-friendly explanations and expert technical details.

The app is:
- Hosted **free** on GitHub Pages (static HTML)
- Protected by **Firebase Authentication** (login required)
- Auto-deployed every time you push to `main` branch

---

## Project Structure

```
vapt-auth-guide/
├── index.html              ← Login page (Firebase Auth UI)
├── auth_guide_v2.html      ← Protected VAPT reference app
├── firebase-config.js      ← Firebase project credentials
├── README.md               ← This file
└── .github/
    └── workflows/
        └── deploy.yml      ← Auto-deploy to GitHub Pages
```

---

## How I Deployed This — Step by Step

---

### Step 1 — Set Up Firebase Project

Firebase is Google's free backend service. We use it **only for authentication** — it handles login securely without needing our own server.

1. Open your browser and go to 👉 https://console.firebase.google.com/
2. Sign in with your **Google account**
3. Click the **"Create a project"** button (or **"Add project"**)
4. Enter project name: `upskill-vapt`
5. Click **Continue**
6. On the Google Analytics screen → **toggle it OFF** (we don't need it)
7. Click **"Create project"**
8. Wait 10–15 seconds for Firebase to create the project
9. Click **"Continue"** when it finishes

✅ You now have a Firebase project called `upskill-vapt` on the **Spark plan (free)**.

---

### Step 2 — Enable Email/Password Login

Firebase supports many login methods. We use the simplest one — **Email + Password**.

1. In the Firebase Console left sidebar, click **"Authentication"**
2. Click the **"Get started"** button
3. You'll see a list of sign-in providers
4. Click on **"Email/Password"**
5. Toggle the **first switch** (Email/Password) to **ON** (it turns blue)
6. Click **"Save"**

✅ Firebase can now authenticate users with email and password.

---

### Step 3 — Add Your User Account

Firebase doesn't auto-create users — you have to add them manually (or via code). We add one user.

1. Stay on the **Authentication** page
2. Click the **"Users"** tab at the top
3. Click the **"Add user"** button
4. Fill in the form:
   - **Email:** `vishnu_u_s@upskill.local`
   - **Password:** `12345678@Abc`
5. Click **"Add user"**
6. The user appears in the user list with a UID

> ⚠️ **Note:** Firebase requires email format (like `something@domain.com`). We use `upskill.local` as the domain — it's a fake-but-valid format. This is the email you'll type when logging in.

✅ Your login credentials are now stored securely in Firebase.

---

### Step 4 — Register Web App & Get Config

Firebase needs to know which web app will use it. This step gives us the **config keys** we paste into our code.

1. Click the **gear icon ⚙️** next to "Project Overview" in the top-left sidebar
2. Click **"Project settings"**
3. Scroll down to the **"Your apps"** section
4. Click the **Web icon `</>`** to add a web app
5. Enter nickname: `vapt-web`
6. **Do NOT** tick "Firebase Hosting" (we use GitHub Pages instead)
7. Click **"Register app"**
8. Firebase shows you a `firebaseConfig` object — it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAiJObvsWb828tda2a_7rIr2WTLcbpa0ds",
  authDomain: "upskill-vapt.firebaseapp.com",
  projectId: "upskill-vapt",
  storageBucket: "upskill-vapt.firebasestorage.app",
  messagingSenderId: "566341681775",
  appId: "1:566341681775:web:fee32ed8099031966cc39a"
};
```

9. **Copy all 6 values** and paste them into `firebase-config.js` in your project
10. Click **"Continue to console"**

> 🔒 **Are these keys safe to share?** Yes! These keys identify your Firebase *project*, not your password. They're meant to be in your public code. Firebase Security Rules protect your actual data.

✅ `firebase-config.js` now has real values and can connect to Firebase.

---

### Step 5 — Add Authorized Domain

Firebase blocks login attempts from unknown websites as a security measure. We need to **whitelist our GitHub Pages domain**.

1. In Firebase Console → click **"Authentication"**
2. Click the **"Settings"** tab
3. Scroll down to **"Authorized domains"**
4. Click **"Add domain"**
5. Type: `vishnu-u-s.github.io`
6. Click **"Add"**

You should now see `vishnu-u-s.github.io` in the authorized domains list alongside `localhost`.

> ⚠️ **If you skip this step**, Firebase will reject ALL login attempts from the live site with an "unauthorized domain" error.

✅ Firebase will now accept logins from your GitHub Pages URL.

---

### Step 6 — Create GitHub Repository

GitHub is where we store our code. **GitHub Pages** then turns that code into a live website automatically.

1. Go to 👉 https://github.com/new
2. Fill in the form:
   - **Repository name:** `vapt-auth-guide`
   - **Description:** `Authentication Methods VAPT Reference Guide`
   - **Visibility:** ✅ Public
   - **Initialize:** Leave ALL checkboxes UNCHECKED (no README, no .gitignore)
3. Click **"Create repository"**
4. GitHub shows you an empty repo with setup instructions

> 💡 The repo must be **Public** for GitHub Pages to work on the free plan.

✅ Empty repository created at `github.com/vishnu-u-s/vapt-auth-guide`.

---

### Step 7 — Push Code to GitHub

Now we upload all our project files to the GitHub repository using Git.

Open a terminal in your project folder and run these commands **one by one**:

```bash
# 1. Initialize Git in your project folder
git init

# 2. Stage all files for commit
git add .

# 3. Set your Git identity (only needed once)
git config user.email "vishnu@upskill.local"
git config user.name "vishnu-u-s"

# 4. Create your first commit
git commit -m "Initial commit: VAPT Auth Guide with Firebase Auth + GitHub Pages"

# 5. Rename branch to 'main' (GitHub default)
git branch -M main

# 6. Connect your local repo to GitHub
git remote add origin https://github.com/vishnu-u-s/vapt-auth-guide.git

# 7. Push everything to GitHub
git push -u origin main
```

> 🔑 **Authentication:** Git will ask for your GitHub username and password. Use a **Personal Access Token** (not your actual GitHub password):
> - Go to https://github.com/settings/tokens/new
> - Select scopes: `repo` + `workflow`
> - Click "Generate token" — copy it and use it as the password

✅ All 5 files are now live in your GitHub repository.

---

### Step 8 — Enable GitHub Pages

We need to tell GitHub to serve our files as a website using GitHub Actions (our auto-deploy workflow).

1. Go to your repo: `https://github.com/vishnu-u-s/vapt-auth-guide`
2. Click **"Settings"** tab (top menu)
3. In the left sidebar, scroll to **"Pages"**
4. Under **"Build and deployment"** → **"Source"**
5. Click the dropdown and select **"GitHub Actions"**
6. That's it — no Save button needed, it saves automatically

> 💡 GitHub Actions reads `.github/workflows/deploy.yml` (already in your repo) and runs it automatically on every push.

✅ GitHub Pages is now configured to auto-deploy from GitHub Actions.

---

### Step 9 — Watch Auto-Deployment

After enabling GitHub Pages, the first deployment starts automatically.

1. Go to your repo's **Actions** tab: `https://github.com/vishnu-u-s/vapt-auth-guide/actions`
2. You'll see a workflow run called **"Deploy to GitHub Pages"**
3. It shows status:
   - 🟡 **Queued** → waiting to start
   - 🔵 **In progress** → deploying now
   - ✅ **Success** → your site is live!
   - ❌ **Failed** → check the logs for errors
4. The whole process takes about **20–40 seconds**
5. After success, go to: `https://vishnu-u-s.github.io/vapt-auth-guide/`

> 🔄 **Every future push auto-deploys!** You never have to touch the Actions tab again — just push your changes and the site updates automatically in ~30 seconds.

✅ Your site is live at `https://vishnu-u-s.github.io/vapt-auth-guide/`

---

### Step 10 — Test the Live Login

Let's verify the complete login flow works end-to-end.

**Test 1: Login works**
1. Open 👉 https://vishnu-u-s.github.io/vapt-auth-guide/
2. You should see the dark **"Welcome back"** login page
3. Enter email: `vishnu_u_s@upskill.local`
4. Enter password: `12345678@Abc`
5. Click **"Sign In →"**
6. ✅ You should be redirected to the VAPT reference dashboard

**Test 2: Auth protection works**
1. Open a new tab
2. Go directly to: `https://vishnu-u-s.github.io/vapt-auth-guide/auth_guide_v2.html`
3. ✅ You should be redirected back to the login page (not see the dashboard)

**Test 3: Logout works**
1. After logging in, look at the **top-right corner** of the dashboard
2. You'll see your email + a red **"⏻ Sign Out"** button
3. Click it
4. ✅ You should be redirected back to the login page

✅ Full end-to-end auth flow is working perfectly.

---

## How to Update Content in Future

Whenever you want to update the VAPT guide content, it's just 3 commands:

```bash
# Navigate to your project folder
cd "/home/hello/Downloads/UpSkill - Penetration Testing"

# Stage your changes
git add .

# Commit with a message describing what changed
git commit -m "Update: added new auth method for XYZ"

# Push to GitHub (auto-deploys in ~30 seconds)
git push origin main
```

Then watch the Actions tab to confirm deployment: `https://github.com/vishnu-u-s/vapt-auth-guide/actions`

---

## Login Credentials

| Field    | Value                       |
|----------|-----------------------------|
| Email    | `vishnu_u_s@upskill.local`  |
| Password | `12345678@Abc`              |

> 🔒 This user exists only in Firebase Authentication — it has no access to your Google account or any other service.

---

## Cost Breakdown

| Service | Plan | Limit | Monthly Cost |
|---------|------|-------|-------------|
| GitHub Pages | Free | Unlimited requests | **$0** |
| Firebase Authentication | Spark (free) | 10,000 sign-ins/month | **$0** |
| GitHub Actions | Free | 2,000 minutes/month | **$0** |
| **Total** | | | **$0/month forever** |

---

## How the Auth System Works

```
User visits index.html (GitHub Pages CDN)
         │
         ▼
Firebase SDK checks browser session
         │
    ┌────┴─────┐
    │          │
Not logged in  Already logged in
    │          │
    ▼          ▼
Show login   Redirect to
  form       auth_guide_v2.html
    │
    ▼
User enters email + password
    │
    ▼
Firebase validates credentials
(runs on Google's servers — not GitHub Pages)
    │
    ├── ❌ Wrong → Show error message (shake animation)
    │
    └── ✅ Correct → Redirect to auth_guide_v2.html
                          │
                          ▼
               Firebase auth guard runs on load
                          │
                    ┌─────┴──────┐
                    │            │
              Not signed in   Signed in
                    │            │
                    ▼            ▼
              Redirect to   Show VAPT app
               index.html  + logout button
```

### Key technical points:
- **Firebase SDK** runs entirely in the browser — no server required
- **Session token** is stored in browser memory by Firebase automatically
- **Auth guard** on `auth_guide_v2.html` checks the token on every page load
- **GitHub Pages** serves static files only — Firebase handles all security logic
- **Authorized domains** in Firebase prevent login from unknown websites
