import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = window.localStorage.getItem('loggedin');

  if (!isLoggedIn) {
    throw redirect('/login?message=You must login first!');
  }
}
