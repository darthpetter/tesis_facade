import { AuthenticationService } from "../_services";

export function AuthHeader() {
  // return authorization header with jwt access_token
  const currentUser = AuthenticationService.currentUserValue;
  if (currentUser && currentUser.access_token) {
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${currentUser.access_token}` };
  } else {
    return {};
  }
}
