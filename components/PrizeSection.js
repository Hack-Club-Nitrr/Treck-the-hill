import Tilt from 'react-parallax-tilt';



const prizeData = [  //no api for it, this is what it is
  {
    type: 'premium',
    name: 'Second prize',
    rank: `3000₹`,
    price: 29,
    goodies: []
  },
  {
    type: 'ultimate',
    name: 'First prize',
    rank: `5000₹`,
    price: 29,
    goodies: []
  },
  {
    type: 'general',
    name: 'Third prize',
    rank: `5000₹`,
    price: 29,
    goodies: []
  }
  ,
  
]

const details = {
  name: 'Other Details',
  type: 'ultimate',

  goodies:[
    'saf e re egrsgsrh ersthshrt',
    'saf e re egrsgsrh ersthshrt',
    'saf e re egrsgsrh ersthshrt',
    'saf e re egrsgsrh ersthshrt'
  ]}




const BasicPrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li key={Math.random()}>
        <span className="list-name">{element}</span>
         </li>
    )
  })
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
          glarePosition='absolute'
          glarePositionLeft='1rem'
          glarePositionTop='1rem'
          glareHeight='calc(100% - 2rem)'
          glareWidth='calc(100% - 2rem)'
          scale={1.1}
        >
        <div className="price-area">
          <div className="inner-area">
            <span className="text"></span>
            <span className="price">{props.data.rank}</span>
          </div>
        </div>
        </Tilt>
      </div>
      <div className="package-name"><div className="centerTextPrizeSection">{props.data.name}</div></div>
      <ul className="features">
        {listDetails}
      </ul>

    </div>
  )
}

const PremiumPrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li  key={Math.random()}>
        <span className="list-name">{element}</span>
      </li>
    )
  })
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
      glarePosition='absolute'
      glarePositionLeft='1rem'
      glarePositionTop='1rem'
      glareHeight='calc(100% - 2rem)'
      glareWidth='calc(100% - 2rem)'
      scale={1.1}
    >
        <div className="price-area">
          <div className="inner-area">
            <span className="text"></span>
            <span className="price">{props.data.rank}</span>
          </div>
        </div>
        </Tilt>
      </div>
      <div className="package-name"><div className="centerTextPrizeSection">{props.data.name}</div></div>
      <ul className="features">
        {listDetails}
      </ul>

    </div>
  )
}

const UltimatePrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li  key={Math.random()}>
        <span className="list-name">{element}</span>
         </li>
    )
  })
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
          glarePosition='absolute'
          glarePositionLeft='1rem'
          glarePositionTop='1rem'
          glareHeight='calc(100% - 2rem)'
          glareWidth='calc(100% - 2rem)'
          scale={1.1}
        >
        <div className="price-area">
          <div className="inner-area">
            <span className="text"></span>
            <span className="price">{props.data.rank}</span>
          </div>
        </div>
        </Tilt>
      </div>
      <div className="package-name"><div className="centerTextPrizeSection">{`   ${props.data.name}   `}</div></div>
      <ul className="features">
        {listDetails}
      </ul>

    </div>
  )
}

const Details = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li  key={Math.random()}>
        <span className="list-name">{element}</span>
         </li>
    )
  })
  return (
    <div className="table ultimate">
      <div className="package-name"><div className="centerTextPrizeSection">{`   ${props.data.name}   `}</div></div>
      <ul className="features">
        {listDetails}
      </ul>

    </div>
  )
}



const PrizeSection = () => {
  const pricelist = prizeData.map((prize) => {
    if (prize.type == 'premium') return( 
      
      <PremiumPrizes key={Math.random()} data={prize} />
     )
    if (prize.type == 'ultimate') return(<UltimatePrizes key={Math.random()}  data={prize} />
      )
    if (prize.type == 'general') return( <BasicPrizes  key={Math.random()} data={prize} />
     )
  })
  return (
    <div className="outerWraper">

      <div className="wrapper">
      
          
        {pricelist}
        
      </div>
      <div className="wrapper">
      <Details  key={Math.random()} data={details} /></div>
    </div>
  )
}

export default PrizeSection;

