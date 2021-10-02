import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import facebookLogo from "../../../public/images/logos/facebook.svg";
import linkedinLogo from "../../../public/images/logos/linkedin.svg";
import mediumLogo from "../../../public/images/logos/medium.svg";
import rssLogo from "../../../public/images/logos/rss.svg";
import {
  AddressWrapper,
  Copyright,
  FooterWrapper,
  SocialItem,
  SocialWrapper,
  Wrapper,
} from "./Footer.styles";
import Nav from "../Nav/Nav.js";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

const Footer = () => {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  return (
    <FooterWrapper>
      <Nav inherit={true} showModal={showModal} openModal={openModal} closeModal={closeModal} />
      <Wrapper>
        <Wrapper className="grid">
          <AddressWrapper>
            <p>
              <span>IRELAND:</span> 66 Silken Vale, Maynooth, co. Kildare, Ireland W23 V3P2
            </p>
            <p>
              <span>CANADA:</span> 119 Spadina Ave, Toronto, ON M6E3J3
            </p>
          </AddressWrapper>

          <Copyright>
            <p>
              © Allcorrect Group 2006—2021,
              <Link
                href="https://allcorrectgames.com/legal-information/"
                target="_blank"
                rel="noopener">
                <a>«Legal information»</a>
              </Link>
            </p>
            <p>site@allcorrectgames.com</p>
          </Copyright>
        </Wrapper>
        <SocialWrapper>
          <SocialItem>
            <Image src={facebookLogo} width={18} height={20} />
            <Link
              href="https://www.facebook.com/allcorrectgames?ref=aymt_homepage_panel"
              target="_blank"
              rel="noopener">
              <a>Facebook</a>
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={linkedinLogo} width={18} height={20} />
            <Link href="https://medium.com/@allcorrect" target="_blank" rel="noopener">
              <a>Medium</a>
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={mediumLogo} width={18} height={20} />
            <Link
              href="https://www.linkedin.com/company/allcorrectgames/"
              target="_blank"
              rel="noopener">
              <a>Linkedin</a>
            </Link>
          </SocialItem>
          <SocialItem>
            <Image src={rssLogo} width={18} height={20} />
            <Link
              href="http://feeds.feedburner.com/allcorrectgamescominsights"
              target="_blank"
              rel="noopener">
              <a>RSS</a>
            </Link>
          </SocialItem>
        </SocialWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
