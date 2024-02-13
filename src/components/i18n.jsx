// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  ca: { // Catalan language
    translation: {
      adminLoginText: 'Si us plau, introdueixi el seu nom d\'usuari d\'administrador i la seva contrasenya.',
      usernamePlaceholder: 'convidat',
      passwordPlaceholder: 'Contrasenya',
      buttonText: 'Iniciar sessió',
    }
  },

  en: {
    translation: {
      adminLoginText: 'Please enter your administrator login and password.',
      usernamePlaceholder: 'Username',
      passwordPlaceholder: 'Password',
      buttonText: 'Sign In',
    }
  },

  cs: {
    translation: {
      adminLoginText: 'Prosím, zadejte své uživatelské jméno a heslo administrátora.',
      usernamePlaceholder: 'host',
      passwordPlaceholder: 'Heslo',
      buttonText: 'Přihlásit se',
    }
  },

  da: {
    translation: {
      adminLoginText: 'Indtast venligst din administrator-login og adgangskode.',
      usernamePlaceholder: 'gæst',
      passwordPlaceholder: 'Adgangskode',
      buttonText: 'Log ind',
    }
  },
  de: {
    translation: {
      adminLoginText: 'Bitte geben Sie Ihren Administrator-Benutzernamen und Ihr Passwort ein.',
      usernamePlaceholder: 'Gast',
      passwordPlaceholder: 'Passwort',
      buttonText: 'Anmelden',
    }
  }
  
  }
  // Add more languages as needed


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation not found
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
