import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from "../redux/store";
import { Provider } from 'react-redux';
import Wrapper from '../components/Wrapper/Wrapper';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  )
}

export default MyApp
