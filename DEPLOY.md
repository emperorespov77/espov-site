# 🚀 Deployment Guide — espov.com

Your site is ready. Follow these steps to go live at **espov.com** in under 10 minutes.

---

## Step 1 — Create a GitHub Repository

1. Go to https://github.com/new
2. Name it exactly: `espov-site` (or any name you like)
3. Set it to **Public**
4. Do NOT check "Add README" — leave it empty
5. Click **Create repository**

---

## Step 2 — Upload Your Files

**Option A — GitHub website (easiest, no terminal needed):**

1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop ALL the files from this folder:
   - `index.html`
   - `CNAME`
   - `css/` folder
   - `js/` folder
   - `.github/` folder
3. Scroll down, click **Commit changes**

**Option B — Terminal (if you have Git installed):**

```bash
cd espov-site
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/emperorespov77/espov-site.git
git push -u origin main
```

---

## Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **GitHub Actions**
3. The workflow will auto-run and deploy your site

Your site will be live at: `https://emperorespov77.github.io/espov-site`

---

## Step 4 — Connect espov.com (Custom Domain)

### In your domain registrar (where you bought espov.com):

Add these **DNS records**:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | emperorespov77.github.io |

> DNS changes can take 10 minutes to 48 hours to propagate.

### In GitHub:

1. Repo → **Settings** → **Pages**
2. Under **Custom domain**, type: `espov.com`
3. Click **Save**
4. Check **"Enforce HTTPS"** (free SSL certificate — wait ~15 min after DNS propagates)

---

## Step 5 — You're Live! ✅

Visit **https://espov.com** — your portfolio is live.

---

## Updating Your Site Later

Whenever you want to update content:

1. Edit `index.html`, `css/style.css`, or `js/main.js`
2. Upload the changed files to GitHub (drag & drop or `git push`)
3. GitHub Actions automatically redeploys — live in ~60 seconds

---

## File Structure

```
espov-site/
├── index.html              ← main page
├── css/
│   └── style.css           ← all styling
├── js/
│   └── main.js             ← interactivity
├── CNAME                   ← tells GitHub your domain
├── .github/
│   └── workflows/
│       └── deploy.yml      ← auto-deploy on every push
├── .gitignore
└── DEPLOY.md               ← this file
```
