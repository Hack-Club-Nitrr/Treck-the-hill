import Tilt from 'react-parallax-tilt';
import { BsCheck2Square } from 'react-icons/bs';

const prizeData = [
  {
    type: 'premium',
    name: '₹5000',
    rank: `/first.png`,
    price: 29,
    goodies: ['₹8000 GfG Coupon + Goodies'],
  },
  {
    type: 'ultimate',
    name: '₹3000',
    rank: `/second.png`,
    price: 29,
    goodies: ['₹4800 GfG Coupon + Goodies'],
  },
  {
    type: 'general',
    name: '₹2000',
    rank: `/third.png`,
    price: 29,
    goodies: ['₹3600 GfG Coupon + Goodies'],
  },
];

const details = {
  name: 'Other Prizes',
  type: 'ultimate',

  goodies: [
    '1 Year Subscription of Wolfram|One and Wolfram|Alpha worth ₹28,000 to all the members of Top-3 teams.',
    '1 IoT Kit worth ₹2600 to each winning team (not to each member*) alongwith a surprise gift.',
    'A total of ₹1,50,000 in credits to the winning team(s) - these can be distributed only in sums of $100, $125, and $250, per winning team by Digital Ocean.',
  ],
};

const BasicPrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <div key={Math.random()}>
        <p className="list-name" style={{ textAlign: 'center' }}>
          {element}
        </p>
      </div>
    );
  });
  return (
    <div className="table basic">
      <div className="price-section">
        <Tilt
          className="tilt"
          tiltMaxAngleX={20}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          gyroscope={false}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#adb2b8"
          glareBorderRadius="5000px"
          glarePosition="absolute"
          glarePositionLeft="1rem"
          glarePositionTop="1rem"
          glareHeight="calc(100% - 2rem)"
          glareWidth="calc(100% - 2rem)"
          scale={1.1}
        >
          <div className="price-area">
            <div className="inner-area">
              <span className="text"></span>
              <span className="price">
                <img src={props.data.rank} alt=".." />
              </span>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="package-name">
        <div className="centerTextPrizeSection">{props.data.name}</div>
      </div>
      <ul className="features">{listDetails}</ul>
    </div>
  );
};

const PremiumPrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <div key={Math.random()}>
        <p className="list-name" style={{ textAlign: 'center' }}>
          {element}
        </p>
      </div>
    );
  });
  return (
    <div className="table premium">
      <div className="price-section">
        <Tilt
          className="tilt"
          tiltMaxAngleX={20}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          gyroscope={false}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#adb2b8"
          glareBorderRadius="5000px"
          glarePosition="absolute"
          glarePositionLeft="1rem"
          glarePositionTop="1rem"
          glareHeight="calc(100% - 2rem)"
          glareWidth="calc(100% - 2rem)"
          scale={1.1}
        >
          <div className="price-area">
            <div className="inner-area">
              <span className="text"></span>
              <span className="price">
                <img src={props.data.rank} alt=".." />
              </span>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="package-name">
        <div className="centerTextPrizeSection">{props.data.name}</div>
      </div>
      <ul className="features">{listDetails}</ul>
    </div>
  );
};

const UltimatePrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <div key={Math.random()}>
        <p className="list-name" style={{ textAlign: 'center' }}>
          {element}
        </p>
      </div>
    );
  });
  return (
    <div className="table ultimate">
      <div className="price-section">
        <Tilt
          className="tilt"
          tiltMaxAngleX={20}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          gyroscope={false}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#adb2b8"
          glareBorderRadius="5000px"
          glarePosition="absolute"
          glarePositionLeft="1rem"
          glarePositionTop="1rem"
          glareHeight="calc(100% - 2rem)"
          glareWidth="calc(100% - 2rem)"
          scale={1.1}
        >
          <div className="price-area">
            <div className="inner-area">
              <span className="text"></span>
              <span className="price">
                {' '}
                <img src={props.data.rank} alt=".." />
              </span>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="package-name">
        <div className="centerTextPrizeSection">{`   ${props.data.name}   `}</div>
      </div>
      <ul className="features">{listDetails}</ul>
    </div>
  );
};

const Details = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li key={Math.random()}>
        <span className="list-name">
          <table>
            <th>
              <td>
                <BsCheck2Square
                  size={20}
                  color="white"
                  style={{ float: 'left', marginRight: '10px' }}
                />
              </td>
              <td>{element}</td>
            </th>
          </table>
        </span>
      </li>
    );
  });
  return (
    <div className="table ultimate">
      <div className="package-name">
        <div className="centerTextPrizeSection">{`   ${props.data.name}   `}</div>
      </div>
      <ul className="features">{listDetails}</ul>
    </div>
  );
};

const PrizeSection = () => {
  const pricelist = prizeData.map((prize) => {
    if (prize.type == 'premium')
      return <PremiumPrizes key={Math.random()} data={prize} />;
    if (prize.type == 'ultimate')
      return <UltimatePrizes key={Math.random()} data={prize} />;
    if (prize.type == 'general')
      return <BasicPrizes key={Math.random()} data={prize} />;
  });
  return (
    <>
      <div className="outerWraper">
        <br />
        <p className="prize_heading">Trek The Hill&apos;22 Hackathon</p>
        <p className="prize_heading">Prizes</p>

        <div className="wrapper">{pricelist}</div>
      </div>
      <div className="other_prizes">
        <Details key={Math.random()} data={details} />
      </div>
    </>
  );
};

export default PrizeSection;
