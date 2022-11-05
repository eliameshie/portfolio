import '../styles/globals.css'
import Layout from '../components/utils/Layout.jsx'


const MyApp = ({ Component, pageProps }) => {
  	return (
		<Layout>
	  		<Component {...pageProps} />
		</Layout>
  	)
}

export default MyApp;
