import { useEffect, useState, useRef } from 'react';

let sponsor1 = 'https://hack-club-nitrr.netlify.app/static/media/icon-rounded.b2825959.png';
let sponsor2 = 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png';
let sponsor3 = 'https://logos-world.net/wp-content/uploads/2020/11/Superman-Logo-2011.png';
let sponsor4 = 'https://pngimg.com/uploads/wordpress/wordpress_PNG28.png';

//this is the data about the sponsers, not just the names, but the links and images too...
let sponsorNames = [
  { name: 'google', img: sponsor1, link: 'https://www.google.com', tag: "title_sponsor" }, //this tag we will also use for individual styling, so we can use it in the css
  { name: 'apple', img: sponsor2, link: 'https://www.google.com', tag: "branding_sponsor" },
  { name: 'google', img: sponsor3, link: 'https://www.google.com', tag: "education_sponsor" },
  { name: 'apple', img: sponsor4, link: 'https://www.google.com', tag: "masti_sponsor" }
]

let specialSponsorNames = [
  { name: 'google', img: sponsor1, link: 'https://www.google.com', tag: "title_sponsor" }, //this tag we will also use for individual styling, so we can use it in the css
  { name: 'apple', img: sponsor2, link: 'https://www.google.com', tag: "branding_sponsor" },
  { name: 'google', img: sponsor3, link: 'https://www.google.com', tag: "education_sponsor" },
  { name: 'apple', img: sponsor4, link: 'https://www.google.com', tag: "masti_sponsor" }
]

//utility element for the sponsers
const Sponser = (props) => {
  return (//onClick={props.clickHandler(props.sponsorImg)}
    <div >

      <div className={"sponser " + props.tag} onMouseEnter={() => { console.log('clicked'); props.clickHandler(props.sponsorImg) }}>
        <img src={props.sponsorImg} alt="sponsor1" />
        <a href={props.sponsorLink}>
          <h1>{props.sponsorName}</h1>
        </a>
      </div>

    </div>
  );
}



const sponsers = () => {

  let [bg, setBg] = useState(null);


  let renderBG = (stringURL) => {
    console.log('done', stringURL)
    setBg(stringURL);
  }

  let specialSponserList = specialSponsorNames.map((Sponsor) => {
    return (
      <Sponser sponsorName={Sponsor.name} sponsorImg={Sponsor.img} sponsorLink={Sponsor.link} tag={Sponsor.tag} key={Math.random()} clickHandler={(stringURL) => { renderBG(stringURL) }} />
    )
  });

  let bgStyle = {
    backgroundImage:  `url(${bg})`,
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundBlendMode: ' darken',
    //backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'noRepeat',
    backgroundColor: 'rgb(0 0 0 / 81%)'
  }

  return (

    <div className="specialSponsers"
      style={bgStyle}>
      {specialSponserList}{specialSponserList}{specialSponserList}
    </div>



  )
}



/*
document.querySelector('.specialSponsers').addEventListener('click', (e)=>{
    console.log('eee')
})*/

//module.exports = sponsers;
export default sponsers;