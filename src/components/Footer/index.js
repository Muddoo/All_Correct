import Link from "next/link";
import Image from "next/image";
import facebookLogo from "../../../public/images/logos/facebook.svg";
import linkedinLogo from "../../../public/images/logos/linkedin.svg";
import mediumLogo from "../../../public/images/logos/medium.svg";
import rssLogo from "../../../public/images/logos/rss.svg";
import { Title } from "./Footer.styled";

const Footer = () => {
  return (
    <footer className="footer">
      <Title>
        <span>Allcorrect</span>Game outsourcing studio
      </Title>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/join">
              <a>Join us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Get in touch</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p>IRELAND: 66 Silken Vale, Maynooth, co. Kildare, Ireland W23 V3P2</p>
        <p>CANADA: 119 Spadina Ave, Toronto, ON M6E3J3</p>
      </div>
      <div>
        <p>© Allcorrect Group 2006—2021, «Legal information»</p>
        <p>site@allcorrectgames.com</p>
      </div>
      <ul>
        <li>
          <Image src={facebookLogo} width={50} height={50} />
          Facebook
        </li>
        <li>
          <Image src={linkedinLogo} width={50} height={50} />
          Medium
        </li>
        <li>
          <Image src={mediumLogo} width={50} height={50} />
          Linkedin
        </li>
        <li>
          <Image src={rssLogo} width={50} height={50} />
          RSS
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
