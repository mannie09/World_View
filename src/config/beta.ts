export const BETA_MODE = typeof window !== 'undefined'
  && localStorage.getItem('worldview-beta-mode') === 'true';
