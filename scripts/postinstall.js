const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Running postinstall script...');

try {
  // Check if we're on Netlify or in CI
  const isNetlify = process.env.NETLIFY === 'true' || process.env.CI === 'true';
  const isVercel = process.env.VERCEL === 'true';
  
  if (isNetlify || isVercel) {
    console.log('🌐 Detected deployment environment, generating Prisma client...');
    
    // Set environment variables for Prisma
    if (isNetlify) {
      process.env.PRISMA_QUERY_ENGINE_LIBRARY = 'libquery_engine-debian-openssl-3.0.x.so.node';
    }
    
    try {
      execSync('npx prisma generate', { stdio: 'inherit' });
      console.log('✅ Prisma client generated successfully');
    } catch (error) {
      console.log('⚠️  Prisma generation failed, but continuing...');
      console.log('Error:', error.message);
    }
  } else {
    console.log('💻 Local environment detected, skipping Prisma generation');
  }
  
  console.log('✅ Postinstall completed!');
  
} catch (error) {
  console.error('❌ Postinstall failed:', error.message);
  // Don't exit with error code to avoid breaking npm install
}
