import { Layout, Row, Col } from "antd";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as DiscordIcon } from './discord-icon.svg'
import './footer.scss';
import ParticleImg from "../particleImage/ParticleImage";
const { Footer: AntFooter } = Layout;
const Footer = () => {
    const date = new Date();
    return (
        <>
            <AntFooter className="footer">
                <Row justify="space-between">
                    <Col span={12}>
                        <Row justify="center">
                            <ParticleImg height={200} width={600} scale={0.4} maxParticles={10000} mass={40} friction={0.15} />
                            <p className="footerDesc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto qui labore tempore illum minima earum officia consequuntur totam hic dolor eius veritatis iusto, voluptas possimus? Maiores quas quidem tempora. Unde veniam id ex modi molestias at sint quia consequatur in eius eum exercitationem aut repudiandae, quasi dolor, doloribus totam perspiciatis quis! Dolorem voluptatibus ut deserunt vero perspiciatis? Inventore, qui dignissimos.
                            </p>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row style={{ height: "100%" }} justify="center" align="middle">

                            <FacebookOutlined className="socialIcon" style={{ color: '#3b5998' }} />
                            <InstagramOutlined className="socialIcon" style={{ color: '#fa7e1e' }} />
                            <Icon className="socialIcon" component={DiscordIcon} />
                            <YoutubeOutlined className="socialIcon" style={{ color: "#CD201F" }} />
                            <LinkedinOutlined className="socialIcon" style={{ color: "#0072b1" }} />
                            <TwitterOutlined className="socialIcon" style={{ color: "#00acee" }} />
                        </Row>
                    </Col>
                </Row>
            </AntFooter>
            <div className="footerText">Copyright © {date.getFullYear()}  DebugStudio  | All Rights Reserved</div>
        </>
    )
}

export default Footer;