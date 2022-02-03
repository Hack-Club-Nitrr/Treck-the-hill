import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export const CyberJunkSocialMedia = () => {
  return (
    <div className="container">
      <Head>
        <title>social-media</title>
        {/* cyber junk script */}
        <script type="text/javascript">
          {`(function () {
            var i,
              e,
              d = document,
              s = 'script';
            i = d.createElement('script');
            i.async = 1;
            i.charset = 'UTF-8';
            i.src =
              'https://cdn.curator.io/published/c7328932-8aad-4dc2-8be7-6f23b7aa4eac.js';
            e = d.getElementsByTagName(s)[0];
            e.parentNode.insertBefore(i, e);
          })()`}
        </script>
      </Head>

      <div className="content_container">
        <div className="content">
          <div
            className="heading"
            style={{ fontSize: '20px', padding: '40px 20px' }}
          >
            OUR ONLINE PRESENCE
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
          .heading {
            font-family: 'Press Start 2P', cursive;
            font-size: 40px;
            color: rgb(160, 200, 89);
            text-align: center;
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
