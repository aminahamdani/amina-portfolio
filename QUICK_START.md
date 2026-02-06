# ⚡ Quick Start Guide - Deploy Your Portfolio

## Step 1: Install Node.js (One-Time Setup)

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Click "Download Node.js (LTS)" - this is the recommended version
   - Save the installer file

2. **Install Node.js:**
   - Double-click the downloaded installer
   - Click "Next" through all steps (accept defaults)
   - Make sure "Add to PATH" is checked (it should be by default)
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

3. **Verify Installation:**
   - Close ALL PowerShell/Command Prompt windows
   - Open a NEW PowerShell window
   - Type: `node --version`
   - You should see something like: `v20.x.x`
   - Type: `npm --version`
   - You should see something like: `10.x.x`

✅ **If both commands work, Node.js is installed correctly!**

---

## Step 2: Deploy Your Portfolio

### Option A: Use the Automated Script (Easiest)

1. Open PowerShell
2. Navigate to your repository:
   ```powershell
   cd "c:\Users\Amina Rubab Hamdani\OneDrive\Documents\My Projects\amina-portfolio"
   ```
3. Run the deployment script:
   ```powershell
   .\deploy-portfolio.ps1
   ```
4. Follow the prompts - it will:
   - Check Node.js is installed
   - Install dependencies
   - Build your React app
   - Copy files to repository root
   - Commit and push to GitHub

### Option B: Manual Commands

If you prefer to run commands manually:

```powershell
# 1. Navigate to React app
cd "c:\Users\Amina Rubab Hamdani\OneDrive\Documents\My Projects\amina-portfolio\Update portfolio webpage"

# 2. Install dependencies
npm install

# 3. Build the app
npm run build

# 4. Go back to repository root
cd ..

# 5. Copy built files to root
Copy-Item -Path "Update portfolio webpage\dist\*" -Destination "." -Recurse -Force

# 6. Commit and push
git add .
git commit -m "Deploy React portfolio to GitHub Pages"
git push origin master
```

---

## Step 3: Wait and Check

1. **Wait 2-5 minutes** for GitHub Pages to rebuild
2. Visit: https://aminahamdani.github.io/amina-portfolio/
3. **Clear browser cache** if you see the old version:
   - Press `Ctrl + Shift + R` (Windows)
   - Or `Ctrl + F5`

---

## ✅ What You'll Get

- ✨ Modern React-based portfolio
- 📧 Working contact form (with EmailJS)
- 🌙 Dark mode toggle
- 📱 Responsive design
- 🎨 All your projects and content

---

## ❓ Troubleshooting

**"npm is not recognized"**
- Make sure you restarted PowerShell after installing Node.js
- Check Node.js is in PATH: `where.exe node`
- Try reinstalling Node.js

**Script won't run**
- Right-click PowerShell → "Run as Administrator"
- Or run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

**Build fails**
- Make sure you're connected to the internet
- Check for error messages in the output
- Try deleting `node_modules` folder and running `npm install` again

**Website shows old version**
- Wait longer (can take up to 10 minutes)
- Clear browser cache
- Try incognito/private browsing mode
- Check GitHub Pages settings: Settings → Pages → Source should be `master` branch

---

## 🆘 Need Help?

If you get stuck, share the error message and I'll help you fix it!
