# Deployment Guide: Next.js to Vercel with Namecheap

This guide walks you through deploying the NeuraCue website from GitHub Pages to Vercel with a custom domain managed by
Namecheap.

---

## Prerequisites

- [x] Next.js migration completed
- [x] Node.js installed locally (for testing)
- [ ] GitHub account with `neuracue-policies` repository
- [ ] Namecheap account managing `neuracue.com`
- [ ] Vercel account (free - will create during deployment)

---

## Step 1: Deploy to Vercel

Before touching DNS, get your site deployed on Vercel.

### 1.1 Sign Up for Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub repositories

### 1.2 Import Your Repository

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find and select **`neuracue-policies`** from the repository list
3. Vercel will auto-detect Next.js configuration ✅
4. **Do not change any settings** - defaults are correct
5. Click **"Deploy"**
6. Wait 1-2 minutes for the build to complete

### 1.3 Test Your Deployment

You'll receive a temporary Vercel URL like:

```
https://neuracue-policies.vercel.app
```

**Visit this URL** and verify:

- ✅ Home page loads
- ✅ `/privacy` page works
- ✅ `/terms` page works
- ✅ Live clock displays Pacific time
- ✅ All styling looks correct

---

## Step 2: Add Custom Domain in Vercel

### 2.1 Configure Domain

1. In Vercel, go to your **`neuracue-policies`** project
2. Click **"Settings"** → **"Domains"**
3. Enter: `neuracue.com`
4. Click **"Add"**
5. Enter: `www.neuracue.com`
6. Click **"Add"**

### 2.2 Note DNS Records

Vercel will display the DNS records you need. Keep this page open for reference:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Step 3: Update Namecheap DNS

### 3.1 Access Namecheap DNS Settings

1. Go to https://namecheap.com and log in
2. Click **"Domain List"** in the sidebar
3. Find `neuracue.com` and click **"Manage"**
4. Click the **"Advanced DNS"** tab

### 3.2 Remove Old GitHub Pages Records

You'll see existing DNS records pointing to GitHub Pages. **Delete these records:**

**Records to DELETE:**

- A records pointing to:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
- CNAME record for `www` pointing to `<username>.github.io`
- CNAME record for `@` if present

**How to delete:**

- Click the trash/delete icon next to each record
- Confirm deletion

### 3.3 Add New Vercel DNS Records

Click **"Add New Record"** for each of the following:

**Record 1: Root Domain A Record**

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic (or 1 min)
```

**Record 2: WWW Subdomain CNAME**

```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic (or 1 min)
```

### 3.4 Optional: Disable Parking Page

If Namecheap has a "Parking Page" enabled:

1. Look for **"Parking Page"** section in Namecheap
2. Turn it **OFF** if enabled
3. This prevents conflicts with Vercel

### 3.5 Save Changes

- Click **"Save All Changes"** in Namecheap
- Confirm when prompted

---

## Step 4: Wait for DNS Propagation

### 4.1 Propagation Time

- **Typical time:** 5-60 minutes
- **Average time:** 15-30 minutes
- **Maximum time:** 24-48 hours (rare)

### 4.2 Check Propagation Status

**In Vercel:**

1. Go to Settings → Domains
2. Refresh the page periodically
3. Wait for status to change to: ✅ **"Valid Configuration"**

**Using DNS Checker:**

1. Visit https://dnschecker.org
2. Enter: `neuracue.com`
3. Select "A" record type
4. Click "Search"
5. Wait until most locations show `76.76.21.21`

### 4.3 SSL Certificate

Once DNS is valid, Vercel automatically:

- ✅ Issues free SSL certificate (Let's Encrypt)
- ✅ Enables HTTPS
- ✅ Redirects HTTP → HTTPS
- ⏱️ This takes 1-5 minutes after DNS validation

---

## Step 5: Disable GitHub Pages

Now that Vercel is handling your domain, disable GitHub Pages:

1. Go to https://github.com/[your-username]/neuracue-policies
2. Click **"Settings"**
3. Scroll to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"None"**
5. Click **"Save"**

This prevents GitHub Pages from interfering with your custom domain.

---

## Step 6: Verify Deployment

### 6.1 Test All URLs

Once DNS has propagated, verify these URLs work:

**Primary Domain:**

- ✅ https://neuracue.com
- ✅ http://neuracue.com (should redirect to HTTPS)

**WWW Subdomain:**

- ✅ https://www.neuracue.com
- ✅ http://www.neuracue.com (should redirect to HTTPS)

**All Pages:**

- ✅ https://neuracue.com/
- ✅ https://neuracue.com/privacy
- ✅ https://neuracue.com/terms

**Old URLs (redirects):**

- ✅ https://neuracue.com/privacy.html → redirects to `/privacy`
- ✅ https://neuracue.com/terms.html → redirects to `/terms`

### 6.2 Test Security

Visit https://www.ssllabs.com/ssltest/

- Enter: `neuracue.com`
- Run SSL test
- Should receive **A or A+** rating

### 6.3 Test Mobile

- Open site on mobile device
- Verify responsive design works
- Check live clock updates

---

## Step 7: Future Deployments

### Automatic Deployments

Every time you push to the `main` branch, Vercel automatically:

1. Detects the push
2. Builds your Next.js app
3. Runs tests (if configured)
4. Deploys to production
5. Updates https://neuracue.com

**Workflow:**

```bash
# Make changes locally
git add .
git commit -m "Update privacy policy"
git push origin main

