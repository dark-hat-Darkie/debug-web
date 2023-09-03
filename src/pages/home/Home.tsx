// Home.js
import HeaderMain from '../../components/header';
import { Row } from 'antd';
import Footer from '../../components/footer/Footer';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <>
            <HeaderMain />
            <Row className='homeHeroWrapper'>
                <Row className='textWrapper'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'PLAY',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'BEYOND',
                            1000,
                            'BOUNDARIES',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className='gradientText'
                        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                </Row>
                <Row className='videoWrapper'>
                    <div className='overlay'>
                        <video muted autoPlay loop className='bgVideo' >
                            <source src="/Reel_2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <video muted autoPlay loop className='bgVideo' >
                        <source src="/Reel_2.mp4" type="video/mp4" />
                    </video>
                </Row>
            </Row>
            <Footer></Footer>
        </>

    )
};

export default Home;
