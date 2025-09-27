const webpack = require('webpack');

module.exports = (config, { isServer }) => {
  if (!isServer) {
    // Replace all environment variables with empty strings in client bundle
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXTAUTH_URL': '""',
        'process.env.NEXTAUTH_SECRET': '""',
        'process.env.DATABASE_URL': '""',
        'process.env.GOOGLE_CLIENT_ID': '""',
        'process.env.GOOGLE_CLIENT_SECRET': '""',
        'process.env.RESEND_API_KEY': '""',
        'process.env.RESEND_FROM': '""',
        'process.env.CONTACT_RECEIVER': '""',
        'process.env.SHARED_JWT_SECRET': '""',
        'process.env.PRISMA_CLI_BINARY_TARGETS': '""',
      })
    );
  }
  return config;
};