# Vercel deploys automatically in 1-2 minutes
```

### Preview Deployments

Every branch and pull request gets a unique preview URL:

- Branch: `https://neuracue-policies-git-[branch-name]-[team].vercel.app`
- PR: Vercel comments on GitHub PR with preview link

### Manual Deployment via CLI (Optional)

Install Vercel CLI for manual deployments:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

---

## Troubleshooting

### Domain Not Working After 1 Hour

**Check DNS records in Namecheap:**

1. Verify A record: `@` → `76.76.21.21`
2. Verify CNAME record: `www` → `cname.vercel-dns.com`
3. Ensure no conflicting records exist

**Check DNS propagation:**

- Visit https://dnschecker.org
- Search for `neuracue.com`
- Verify most locations show correct IP

**Check Vercel status:**

- Go to Vercel Settings → Domains
- Look for error messages
- Click "Refresh" button

### SSL Certificate Not Issued

**Reasons:**

- DNS not fully propagated yet
- CAA records blocking Let's Encrypt (rare)

**Solutions:**

1. Wait 10-15 more minutes
2. Click "Refresh" in Vercel Domains page
3. Check for CAA DNS records in Namecheap (should be none)

### "Invalid Configuration" in Vercel

**Cause:** DNS records incorrect or not propagated

**Fix:**

1. Double-check DNS records in Namecheap match exactly
2. Wait for full DNS propagation
3. Remove any extra/conflicting DNS records

### Old GitHub Pages Site Still Showing

**Cause:** Browser cache or DNS cache

**Fix:**

1. Clear browser cache
2. Try incognito/private window
3. Try different browser or device
4. Flush DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns
   ```

### Build Fails on Vercel

**Check build logs:**

1. Go to Vercel project
2. Click on failed deployment
3. View build logs
4. Look for error messages

**Common issues:**

- Missing dependencies in `package.json`
- TypeScript errors
- Environment variables not set

**Fix:**

```bash
# Test build locally first
npm run build

# If it works locally, check Vercel Node.js version
# Vercel uses Node 18 by default - matches our config
```

### 404 on Routes

**Symptom:** `/privacy` or `/terms` shows 404

**Cause:** Next.js export issue or wrong page structure

**Fix:**

1. Verify file structure:
   ```
   src/app/privacy/page.tsx
   src/app/terms/page.tsx
   ```
2. Check `next.config.mjs` has `output: 'export'`
3. Rebuild and redeploy

---

## Rollback to GitHub Pages (Emergency)

If you need to quickly revert to the old setup:

### 1. Re-enable GitHub Pages

1. Go to GitHub repo Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/ (root)`
4. Save

### 2. Restore Namecheap DNS

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
Value: [your-username].github.io
```

### 3. Keep Vercel Running

You can keep both running temporarily:

- Vercel: `neuracue-policies.vercel.app`
- GitHub Pages: `neuracue.com`

---

## Production Checklist

Before going live, verify:

- [ ] Next.js site tested locally (`npm run dev`)
- [ ] Static build works (`npm run build`)
- [ ] Deployed to Vercel successfully
- [ ] Vercel preview URL works (`*.vercel.app`)
- [ ] Custom domain added in Vercel
- [ ] DNS records updated in Namecheap
- [ ] DNS fully propagated (dnschecker.org)
- [ ] GitHub Pages disabled
- [ ] HTTPS certificate issued
- [ ] All pages load correctly
- [ ] Old URLs redirect properly
- [ ] Mobile responsive design works
- [ ] Live clock displays correctly
- [ ] SEO metadata correct (view page source)
- [ ] SSL test passes (ssllabs.com)

---

## Support Resources

**Vercel Documentation:**

- https://vercel.com/docs
- https://vercel.com/docs/projects/domains

**Namecheap DNS Help:**

- https://www.namecheap.com/support/knowledgebase/subcategory/2237/dns-setup/

**Next.js Documentation:**

- https://nextjs.org/docs

**Community Support:**

- Vercel Discord: https://vercel.com/discord
- Next.js GitHub Discussions: https://github.com/vercel/next.js/discussions

---

## Post-Deployment

### Monitor Performance

**Vercel Analytics (Free):**

1. Enable in Vercel dashboard
2. Track page views, performance metrics
3. View real user monitoring data

**Google Search Console:**

1. Verify ownership of `neuracue.com`
2. Submit sitemap: `https://neuracue.com/sitemap.xml`
3. Monitor indexing status

### Update Documentation

- [ ] Update README.md with new deployment info
- [ ] Update CLAUDE.md if needed
- [ ] Document any custom configurations
- [ ] Update team on new deployment process

---

**Deployment complete! 🎉**

Your Next.js app is now live at https://neuracue.com with automatic HTTPS!