# Vercel Deployment Guide

## ✅ Completed Steps

### 1. GitHub Repository - ✓ DONE
- **Repository URL**: https://github.com/khanhbkqt/skillsearch-landing
- **Status**: Code pushed successfully
- **Visibility**: Public
- **Description**: "Landing page for OpenClaw Skill Search Plugin - Semantic search for 6K+ skills"

### 2. Build Verification - ✓ DONE
- Production build tested and successful
- No TypeScript errors
- All pages generated statically
- Ready for deployment

## 🚀 Next Steps: Deploy to Vercel

Since Vercel CLI requires authentication, please follow these steps to deploy via Vercel Dashboard:

### Option A: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with your GitHub account

2. **Import GitHub Repository**
   - Click "Import Project" or "Add New..."
   - Select "Import Git Repository"
   - Search for `khanhbkqt/skillsearch-landing`
   - Click "Import"

3. **Configure Project**
   - **Project Name**: `skillsearch-landing` (auto-detected)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
   
   ⚠️ **Do NOT override settings** - Vercel will auto-detect everything correctly from `vercel.json`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build & deployment
   - You'll get a URL like: `https://skillsearch-landing.vercel.app` or `https://skillsearch-landing-<random>.vercel.app`

### Option B: Vercel CLI (If you have token)

If you have a Vercel token, you can deploy via CLI:

```bash
# Set token (get from https://vercel.com/account/tokens)
export VERCEL_TOKEN="your_token_here"

# Deploy
cd ~/.openclaw/workspace/skillsearch-landing
vercel --prod --yes
```

## 🌐 Custom Domain Configuration

After deployment, add custom subdomain `skillsearch.thevibecoding.dev`:

### Step 1: Add Domain in Vercel

**Via Dashboard:**
1. Go to your project → Settings → Domains
2. Click "Add"
3. Enter: `skillsearch.thevibecoding.dev`
4. Click "Add"

**Via CLI (if authenticated):**
```bash
vercel domains add skillsearch.thevibecoding.dev --project=skillsearch-landing
```

### Step 2: Get DNS Configuration

Vercel will show you the DNS records needed. It will look like:

```
Type: CNAME
Name: skillsearch
Value: cname.vercel-dns.com
```

**OR it might provide a specific value like:**

```
Type: CNAME
Name: skillsearch
Value: cname-china.vercel-dns.com
```

**OR:**

```
Type: A
Name: skillsearch
Value: 76.76.21.21
```

### Step 3: Update DNS Records

Go to your DNS provider for `thevibecoding.dev` and add the record:

**If using Cloudflare:**
1. Go to Cloudflare Dashboard
2. Select `thevibecoding.dev` domain
3. Navigate to DNS → Records
4. Click "Add record"
5. Type: `CNAME`
6. Name: `skillsearch`
7. Target: (use value from Vercel, typically `cname.vercel-dns.com`)
8. Proxy status: DNS only (gray cloud) - **Important!**
9. TTL: Auto
10. Click "Save"

**If using other DNS providers:**
- Similar steps: add CNAME record
- Name: `skillsearch`
- Value: (from Vercel)
- TTL: 3600 or Auto

### Step 4: Verify Domain

After adding DNS record:
1. Wait 5-10 minutes for DNS propagation
2. Vercel will automatically verify the domain
3. SSL certificate will be auto-provisioned (takes 1-2 minutes)
4. Your site will be live at: https://skillsearch.thevibecoding.dev

## 🔍 Verification Steps

Once deployed, verify:

- [ ] Site loads at Vercel URL (e.g., `https://skillsearch-landing.vercel.app`)
- [ ] All sections render correctly
- [ ] Animations work smoothly
- [ ] Interactive demo functions properly
- [ ] Mobile responsive
- [ ] Custom domain configured (if DNS updated)
- [ ] HTTPS certificate active
- [ ] OG image shows in social shares

## 📊 Project URLs

- **GitHub Repo**: https://github.com/khanhbkqt/skillsearch-landing
- **Vercel Project**: (will be available after import)
- **Production URL**: (will be available after deployment)
- **Custom Domain**: skillsearch.thevibecoding.dev (pending DNS)

## 🎯 Expected DNS Configuration

**Exact CNAME Record to Add:**

```
Type: CNAME
Name: skillsearch
Value: cname.vercel-dns.com
TTL: Auto (or 3600)
Proxy: DNS only (if using Cloudflare)
```

**This creates:**
- Subdomain: skillsearch.thevibecoding.dev
- Points to: Vercel's infrastructure
- SSL: Auto-provisioned by Vercel

## ⚠️ Important Notes

1. **DNS Propagation**: Can take 5 minutes to 48 hours (usually 5-15 minutes)
2. **Cloudflare Users**: Turn off proxy (gray cloud) to allow Vercel SSL
3. **SSL Certificate**: Vercel handles this automatically once DNS is verified
4. **Build Time**: Initial deployment takes ~2-3 minutes
5. **Auto-deploys**: Future pushes to `main` branch auto-deploy

## 🐛 Troubleshooting

**If domain verification fails:**
- Check DNS record is correct (CNAME to `cname.vercel-dns.com`)
- Ensure no conflicting A records exist
- Wait longer (DNS can be slow)
- Use `dig skillsearch.thevibecoding.dev` to verify DNS

**If build fails:**
- Check Vercel build logs
- Ensure Node.js version is 18+ (set in project settings)
- Verify `package.json` dependencies

**If custom domain shows 404:**
- Domain might not be verified yet
- Check Vercel dashboard for domain status
- Ensure DNS is propagated: `nslookup skillsearch.thevibecoding.dev`

## 📞 Support

If you encounter issues:
- Vercel Support: https://vercel.com/support
- GitHub Issues: https://github.com/khanhbkqt/skillsearch-landing/issues
- Vercel Logs: Available in dashboard under "Deployments"

---

**Status**: Repository created ✓ | Build verified ✓ | Awaiting Vercel deployment
