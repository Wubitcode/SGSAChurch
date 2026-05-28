export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    ME: '/auth/me'
  },
  MEMBERS: {
    BASE: '/members',
    DETAIL: (id) => `/members/${id}`
  },
  DONATIONS: {
    BASE: '/donations',
    STATS: '/donations/stats',
    MY_HISTORY: '/donations/my-history'
  },
  EVENTS: {
    BASE: '/events',
    UPCOMING: '/events/upcoming',
    DETAIL: (id) => `/events/${id}`
  }
};