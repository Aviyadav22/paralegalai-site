# Production Setup Guide for paralegalai.xyz

## 🚀 Google OAuth Configuration for Production

### Step 1: Update Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Find your OAuth 2.0 Client ID
4. Update **Authorized redirect URIs** to include:
   - `https://paralegalai.xyz/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (keep for development)

### Step 2: Environment Variables for Production

Update your production environment variables:

```env
# Database (keep your existing Neon database)
DATABASE_URL="postgresql://username:password@your-database-host:5432/your-database"

# NextAuth (IMPORTANT: Update for production)
NEXTAUTH_URL="https://paralegalai.xyz"
NEXTAUTH_SECRET="your-secure-secret-key-here"

# Google OAuth (replace with your actual credentials)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (Resend) - update for production
RESEND_API_KEY="your-resend-api-key"
RESEND_FROM="noreply@paralegalai.xyz"
CONTACT_RECEIVER="contact@paralegalai.xyz"
```

### Step 3: Domain Configuration

Make sure your domain `paralegalai.xyz` is properly configured:
- DNS records point to your hosting provider
- SSL certificate is installed and working
- Domain is accessible via HTTPS

### Step 4: Deployment Checklist

- [ ] Google OAuth redirect URI updated
- [ ] Environment variables set for production
- [ ] Domain accessible via HTTPS
- [ ] Database connection working
- [ ] All pages loading correctly
- [ ] Authentication flow working

### Step 5: Test Production Authentication

1. Visit `https://paralegalai.xyz/login`
2. Click "Continue with Google"
3. Complete OAuth flow
4. Verify redirect to home page
5. Check that user profile appears in header

## 🔧 Additional Production Considerations

### Security
- Ensure HTTPS is enforced
- Set secure cookie flags
- Enable HSTS headers
- Regular security updates

### Performance
- Enable CDN for static assets
- Optimize images
- Enable compression
- Monitor Core Web Vitals

### Monitoring
- Set up error tracking (Sentry)
- Monitor database performance
- Track authentication success rates
- Set up uptime monitoring

## 🐛 Troubleshooting

### Common Issues

1. **"redirect_uri_mismatch"**
   - Check Google Console redirect URIs
   - Ensure exact match including protocol

2. **"Configuration" error**
   - Verify all environment variables are set
   - Check NEXTAUTH_URL matches your domain

3. **Session not persisting**
   - Ensure HTTPS is working
   - Check cookie settings
   - Verify NEXTAUTH_SECRET is consistent

### Support
If you encounter issues, check:
- Browser console for errors
- Server logs for authentication flow
- Google Console for OAuth configuration
- Database connection status
