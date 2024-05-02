export default function ({ store }) {
    if (!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', false);
    }
  }