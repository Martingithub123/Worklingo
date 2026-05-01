const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure .webp is treated as a static asset (supported by default in Expo SDK 50+,
// but explicit here to guarantee Metro includes it regardless of cache state)
if (!config.resolver.assetExts.includes('webp')) {
  config.resolver.assetExts.push('webp');
}

module.exports = config;
