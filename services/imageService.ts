export const imageService = {
  getOptimizedUrl(url: string, width = 600): string {
    if (url.includes('pexels.com')) {
      const base = url.split('?')[0];
      return `${base}?auto=compress&cs=tinysrgb&w=${width}`;
    }
    return url;
  },

  getThumbUrl(url: string): string {
    return this.getOptimizedUrl(url, 200);
  },

  getLargeUrl(url: string): string {
    return this.getOptimizedUrl(url, 800);
  },
};
