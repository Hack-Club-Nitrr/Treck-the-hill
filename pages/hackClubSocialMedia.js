import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from 'next/head';
const socialMedia = () => {
  return (
   
    <div className="container"> 
    <Head>
      <title>social-media</title>
      {/* hackclub script */}
      <script type="text/javascript">{`(function(){ var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8"; i.src="https://cdn.curator.io/published/01b5ffb5-a217-455b-986d-ab9195b624c4.js"; e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e); })();`}</script>
    </Head>
    <div className="social-media-text"><h1>Hack Club Instagram Handle</h1></div>

    <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
    <br />
    <br />
    <br /><br />

    <style jsx>{`
        .social-media-text{
          width: fit-content;
          margin: 20px auto;
          margin-bottom: 30px;
          color: white;
          font-size: 1.6rem;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          font-weight: 1000;
        }
        .container{
          padding: 23px 137px;
          background: #0052D4;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
        `}</style>
    </div>
    
  )
  
};

export default socialMedia;
