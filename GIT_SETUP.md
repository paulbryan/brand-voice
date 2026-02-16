# 🚀 Git Setup Guide for BrandVoice

Your BrandVoice project is now initialized as a Git repository with your first commit!

---

## ✅ What's Done

- ✅ Git repository initialized
- ✅ All project files organized in proper structure
- ✅ `.gitignore` file configured
- ✅ Initial commit created with all files
- ✅ Ready to push to GitHub/GitLab/etc.

---

## 📊 Current Status

```
Commit: 7e0ce72
Branch: master
Files: 10 files, 2,892 lines of code
Status: Ready to push to remote
```

---

## 🌐 Push to GitHub (Recommended)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `brandvoice`
4. Description: `AI-Powered Brand Voice Consistency Tool`
5. Keep it **Public** (or Private if preferred)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

### Step 2: Connect and Push

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/brandvoice.git

# Rename branch to 'main' (GitHub default)
git branch -M main

# Push your code
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 3: Verify

Visit `https://github.com/YOUR_USERNAME/brandvoice` to see your code live!

---

## 🦊 Alternative: Push to GitLab

```bash
# Create new project on gitlab.com
# Then run:

git remote add origin https://gitlab.com/YOUR_USERNAME/brandvoice.git
git branch -M main
git push -u origin main
```

---

## 📦 Alternative: Push to Bitbucket

```bash
# Create new repository on bitbucket.org
# Then run:

git remote add origin https://bitbucket.org/YOUR_USERNAME/brandvoice.git
git branch -M main
git push -u origin main
```

---

## 🔐 Using SSH Instead of HTTPS

If you prefer SSH (faster, no password needed after setup):

### GitHub SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/brandvoice.git
git push -u origin main
```

### GitLab SSH:
```bash
git remote add origin git@gitlab.com:YOUR_USERNAME/brandvoice.git
git push -u origin main
```

**Note**: You'll need to [set up SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) first.

---

## 📝 Making Future Changes

After your initial push, here's your workflow:

### 1. Make Changes
Edit any files (website, templates, docs, etc.)

### 2. Stage Changes
```bash
# Stage specific files
git add website/index.html

# Or stage all changes
git add .
```

### 3. Commit Changes
```bash
git commit -m "Update hero section copy"
```

### 4. Push to GitHub
```bash
git push
```

---

## 🌿 Common Git Commands

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### View Changes
```bash
# See what changed (unstaged)
git diff

# See what's staged
git diff --staged
```

### Create a New Branch
```bash
git checkout -b feature/new-feature-name
```

### Switch Branches
```bash
git checkout main
git checkout feature/new-feature-name
```

### Merge a Branch
```bash
git checkout main
git merge feature/new-feature-name
```

---

## 📂 Project Structure in Git

```
brandvoice/
├── .git/                    # Git metadata (don't touch!)
├── .gitignore               # Files to ignore
├── README.md                # Main project README
├── GIT_SETUP.md            # This file
│
├── website/                 # Marketing website
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── templates/               # AgentApp templates
│   ├── brandvoice_scorecard_template.html
│   └── brandvoice_transformation_template.html
│
└── docs/                    # Documentation
    ├── brandvoice_quickstart.md
    └── brandvoice_example_usage.md
```

---

## 🏷️ Creating Releases (Optional)

When you're ready to tag a release:

```bash
# Tag current commit as v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0 - LovHack Mini Launch"

# Push tag to GitHub
git push origin v1.0.0

# Or push all tags
git push --tags
```

Then create a GitHub Release:
1. Go to your repo → **Releases** → **Create a new release**
2. Choose tag `v1.0.0`
3. Add release notes (features, fixes, etc.)
4. Attach any binaries/assets if needed
5. Click **Publish release**

---

## 🤝 Collaborating with Others

### Clone the Repository
Share this with collaborators:
```bash
git clone https://github.com/YOUR_USERNAME/brandvoice.git
cd brandvoice
```

### Pull Latest Changes
Before making changes:
```bash
git pull
```

### Handle Merge Conflicts
If you and someone else edited the same file:
1. Git will mark conflicts in files
2. Open conflicted files and resolve
3. Stage resolved files: `git add .`
4. Commit: `git commit -m "Resolve merge conflicts"`
5. Push: `git push`

---

## 🔄 Sync Fork (If Someone Forks Your Repo)

If someone forks your repo and you want their changes:

```bash
# Add their fork as a remote
git remote add contributor https://github.com/THEIR_USERNAME/brandvoice.git

# Fetch their changes
git fetch contributor

# Merge their branch
git merge contributor/main

# Push merged changes
git push
```

---

## 🛡️ Protecting Your Main Branch

On GitHub, you can protect the `main` branch:

1. Go to repo **Settings** → **Branches**
2. Add rule for `main`
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Require linear history
4. Save changes

Now all changes must go through Pull Requests!

---

## 📌 Best Practices

### Commit Messages
✅ **Good:**
- `Add voice profile management UI`
- `Fix transformation template styling bug`
- `Update README with deployment instructions`

❌ **Bad:**
- `fix stuff`
- `updates`
- `changes`

### Commit Frequency
- Commit often (every logical change)
- Don't commit broken code to `main`
- Use feature branches for big changes

### What NOT to Commit
- Secrets/API keys (use `.env` files, add to `.gitignore`)
- Large binary files (images should be optimized)
- OS-specific files (already in `.gitignore`)
- Temporary files

---

## 🚨 Undo Mistakes

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)
```bash
git reset --hard HEAD~1
```

### Undo Changes to a File
```bash
git checkout -- filename.html
```

### Amend Last Commit Message
```bash
git commit --amend -m "New commit message"
```

---

## 📧 Need Help?

- **Git Documentation**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Guides**: [guides.github.com](https://guides.github.com)
- **Common Issues**: Check [oh shit, git!](https://ohshitgit.com)

---

## ✅ Quick Checklist

Before pushing to GitHub:

- [ ] Remove any sensitive data (API keys, passwords)
- [ ] Test that website loads correctly
- [ ] Verify all links in README work
- [ ] Check that `.gitignore` excludes temp files
- [ ] Ensure commit messages are descriptive
- [ ] Confirm repository is Public or Private as intended

---

## 🎉 You're Ready!

Your BrandVoice project is set up with Git and ready to share with the world.

**Next Step**: Follow "Push to GitHub" section above to get your code online!

---

**Happy coding! 🚀**
