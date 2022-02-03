import { useEffect, useState, useRef } from 'react';

let sponsor1 = 'https://hack-club-nitrr.netlify.app/static/media/icon-rounded.b2825959.png';
let sponsor2 = 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png';
let sponsor3 = 'https://logos-world.net/wp-content/uploads/2020/11/Superman-Logo-2011.png';
let sponsor4 = 'https://pngimg.com/uploads/wordpress/wordpress_PNG28.png';

//this is the data about the sponsers, not just the names, but the links and images too...

let dataList = [];
//setTimeout(()=>{fetch('https://trekthehill.herokuapp.com/api/sponser/').then(res => res.json()).then(data => {dataList =  data});}, 500);
//console.log(dataList);


let specialSponsorNames = [
  { name: 'google', image: sponsor1, link: 'https://www.google.com', category: "silver" }, //this category we will also use for individual styling, so we can use it in the css
  { name: 'apple', image: sponsor2, link: 'https://www.google.com', category: "silver" },
  { name: 'microsoft', image: sponsor3, link: 'https://www.google.com', category: "gold" },
  { name: 'adobe', image: sponsor4, link: 'https://www.google.com', category: "silver" },
  { name: '1google', image: sponsor1, link: 'https://www.google.com', category: "silver" }, //this category we will also use for individual styling, so we can use it in the css
  { name: '1apple', image: sponsor2, link: 'https://www.google.com', category: "silver" },
  { name: '1microsoft', image: sponsor3, link: 'https://www.google.com', category: "gold" },
  { name: '1adobe', image: sponsor4, link: 'https://www.google.com', category: "silver" },
  { name: '2google', image: sponsor1, link: 'https://www.google.com', category: "silver" }, //this category we will also use for individual styling, so we can use it in the css
  { name: '2apple', image: sponsor2, link: 'https://www.google.com', category: "silver" },
  { name: '2microsoft', image: sponsor3, link: 'https://www.google.com', category: "gold" },
  { name: '2adobe', image: sponsor4, link: 'https://www.google.com', category: "platinum" }
]

//specialSponsorNames = dataList

//utility element for the sponsers
const Sponser = (props) => {
  let backgroundHandler = () => {
    //console.log('clicked'); 
    props.clickHandler(props.sponsorImg)
    if (typeof document) {
      let ff = document.getElementsByClassName(props.sponsorName)[0]
      ff.style.mixBlendMode = 'normal';
      //console.log('66666', ff)
    }
  }
  return (//onClick={props.clickHandler(props.sponsorImg)}
    <div >

      <div className={"sponser " + props.category}
        onMouseEnter={() => { backgroundHandler() }}
        onTouchMove={() => { backgroundHandler() }}
      >
        <img src={props.sponsorImg} alt="sponsor1" className={props.sponsorName} />
        <a href={props.sponsorLink}>
          <h1>{props.sponsorName}</h1>
          <h2>{props.category+" Sponsers"}</h2>
        </a>
      </div>

    </div>
  );
}



const sponsers = () => {

  let [bg, setBg] = useState(null);


  let renderBG = (stringURL) => {
    //console.log('done', stringURL)
    setBg(stringURL);
  }
  let platinumSponsers = []
  let goldSponsers = []
  let silverSponsers = []
  let generalSponsers = []
  specialSponsorNames.forEach((Sponsor) => {
    if (Sponsor.category.toLowerCase() == 'platinum') {
      platinumSponsers.push(<Sponser sponsorName={Sponsor.name} sponsorImg={Sponsor.image} sponsorLink={Sponsor.link} category={Sponsor.category} key={Math.random()} clickHandler={(stringURL) => { renderBG(stringURL) }} />);
    } else if (Sponsor.category.toLowerCase() == 'gold') {
      goldSponsers.push(<Sponser sponsorName={Sponsor.name} sponsorImg={Sponsor.image} sponsorLink={Sponsor.link} category={Sponsor.category} key={Math.random()} clickHandler={(stringURL) => { renderBG(stringURL) }} />);
    } else if (Sponsor.category.toLowerCase() == 'silver') {
      silverSponsers.push(<Sponser sponsorName={Sponsor.name} sponsorImg={Sponsor.image} sponsorLink={Sponsor.link} category={Sponsor.category} key={Math.random()} clickHandler={(stringURL) => { renderBG(stringURL) }} />);
    } else if (Sponsor.category.toLowerCase() == 'general') {
      generalSponsers.push(<Sponser sponsorName={Sponsor.name} sponsorImg={Sponsor.image} sponsorLink={Sponsor.link} category={Sponsor.category} key={Math.random()} clickHandler={(stringURL) => { renderBG(stringURL) }} />);
    } else {

    }
  });

  let bgStyle = {
    backgroundImage: `url(${bg})`,
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
      <div className='platinum'>
        {platinumSponsers}
      </div>
      <div className='gold'>
        {goldSponsers}
      </div>
      <div className='silver'>
        {silverSponsers}
      </div>
      <div className='general'>
        {generalSponsers}
      </div>
    </div>



  )
}

/*
document.querySelector('.specialSponsers').addEventListener('click', (e)=>{
    console.log('eee')
})*/

/*/this timeOut HAS to be fired whenever the sponsers element is being rendered, currently under developement, so I am placng it here, move to proper location
setTimeout(() => {
  console.log('*******1')
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    let elements = document.querySelectorAll('.sponser');
    console.log('********2', elements)
    elements.forEach((element) => {
      window.addEventListener('scroll', function () {

        var position = element.getBoundingClientRect();

        // detecting if element is fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          console.log('the element becomes visible', element)
        }
      });
    });
  }
}, 500)*/

//module.exports = sponsers;
export default sponsers;