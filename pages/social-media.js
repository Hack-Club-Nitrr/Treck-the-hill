import styles from "../styles/SocialMedia.module.css";

const socialMedia = () => {
  return (
    <>
      <div id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(){var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";i.src="https://cdn.curator.io/published/01b5ffb5-a217-455b-986d-ab9195b624c4.js";e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);})();`,
        }}
      />

      {/* cyber junk */}
      {/* <div>
      
    
    <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
     <script type="text/javascript"

            dangerouslySetInnerHTML={{
                __html: `(function(){var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";i.src="https://cdn.curator.io/published/c7328932-8aad-4dc2-8be7-6f23b7aa4eac.js";e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);})();`,
            }}
            /> 
      
      </div> */}
    </>
  );
};

export default socialMedia;
