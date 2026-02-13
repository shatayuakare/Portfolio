# Fix "Permission denied (publickey)" for GitHub

Your SSH key exists but **GitHub does not have your public key** (or it’s on a different account). Add it once:

## 1. Copy your public key

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the full line (starts with `ssh-ed25519` and ends with your email).

## 2. Add the key to GitHub

1. Open **https://github.com/settings/keys**
2. Click **"New SSH key"**
3. **Title:** e.g. `Portfolio - Parrot OS`
4. **Key type:** Authentication Key
5. **Key:** Paste the copied public key
6. Click **"Add SSH key"**

## 3. Test and push

```bash
ssh -T git@github.com
git push origin main
```

You should see: `Hi shatayuakare! You've successfully authenticated...`

---

**If the repo is under a different account:** log into that GitHub account and add this same public key there (same steps: Settings → SSH and GPG keys → New SSH key).
