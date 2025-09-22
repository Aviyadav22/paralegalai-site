const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔐 Setting up HTTPS for localhost development...\n');

try {
  // Check if mkcert is installed
  try {
    execSync('mkcert -version', { stdio: 'ignore' });
  } catch (error) {
    console.log('❌ mkcert is not installed. Please install it first:');
    console.log('   Windows: choco install mkcert');
    console.log('   macOS: brew install mkcert');
    console.log('   Linux: https://github.com/FiloSottile/mkcert#installation\n');
    process.exit(1);
  }

  // Create certs directory
  const certsDir = path.join(__dirname, '..', 'certs');
  if (!fs.existsSync(certsDir)) {
    fs.mkdirSync(certsDir);
  }

  // Generate certificates
  console.log('📜 Generating SSL certificates...');
  execSync(`mkcert -install`, { stdio: 'inherit' });
  execSync(`mkcert -key-file ${path.join(certsDir, 'localhost-key.pem')} -cert-file ${path.join(certsDir, 'localhost.pem')} localhost 127.0.0.1 ::1`, { stdio: 'inherit' });

  console.log('\n✅ HTTPS setup complete!');
  console.log('🔗 You can now use these URLs in Google Cloud Console:');
  console.log('   Homepage: https://localhost:3000');
  console.log('   Privacy Policy: https://localhost:3000/privacy');
  console.log('   Terms of Service: https://localhost:3000/terms');
  console.log('\n🚀 To start the HTTPS server, run: npm run dev:https');

} catch (error) {
  console.error('❌ Error setting up HTTPS:', error.message);
  process.exit(1);
}
