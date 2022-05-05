import {
  ADMIN_ROUTE,
  TOSOLVE_ROUTE,
  CHALLENGE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CTF_ROUTE,
} from './utils/consts';
import Admin from './pages/Admin';
import ToSolve from './pages/ToSolve';
import CTF from './pages/CTF';
import Auth from './pages/Auth';
import ChallengePage from './pages/ChallengePage';

//for logged users only
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: TOSOLVE_ROUTE,
    Component: ToSolve,
  },
];

//for all users
export const publicRoutes = [
  {
    path: CTF_ROUTE,
    Component: CTF,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: CHALLENGE_ROUTE + '/:id',
    Component: ChallengePage,
  },
];
