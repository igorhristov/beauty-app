import React from 'react';
import Header from './components/header/header.components';
import Footer from './components/footer/footer.component';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/home/home.component';
import ScrollToTop from './components/scrollToTop/scrollToTop.component';
import './App.css';

const App = () => {
    return (
        <>

            <Header />
            <ScrollToTop />
            <HomePage />
            <h2 style={{ height: '100vh' }}>Main</h2>

            <Footer />
        </>
    );
};

export default App;
