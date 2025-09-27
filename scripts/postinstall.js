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
    
    try {
      execSync('npx prisma generate', { 
        stdio: 'inherit',
        env: {
          ...process.env,
          PRISMA_CLI_BINARY_TARGETS: 'debian-openssl-3.0.x'
        }
      });
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
