import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export const CyberJunkSocialMedia = () => {
  return (
    <div className="container">
      <Head>
        {/* cyber junk script */}
        <script type="text/javascript">
          {`(function(){
var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
i.src="https://cdn.curator.io/published/15182a49-fa97-4c45-8919-722689d1f1d4.js";
e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();`}
        </script>
      </Head>

      <div className="content_container">
        <div className="content">
          <div className="heading" style={{ padding: '40px 20px' }}>
            Our Online Presence
          </div>

          <div id="curator-feed-default-feed-layout" style={{ color: 'white' }}>
            <a
              href="https://curator.io"
              target="_blank"
              rel="noreferrer"
              className="crt-logo crt-tag"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ color: 'white !important' }}>
                Powered by Curator.io
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');

          .container {
            position: relative;
            z-index: 99;
          }
          .heading {
            font-family: 'Nova Mono', monospace;
            font-size: 32px;
            color: rgb(26 188 156);
            text-align: center;
            text-shadow: 0 0 10px rgb(26 188 156);
          }
          .content_container {
            display: flex;
            width: 100%;
            justify-content: center;
            z-index: 10000000000000;
          }

          .content {
            width: 100%;
            max-width: 1700px;
            color: white;
            font-family: 'Comfortaa', cursive;
            backdrop-filter: blur(12px);
            background: rgba(0, 1, 53, 0.253);
            padding: 20px 40px;
            letter-spacing: 1px;
          }
          @media screen and (max-width: 767px) {
            .content {
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};
