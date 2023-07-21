import React, { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { http } from './http.service';
import { redirect, NavigateFunction } from "react-router-dom"

const userSubject = new BehaviorSubject(null);



export const authService = {
  register,
  login,
  logout,
  useUserAuth,
 // loginWithApple,
  refreshToken,
  loginWithGoogleToken,
  useRedirectLoggedIn,
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  }
}


export function register(params: any) {
  return http.post('/auth/register', params);
}

export function login({ email, password }: { email: string; password: string }): Promise<any> {
  return http.post('/auth/login/email', { email, password }).then((response) => {
    const { user, tokens } = response.data;
    const { token, expires } = tokens.access;
    userSubject.next({ ...user, token })
    startRefreshTokenTimer(expires);
    return user;
  })
}



export function logout() {
  http
    .post(`/auth/logout`, {})
    .finally(() => {
      stopRefreshTokenTimer();
      userSubject.next(null);
      redirect('/login')
      // window.location.replace('/login');
    })
    // .catch(() => window.location.replace('/login'));
    .catch(() => redirect('/login'));
}


export function useRedirectLoggedIn(navigate: NavigateFunction): { user: any; setUser: React.Dispatch<React.SetStateAction<any>> } {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { user, setUser };
}

export function loginWithGoogleToken(accessToken: string) {
  return http
    // .post('/auth/login/google', { token: googleData.idToken })
    .post('/auth/login/google', { token: accessToken })
    .then(response => {
      const { user, tokens } = response.data;
      const { token, expires } = tokens.access;
      //setRefreshToken(tokens.refresh.token);
      userSubject.next({ ...user, token });
      startRefreshTokenTimer(expires);
      return user;
    });
}

// export function loginWithApple(appleToken: string, fullName: string) {
//   return http
//     .post('/auth/login/apple', {
//       token: appleToken,
//       firstName: fullName?.givenName,
//       lastName: fullName?.familyName
//     })
//     .then(response => {
//       const { user, tokens } = response.data;
//       const { token, expires } = tokens.access;
//       //setRefreshToken(tokens.refresh.token);
//       userSubject.next({ ...user, token });
//       startRefreshTokenTimer(expires);
//       return user;
//     });
// }



export function refreshToken() {
  stopRefreshTokenTimer();
  return http
    .post(`/auth/refresh-tokens`)
    .then((response) => {
      const { user, tokens } = response.data;
      const { token, expires } = tokens.access;
      userSubject.next({ ...user, token });
      startRefreshTokenTimer(expires);
      return user;
    })
    .catch(() => {
      console.log('You must login to access');
      return redirect("/login");
    });
}

export default authService


let refreshTokenTimeout: NodeJS.Timeout;

function startRefreshTokenTimer(exp: number) {
  const expires = new Date(exp);
  const timeout = expires.getTime() - Date.now() - 60 * 1000;
  refreshTokenTimeout = setTimeout(refreshToken, timeout);
}


function stopRefreshTokenTimer() {
  clearTimeout(refreshTokenTimeout);
}

export function useUserAuth() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const subscription = authService.user.subscribe((x: any) => {
      return setUser(x);
    });
    return () => subscription.unsubscribe();
  }, []);
  return user;
}
