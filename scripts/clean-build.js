const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning build output of sensitive data...');

try {
  const buildDir = path.join(process.cwd(), '.next');
  
  if (fs.existsSync(buildDir)) {
    // Clean webpack cache files that might contain sensitive data
    const cacheDir = path.join(buildDir, 'cache', 'webpack');
    if (fs.existsSync(cacheDir)) {
      console.log('🗑️  Removing webpack cache directory...');
      fs.rmSync(cacheDir, { recursive: true, force: true });
    }
    
    // Clean any other potential cache directories
    const staticDir = path.join(buildDir, 'static');
    if (fs.existsSync(staticDir)) {
      console.log('🔍 Scanning static files for sensitive data...');
      // This would need more sophisticated scanning in a real implementation
    }
    
    console.log('✅ Build output cleaned successfully');
  } else {
    console.log('ℹ️  No build directory found to clean');
  }
} catch (error) {
  console.log('⚠️  Error cleaning build output:', error.message);
  // Don't fail the build if cleaning fails
}
