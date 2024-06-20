export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    // Use optional chaining and nullish coalescing to handle potential undefined
    const cookieValue = parts.pop()?.split(";").shift() ?? "";
    return cookieValue;
  }
  return undefined;
}

export const deleteCookie = (name = "Acharya_web_token") => {
  // Set the cookie's value to an empty string and its expiration date to a time in the past
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Alert the user that the cookie has been deleted
};
