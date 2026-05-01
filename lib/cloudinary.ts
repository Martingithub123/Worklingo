const CLOUD_NAME = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Builds a Cloudinary URL for a vocabulary image.
 * localImage is like 'agricultura/gardener/tools/blower' — we use only the basename.
 * All vocab images live flat in the 'vocabulary' folder on Cloudinary as .webp.
 */
export function getVocabImageUrl(localImage: string): string | null {
  if (!CLOUD_NAME || !localImage) return null;
  const filename = localImage.split('/').pop();
  if (!filename) return null;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/vocabulary/${filename}.webp`;
}
