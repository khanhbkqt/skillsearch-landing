# 🚀 Deployment Guide

Quick reference for deploying the OpenClaw Skill Search landing page to production.

## Prerequisites

- [x] Vercel account (free tier works!)
- [x] Access to `thevibecoding.dev` DNS settings
- [x] GitHub account (optional, for Git-based deployments)

## Method 1: Vercel CLI (Fastest) ⚡

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
# Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email)
```

### Step 3: Deploy

```bash
cd /home/khanh/.openclaw/workspace/skillsearch-landing

# First deployment (preview)
vercel

# Production deployment
vercel --prod
```

### Step 4: Configure Custom Domain

```bash
# Add domain via CLI
vercel domains add skillsearch.thevibecoding.dev

# Or via dashboard: https://vercel.com/YOUR_USERNAME/skillsearch-landing/settings/domains
```

## Method 2: GitHub + Vercel Dashboard

### Step 1: Create GitHub Repository

```bash
cd /home/khanh/.openclaw/workspace/skillsearch-landing

# Initialize git
git init

# Add files
git add .
git commit -m "feat: initial commit - OpenClaw Skill Search landing page"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/skillsearch-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `skillsearch-landing` repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click "Deploy"

### Step 3: Add Custom Domain

1. Go to project settings: `https://vercel.com/YOUR_USERNAME/skillsearch-landing/settings/domains`
2. Click "Add Domain"
3. Enter: `skillsearch.thevibecoding.dev`
4. Click "Add"

## DNS Configuration

### For thevibecoding.dev (Your DNS Provider)

Add this CNAME record:

| Type  | Name        | Value                 | TTL  |
|-------|-------------|-----------------------|------|
| CNAME | skillsearch | cname.vercel-dns.com  | Auto |

### Verification

```bash
# Check DNS propagation
nslookup skillsearch.thevibecoding.dev

# Or use online tool
# Visit: https://dnschecker.org
# Enter: skillsearch.thevibecoding.dev
```

**Expected result:**
```
skillsearch.thevibecoding.dev   canonical name = cname.vercel-dns.com
```

### SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt:
- Usually takes 1-5 minutes after DNS propagation
- No manual configuration needed
- Auto-renewal every 90 days

## Post-Deployment Checklist

- [ ] Site loads at `https://skillsearch.thevibecoding.dev`
- [ ] SSL certificate is active (🔒 in browser)
- [ ] All sections render correctly
- [ ] Interactive demo works
- [ ] Mobile responsive
- [ ] Social share image loads (test on Twitter/LinkedIn)
- [ ] Performance score >90 (test at [PageSpeed Insights](https://pagespeed.web.dev/))

## Continuous Deployment

### GitHub Integration (Automatic)

Once connected, Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

```bash
# Make changes
git add .
git commit -m "feat: update hero section"
git push

# Vercel automatically builds and deploys!
```

### Manual CLI Deployments

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Deployment with specific name
vercel --prod --name=skillsearch-v2
```

## Rollback (If Needed)

### Via Dashboard
1. Go to deployments: `https://vercel.com/YOUR_USERNAME/skillsearch-landing/deployments`
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Via CLI
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel promote DEPLOYMENT_URL
```

## Environment Variables (Optional)

If you add analytics or API endpoints later:

```bash
# Via CLI
vercel env add NEXT_PUBLIC_GA_ID
# Enter value when prompted
# Select environments: Production, Preview, Development

# Via Dashboard
# Settings → Environment Variables
```

## Monitoring

### Analytics
- **Vercel Analytics**: Enable in project settings (free)
- **Speed Insights**: Enable in project settings (free)
- **Google Analytics**: Add `NEXT_PUBLIC_GA_ID` env var

### Performance
```bash
# Run Lighthouse locally
npm install -g lighthouse
lighthouse https://skillsearch.thevibecoding.dev --view

# Or use online tools:
# - https://pagespeed.web.dev/
# - https://gtmetrix.com/
```

## Troubleshooting

### Build Fails

**Error**: `Module not found`
```bash
# Ensure dependencies are installed
npm install

# Test build locally
npm run build
```

**Error**: `Tailwind styles missing`
```bash
# Verify Tailwind is installed
npm install @tailwindcss/postcss

# Check postcss.config.mjs exists
cat postcss.config.mjs
```

### Domain Not Working

**DNS not propagating**
- Wait 30-60 minutes (can take up to 24 hours)
- Use `dig skillsearch.thevibecoding.dev` to check
- Try incognito browser / clear DNS cache

**Wrong DNS configuration**
- CNAME must point to `cname.vercel-dns.com` (not IP address)
- Remove any conflicting A records for `skillsearch` subdomain

**SSL Certificate Pending**
- Vercel shows "Invalid Configuration" → Wait for DNS to propagate
- Once DNS resolves, Vercel auto-provisions SSL in 1-5 minutes

### Site Not Updating

**Changes not showing**
```bash
# Clear Vercel cache
vercel build --force

# Hard refresh in browser
# Mac: Cmd + Shift + R
# Windows/Linux: Ctrl + Shift + R
```

## Advanced Configuration

### Custom Build Settings

Edit `vercel.json` to customize:

```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Multiple Environments

```bash
# Production
git push origin main

# Staging
git push origin staging

# Development
git push origin dev
```

Each branch gets its own preview URL!

## Quick Commands Reference

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs

# Open project in browser
vercel open

# Remove project
vercel remove skillsearch-landing
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Status**: https://www.vercel-status.com/
- **Community**: https://github.com/vercel/vercel/discussions

---

**Need help?** Open an issue on the GitHub repository or reach out in the OpenClaw Discord!
