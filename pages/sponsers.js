import sponsor1 from '../public/mmc.png';
import sponsor2 from '../public/binance.png';
import sponsor3 from '../public/mmc.png';
import sponsor4 from '../public/mmc.png';

//this is the data about the sponsers, not just the names, but the links and images too...
let sponsorNames = [
  {
    name: 'google',
    img: sponsor1,
    link: 'https://www.google.com',
    tag: 'title_sponsor',
  }, //this tag we will also use for individual styling, so we can use it in the css
  {
    name: 'apple',
    img: sponsor2,
    link: 'https://www.google.com',
    tag: 'branding_sponsor',
  },
  {
    name: 'google',
    img: sponsor3,
    link: 'https://www.google.com',
    tag: 'education_sponsor',
  },
  {
    name: 'apple',
    img: sponsor4,
    link: 'https://www.google.com',
    tag: 'masti_sponsor',
  },
];

let specialSponsorNames = [
  {
    name: 'google',
    img: sponsor1,
    link: 'https://www.google.com',
    tag: 'title_sponsor',
  }, //this tag we will also use for individual styling, so we can use it in the css
  {
    name: 'apple',
    img: sponsor2,
    link: 'https://www.google.com',
    tag: 'branding_sponsor',
  },
  {
    name: 'google',
    img: sponsor3,
    link: 'https://www.google.com',
    tag: 'education_sponsor',
  },
  {
    name: 'apple',
    img: sponsor4,
    link: 'https://www.google.com',
    tag: 'masti_sponsor',
  },
];

//utility element for the sponsers
const Sponser = (props) => {
  return (
    <div>
      <div className={'sponser ' + props.tag}>
        <img src={props.sponsorImg} alt="sponsor1" />
        <a href={props.sponsorLink}>
          <p>{props.sponsorName}</p>
        </a>
      </div>
    </div>
  );
};

const sponsers = () => {
  let sponserList = sponsorNames.map((Sponsor) => {
    return (
      <Sponser
        sponsorName={Sponsor.name}
        sponsorImg={Sponsor.img}
        sponsorLink={Sponsor.link}
        tag={Sponsor.tag}
        key={Math.random()}
      />
    );
  });
  let specialSponserList = specialSponsorNames.map((Sponsor) => {
    return (
      <Sponser
        sponsorName={Sponsor.name}
        sponsorImg={Sponsor.img}
        sponsorLink={Sponsor.link}
        tag={Sponsor.tag}
        key={Math.random()}
      />
    );
  });

  return (
    <>
      <div className="specialSponsers">{specialSponserList}</div>

      <div className="normalSponsers">{sponserList}</div>
    </>
  );
};

export default sponsers;
