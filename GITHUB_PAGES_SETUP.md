# 🌐 GitHub Pages Setup Guide

Your website files are now in the root directory and ready for GitHub Pages deployment!

---

## ✅ What's Been Done

- ✅ Website files copied to root directory (index.html, styles.css, script.js)
- ✅ `.nojekyll` file added (disables Jekyll processing)
- ✅ Changes committed and pushed to GitHub
- ⏳ Ready to enable GitHub Pages

---

## 🚀 Enable GitHub Pages (5 Steps)

### Step 1: Go to Your Repository Settings

1. Visit: https://github.com/paulbryan/brand-voice
2. Click the **Settings** tab (top right)

### Step 2: Navigate to Pages

1. In the left sidebar, scroll down to **Pages** (under "Code and automation")
2. Click **Pages**

### Step 3: Configure Source

Under "Build and deployment":

1. **Source**: Select **Deploy from a branch**
2. **Branch**:
   - Select **main** from the dropdown
   - Select **/ (root)** from the folder dropdown
3. Click **Save**

### Step 4: Wait for Deployment

- GitHub will start building your site (takes 1-2 minutes)
- You'll see a message: "Your site is ready to be published"
- Refresh the page after a minute

### Step 5: Get Your URL

Once deployed, you'll see:
```
✅ Your site is live at https://paulbryan.github.io/brand-voice/
```

**That's it! Your website is now live on GitHub Pages!**

---

## 🌐 Your GitHub Pages URL

After setup completes, your BrandVoice website will be available at:

**https://paulbryan.github.io/brand-voice/**

Share this URL anywhere:
- LinkedIn posts
- Twitter
- LovHack Mini submission
- Your portfolio
- Email signatures

---

## 🎨 What's Deployed

Your live GitHub Pages site includes:
- ✅ Complete landing page with all sections
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive features and animations
- ✅ AgentApp launcher integration
- ✅ Professional styling

---

## 🔄 Updating Your Website

To update your live site in the future:

### Option 1: Update Root Files
```bash
# Edit index.html, styles.css, or script.js in the root
nano index.html

# Commit and push
git add .
git commit -m "Update website content"
git push
```

GitHub Pages will automatically rebuild (takes 1-2 minutes).

### Option 2: Update website/ Folder
```bash
# Edit files in website/ folder
nano website/index.html

# Copy to root
cp website/index.html .

# Commit and push
git add .
git commit -m "Update website"
git push
```

---

## 🎯 Custom Domain (Optional)

Want to use your own domain (e.g., `brandvoice.com`)?

### Step 1: Buy a Domain
- Namecheap, GoDaddy, Google Domains, etc.

### Step 2: Configure DNS
Add these DNS records:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: paulbryan.github.io
```

### Step 3: Configure GitHub Pages
1. Go to Settings → Pages
2. Under "Custom domain", enter: `brandvoice.com`
3. Click Save
4. Wait for DNS check (can take up to 24 hours)
5. Enable "Enforce HTTPS"

---

## 🐛 Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check Settings → Pages for error messages

### 404 Error?
- Ensure `index.html` is in the root directory
- Verify branch is set to `main` and folder to `/ (root)`
- Check that files were pushed: `git log --oneline`

### Styles not loading?
- Ensure `styles.css` and `script.js` are in root
- Check browser console for errors (F12)
- Verify file paths are relative (not absolute)

### Changes not showing?
- GitHub Pages cache can take 1-2 minutes
- Clear browser cache
- Try incognito/private browsing mode

---

## 📊 GitHub Pages Features

### Built-in Benefits
- ✅ **Free hosting** for public repositories
- ✅ **HTTPS** enabled by default
- ✅ **Fast CDN** (GitHub's global network)
- ✅ **Automatic rebuilds** on every push
- ✅ **Custom domain support**

### Limitations
- Static sites only (HTML/CSS/JS)
- No server-side code (PHP, Python, etc.)
- No database
- 1GB size limit
- 100GB bandwidth/month (soft limit)

Perfect for your BrandVoice landing page! ✅

---

## 🎬 After GitHub Pages is Live

### 1. Update Your Repository
Add the live URL to your README:

```markdown
## 🌐 Live Demo
- **Website**: https://paulbryan.github.io/brand-voice/
- **AgentApp**: TMXhceRjWM
```

### 2. Add to Repository About
1. Go to your repo homepage
2. Click the **⚙️** gear icon (top right, next to "About")
3. Add website: `https://paulbryan.github.io/brand-voice/`
4. Add description
5. Add topics: `ai`, `brand-voice`, `github-pages`
6. Save

### 3. Share!
- Post on LinkedIn with the live link
- Add to your LovHack Mini submission
- Include in your portfolio

---

## 📈 Analytics (Optional)

Track visitors to your GitHub Pages site:

### Google Analytics
Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### GitHub Traffic
Built-in traffic stats:
1. Go to your repository
2. Click **Insights** tab
3. Click **Traffic** (left sidebar)
4. See visitors, views, and referrers

---

## 🚀 Quick Reference

| Action | Command |
|--------|---------|
| Enable Pages | Settings → Pages → Deploy from branch `main` → `/root` |
| View Site | https://paulbryan.github.io/brand-voice/ |
| Update Site | Edit files → `git push` → Wait 1-2 min |
| Check Status | Settings → Pages |
| Custom Domain | Settings → Pages → Custom domain |

---

## ✅ Checklist

After enabling GitHub Pages:

- [ ] Visit Settings → Pages
- [ ] Set source to `main` branch, `/root` folder
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit your live URL
- [ ] Test on mobile and desktop
- [ ] Update README with live URL
- [ ] Add website to repository About section
- [ ] Share on social media
- [ ] (Optional) Set up custom domain
- [ ] (Optional) Add analytics

---

**Your BrandVoice website is ready to go live on GitHub Pages! 🎉**

Follow the steps above to enable it, and you'll have a professional, free, publicly accessible website in minutes.
