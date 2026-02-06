# 🚀 Deploy to GitHub Using GitHub Desktop - Simple Steps

## ✅ Step-by-Step Instructions

### Step 1: Download This Project
1. In Figma Make, click the **"Export"** or **"Download"** button (usually top right)
2. Save the ZIP file to your Desktop
3. Extract/Unzip the file - you'll get a folder named something like `amina-portfolio-react`

### Step 2: Build Your Project
1. Open **Terminal** (Mac) or **Command Prompt** (Windows)
2. Type these commands one by one:

```bash
cd ~/Desktop/amina-portfolio-react
npm install
npm run build
```

3. Wait for it to finish - you'll see a new `dist` folder appear

### Step 3: Open Your GitHub Repo in GitHub Desktop
1. Open **GitHub Desktop** app
2. Click **"File"** → **"Add Local Repository"** (or "Clone Repository" if you don't have it locally)
   - If you need to clone: Select `aminahamdani/amina-portfolio` and choose where to save it
3. You should now see your `amina-portfolio` repository in GitHub Desktop

### Step 4: Copy the Built Files
1. Open **Finder** (Mac) or **File Explorer** (Windows)
2. Navigate to: `~/Desktop/amina-portfolio-react/dist/`
3. Select **ALL files and folders** inside the `dist` folder (Cmd+A or Ctrl+A)
4. Copy them (Cmd+C or Ctrl+C)
5. Navigate to your `amina-portfolio` folder (wherever you cloned it)
6. **Delete all old files first** (except .git folder if you see it)
7. Paste the new files (Cmd+V or Ctrl+V)

### Step 5: Commit and Push in GitHub Desktop
1. Go back to **GitHub Desktop**
2. You'll see a list of changes on the left side
3. At the bottom left, you'll see:
   - **Summary** field - Type: `Update portfolio with React version and working contact form`
   - **Description** field (optional) - Add details if you want
4. Click the blue **"Commit to main"** button
5. Click the **"Push origin"** button at the top

### Step 6: Wait and Check
1. Wait 2-5 minutes for GitHub Pages to update
2. Visit: **https://aminahamdani.github.io/amina-portfolio/**
3. Your new portfolio is live! 🎉

---

## 🎯 Quick Checklist

- [ ] Downloaded project from Figma Make
- [ ] Extracted ZIP file
- [ ] Ran `npm install` and `npm run build`
- [ ] Opened GitHub Desktop
- [ ] Copied files from `dist` folder to your repository folder
- [ ] Committed changes in GitHub Desktop
- [ ] Pushed to GitHub
- [ ] Waited 2-5 minutes
- [ ] Checked website is live

---

## 💡 Tips

**Can't find the dist folder?**
- Make sure `npm run build` completed successfully
- Look in the extracted project folder

**GitHub Desktop shows too many changes?**
- That's normal! You're replacing the old HTML site with a new React site

**Website still shows old version?**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a bit longer (sometimes takes up to 10 minutes)

---

## ❓ Need Help?

If you get stuck at any step, let me know which step number and I'll help you troubleshoot!
