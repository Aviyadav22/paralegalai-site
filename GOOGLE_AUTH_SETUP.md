# Google Authentication Setup Guide

This guide will help you set up Google OAuth authentication for your Paralegal AI site.

## Prerequisites

1. A Google Cloud Console account
2. A PostgreSQL database (local or hosted)
3. Environment variables configured

## Step 1: Google Cloud Console Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
5. Copy your Client ID and Client Secret

## Step 2: Database Setup

1. Install PostgreSQL and create a database
2. Set up your database URL in environment variables
3. Run Prisma migrations:

```bash
npx prisma generate
npx prisma db push
```

## Step 3: Environment Variables

Create a `.env.local` file in your project root with:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/paralegalai"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (Resend) - existing
RESEND_API_KEY="your-resend-api-key"
RESEND_FROM="noreply@yourdomain.com"
CONTACT_RECEIVER="contact@yourdomain.com"
```

## Step 4: Generate NextAuth Secret

Generate a secure secret for NextAuth:

```bash
openssl rand -base64 32
```

Use this as your `NEXTAUTH_SECRET` value.

## Step 5: Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000`
3. Click "Sign In" in the header
4. Test the Google OAuth flow

## Features Included

- ✅ Google OAuth authentication
- ✅ User session management
- ✅ Protected routes (dashboard, profile, settings)
- ✅ User profile display in header
- ✅ Sign out functionality
- ✅ Mobile-responsive authentication UI
- ✅ Database integration with Prisma
- ✅ Secure session handling

## Protected Routes

The following routes require authentication:
- `/dashboard` - User dashboard
- `/profile` - User profile (to be created)
- `/settings` - User settings (to be created)
- `/demo` - Demo page (if you want to protect it)

## Security Features

- CSRF protection enabled
- Secure session cookies
- Database-backed sessions
- Role-based access control ready
- Environment variable protection

## Troubleshooting

1. **"Configuration" error**: Check your Google OAuth credentials
2. **"AccessDenied" error**: User denied permission or app not verified
3. **Database errors**: Ensure PostgreSQL is running and DATABASE_URL is correct
4. **Session issues**: Check NEXTAUTH_SECRET is set and consistent

## Production Deployment

1. Update Google OAuth redirect URIs for production domain
2. Set production environment variables
3. Ensure HTTPS is enabled
4. Update NEXTAUTH_URL to production domain
5. Run database migrations in production

## Next Steps

- Add user profile management
- Implement role-based permissions
- Add email verification
- Set up user preferences
- Add account deletion functionality
