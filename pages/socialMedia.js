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
          font-size: 1.6rem;
          border-top: 2px solid black;
          border-bottom: 2px solid;
        }
        .container{
          padding: 20px;
        }
        `}</style>
    </div>
    
  )
  
};

export default socialMedia;
