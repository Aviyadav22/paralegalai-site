const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Building for production...');

try {
  // Check if we're on Netlify (Debian environment)
  const isNetlify = process.env.NETLIFY === 'true' || process.env.CI === 'true';
  
  if (isNetlify) {
    console.log('🌐 Detected Netlify environment, generating Prisma client...');
    
    // Set environment variables for Prisma
    process.env.PRISMA_QUERY_ENGINE_LIBRARY = 'libquery_engine-debian-openssl-3.0.x.so.node';
    
    // Try to generate Prisma client
    try {
      execSync('npx prisma generate', { stdio: 'inherit' });
      console.log('✅ Prisma client generated successfully');
    } catch (error) {
      console.log('⚠️  Prisma generation failed, but continuing with build...');
      console.log('Error:', error.message);
    }
  } else {
    console.log('💻 Local environment detected, skipping Prisma generation');
  }
  
  // Run Next.js build
  console.log('🚀 Running Next.js build...');
  execSync('next build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
