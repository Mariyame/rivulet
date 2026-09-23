export { cn } from "cn"

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookie = parts.pop();
    if (cookie !== undefined) return decodeURIComponent(cookie.split(';')[0]);
  }
};
