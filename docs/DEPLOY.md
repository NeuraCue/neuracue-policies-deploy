# Deployment Guide: Next.js to Vercel with Namecheap

This guide walks you through deploying the NeuraCue website from GitHub Pages to Vercel with a custom domain managed by
Namecheap.

## Add Custom Domain in Vercel

### Configure Domain

1. In Vercel, go to your **`neuracue-policies`** project
2. Click **"Settings"** → **"Domains"**
3. Enter: `neuracue.com`
4. Click **"Add"**
5. Enter: `www.neuracue.com`
6. Click **"Add"**

### Note DNS Records

Vercel will display the DNS records you need. Keep this page open for reference:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Update Namecheap DNS

### Access Namecheap DNS Settings

1. Go to https://namecheap.com and log in
2. Click **"Domain List"** in the sidebar
3. Find `neuracue.com` and click **"Manage"**
4. Click the **"Advanced DNS"** tab

### Add New Vercel DNS Records

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

### Optional: Disable Parking Page

If Namecheap has a "Parking Page" enabled:

1. Look for **"Parking Page"** section in Namecheap
2. Turn it **OFF** if enabled
3. This prevents conflicts with Vercel

## Wait for DNS Propagation

### Check Propagation Status

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

### SSL Certificate

Once DNS is valid, Vercel automatically:

- ✅ Issues free SSL certificate (Let's Encrypt)
- ✅ Enables HTTPS
- ✅ Redirects HTTP → HTTPS
- ⏱️ This takes 1-5 minutes after DNS validation

### Test Security

Visit https://www.ssllabs.com/ssltest/

- Enter: `neuracue.com`
- Run SSL test
- Should receive **A or A+** rating

### Test Mobile

- Open site on mobile device
- Verify responsive design works
- Check live clock updates

## Future Deployments

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
