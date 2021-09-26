import Link from "next/link";
import Image from "next/image";
import facebookLogo from "../../../public/images/logos/facebook.svg";
import linkedinLogo from "../../../public/images/logos/linkedin.svg";
import mediumLogo from "../../../public/images/logos/medium.svg";
import rssLogo from "../../../public/images/logos/rss.svg";
import {
  AddressWrapper,
  CompanyWrapper,
  Copyright,
  FooterWrapper,
  NavigationItem,
  NavigationWrapper,
  SocialItem,
  SocialWrapper,
  Title,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyWrapper>
        <Title>
          <span>Allcorrect</span>
          <p>Game outsourcing studio</p>
        </Title>
        <NavigationWrapper>
          <NavigationItem>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/join">
              <a>Join us</a>
            </Link>
          </NavigationItem>
          <NavigationItem className="color">
            <Link href="/contact">Get in touch</Link>
          </NavigationItem>
        </NavigationWrapper>
      </CompanyWrapper>
      <AddressWrapper>
        <p>
          <span>IRELAND:</span> 66 Silken Vale, Maynooth, co. Kildare, Ireland W23 V3P2
        </p>
        <p>
          <span>CANADA:</span> 119 Spadina Ave, Toronto, ON M6E3J3
        </p>
      </AddressWrapper>
      <Copyright>
        <p>© Allcorrect Group 2006—2021, «Legal information»</p>
        <p>site@allcorrectgames.com</p>
      </Copyright>
      <SocialWrapper>
        <SocialItem>
          <Image src={facebookLogo} width={18} height={20} />
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={linkedinLogo} width={18} height={20} />
          <Link href="/">
            <a>Medium</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={mediumLogo} width={18} height={20} />
          <Link href="/">
            <a>Linkedin</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={rssLogo} width={18} height={20} />
          <Link href="/">
            <a>RSS</a>
          </Link>
        </SocialItem>
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
