export function getBlog(blogs, blogId) {
  if (!blogId || !Object.prototype.hasOwnProperty.call(blogs, blogId)) return null;
  return blogs[blogId];
}