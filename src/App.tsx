import React from 'react';
import { Row, Col, ConfigProvider } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import Header from './components/header/Header'
import Header2 from './components/header/Header2';
import './App.scss'
import Footer from './components/footer/Footer'
const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#FF5050', colorBgBase: "#111", colorText: "#FFF" } }}>

    <div className="App">
      <Row justify="space-between">
        <Col span={12}>
          <Header />
        </Col>
        <Col span={12}>
          <Header2 />
        </Col>
      </Row>

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
    </div>
  </ConfigProvider>
);

export default App;