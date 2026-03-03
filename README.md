# Welcome to your Expo app 👋

🧩 STEP 0: What Kind of React Native Is This?

This project uses:

✅ React Native
✅ Expo
✅ Expo Router (file-based routing system)

That means:
📂 The app/ folder controls navigation automatically.

No manual navigation setup.

🖥️ STEP 1: Install Required Software (Windows 11)
1️⃣ Install Node.js (You already have v20)

Check in CMD:

node -v

Should show:

v20.x.x

Check npm:

npm -v
2️⃣ Install Git

Check:

git --version

If not installed → download and install.

3️⃣ No Need For Old Expo CLI

Instead of installing global expo-cli, we use:

npx

So no global installation needed.

📂 STEP 2: Get The Project

If downloading ZIP:

• Extract folder
• Open that folder

If using Git:

git clone <repo-link>
cd project-folder
📦 STEP 3: Install Dependencies

Inside the project root (where package.json exists), run:

npm install

This installs:

• Expo
• React Native
• Expo Router
• All used libraries

Wait until finished.

▶️ STEP 4: Start Development Server

Run:

npx expo start

After few seconds:

✔ Browser opens
✔ QR Code appears
✔ Terminal shows Metro running

📱 STEP 5: Run On Android Phone
1️⃣ Install Expo Go (Play Store)

Search:
Expo Go

Install it.

2️⃣ Same WiFi

PC and Phone must be on same WiFi.

3️⃣ Scan QR

Open Expo Go
Tap Scan QR
Scan from browser

🎉 App opens.

📂 NOW VERY IMPORTANT
Understanding Your Folder Structure (Expo Router)

Your structure:

app/
 ├── _layout.tsx
 ├── (tabs)/
 │     ├── _layout.tsx
 │     ├── index.tsx
 │     ├── screen2.tsx
 │     └── ...
🟢 What is app/ folder?

This is the brain of navigation.

In Expo Router:
📂 Folder name = Route name

🟢 What is _layout.tsx?

It defines layout/navigation wrapper.

Example:
• Stack navigation
• Tab navigation

It wraps all screens inside that folder.

🟢 What is (tabs)/ folder?

The ( ) means:

👉 It is a grouped route
👉 Used for tab navigation
👉 Does not appear in URL

Inside (tabs):

Each .tsx file becomes a tab screen.

🟢 What is index.tsx inside (tabs)?

That is the default screen.

If user opens app → this screen loads first.

So if you want to edit main screen:

👉 Edit:

app/(tabs)/index.tsx
✏️ How To Edit Code
1️⃣ Install VS Code

Open VS Code
Click:

File → Open Folder → Select project folder

2️⃣ Edit Any Screen

Example:

app/(tabs)/index.tsx

Make changes
Save file

📱 Phone reloads automatically (Fast Refresh)

🧠 How Navigation Works (Very Important)

If you create:

app/(tabs)/camera.tsx

It automatically becomes a new tab.

No extra routing needed.

Expo Router reads folder structure and builds navigation.

🔄 If App Not Updating

Press:

r

in terminal

OR restart with:

npx expo start -c
📦 Installing New Library

Inside project folder:

npm install library-name

Example:

npm install expo-camera

Then restart:

npx expo start
🔥 Full Beginner Flow Summary

1️⃣ Install Node
2️⃣ Download project
3️⃣ Open folder in CMD
4️⃣ Run npm install
5️⃣ Run npx expo start
6️⃣ Install Expo Go
7️⃣ Scan QR
8️⃣ Edit app/(tabs)/index.tsx

Done.

💡 If They Want To Understand Project Structure Quickly

Tell them:

app/ = screens
_layout.tsx = navigation wrapper
(tabs)/ = tab navigation group
index.tsx = default home screen

That’s enough for beginner level.
