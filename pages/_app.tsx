import App from 'next/app'
import NavBar from '../components/NavBar/NavBar'
import './index.scss';
const styles = require('./_app.module.scss');

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <div>
            <NavBar/> 
            <div className={styles.content}>
                <Component {...pageProps} />            
            </div>
        </div>
      }
}

export default MyApp;