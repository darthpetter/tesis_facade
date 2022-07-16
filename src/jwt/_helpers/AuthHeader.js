import { AuthenticationService } from "../_services";

export function AuthHeader() {
  // return authorization header with jwt access_token
  const currentUser = AuthenticationService.currentUserValue;
  if (currentUser && currentUser.user.token) {
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${currentUser.user.token}` };
  } else {
    return {};
  }
}
