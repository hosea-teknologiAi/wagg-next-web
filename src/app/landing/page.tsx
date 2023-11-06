import React from 'react'
import Link from 'next/link';
import './landingStyle.scss'

import LogoLeft from "../../../public/assets/images/logo_pic.png";
import LogoRight from "../../../public/assets/images/logo.png";
import LogoFacebook from "../../../public/assets/images/icons/facebook.png";
import LogoInstagram from "../../../public/assets/images/icons/instagram.png";
import LogoTikTok from "../../../public/assets/images/icons/tiktok.png";
import LogoYoutube from "../../../public/assets/images/icons/youtube.png";
import LogoWA from "../../../public/assets/images/icons/whatsapp.png";
import LogoTwitter from "../../../public/assets/images/icons/twitter.png";
import Image from 'next/image';

const Landing = () => {
  return (
    <div className='wrapper-landing'>
      <div
        className="container-landing"
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="header-landing">
          <div className="logo-landing">
            <Image src={LogoLeft} alt="logo_pic" className="picture-landing" width={100} />
            <Image src={LogoRight} alt="logo_text" className="text-landing" width={100} />
          </div>
          <div className="link-wrapper-landing">
            <Link href="/home" style={{ textDecoration: "none" }} target="_blank">
              <div className="link-to-officialSite">Official Site</div>
            </Link>
          </div>
        </div>
        <div className="title-landing">
          <span>Selamat datang di surganya hewan peliharaan!</span>
        </div>
        <div className="description-landing">
          <div className="sentence-landing">
            <span>
              Hi <b>#teamWagginton!</b> Sekarang, belanja keperluan anabul udah
              gak ribet lagi!
            </span>
          </div>
          <div className="sentence-landing">
            <span>Yuk download aplikasi Wagginton sekarang</span>
            <span>dapatkan penawaran menarik dan juga keuntungan lainnya!</span>
          </div>
        </div>
        <div className="actions-landing">
          <a
            href="https://play.google.com/store/apps/details?id=com.wagginton.wagginton"
            // className="mr-12"
          >
            Download Google Play
          </a>
          <a href="https://apps.apple.com/id/app/wagginton/idX1599293428">
            Download AppStore
          </a>
        </div>
      </div>
      <div className="sociality">
        <a
          className="icon"
          href="https://www.facebook.com/profile.php?id=100075819733095&mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoFacebook} alt="facebook" />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/wagginton/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoInstagram} alt="instagram" />
        </a>
        <a
          className="icon"
          href="https://www.tiktok.com/@wagginton.id"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoTikTok} alt="tiktok" />
        </a>
        <a
          className="icon"
          href="https://www.youtube.com/channel/UChB8PerVfH8fBrkEGD-x0DQ"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoYoutube} alt="youtube" />
        </a>
        <a
          className="icon"
          href="https://wa.me/+622150980288"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoWA} alt="whatsapp" />
        </a>
        <a
          className="icon"
          href="https://twitter.com/wagginton_id"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LogoTwitter} alt="twitter" />
        </a>
      </div>
    </div>
  )
}

export default Landing