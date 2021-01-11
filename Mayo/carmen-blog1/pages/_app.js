
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import theme from '../theme/theme.js'
import '../styles/footer.css';
import '../styles/home.css';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

function MyApp({ Component, pageProps,navigation }) {

  return (
  <>
  <ThemeProvider theme={theme}> 
   <Header navigation={navigation}/>
  <Component {...pageProps} />
   <Footer/>
  </ThemeProvider>
  </>
  )
}

const {publicRuntimeConfig} = getConfig();

MyApp.getInitialProps =  async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navegacions`);
  const navigation = await res.json();

  return {navigation}
}


export default MyApp
