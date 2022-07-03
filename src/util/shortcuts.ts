export function staticMedia(url:string) {
  const urlPrefix = process.env.NEXT_PUBLIC_URL_PREFIX || '';
  return urlPrefix + url;
}
