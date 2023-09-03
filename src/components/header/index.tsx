// Home.js
import { Row, Col } from 'antd';
import Header from './Header';
import Header2 from './Header2';

const HeaderMain = () => {
    return (

        <div className="App">
            <Row justify="space-between">
                <Col span={12}>
                    <Header />
                </Col>
                <Col span={12}>
                    <Header2 />
                </Col>
            </Row>
        </div>
    )
};

export default HeaderMain;

