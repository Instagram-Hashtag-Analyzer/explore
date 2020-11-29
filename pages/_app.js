import fontTheme from '../styles/font';
import baseStyles from '../styles/base';
import NProgress from '../components/nprogress';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
      <style jsx global>
        {fontTheme}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </>
  );
}
