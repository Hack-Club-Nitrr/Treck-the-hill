import Tilt from 'react-parallax-tilt';



const prizeData = [  //no api for it, this is what it is
  {
    type: 'premium',
    name: 'First prize',
    rank: 1,
    price: 29,
    goodies: [
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$'
    ]
  },
  {
    type: 'ultimate',
    name: 'Second prize',
    rank: 2,
    price: 29,
    goodies: [
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$'
    ]
  },
  {
    type: 'general',
    name: 'Third prize',
    rank: 3,
    price: 29,
    goodies: [
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$',
      '1st place in the event get 2000$'
    ]
  }
]



const BasicPrizes = (props) => {
  const listDetails = props.data.goodies.map((element) => {
    return (
      <li>
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
      <li>
        <span className="list-name">{element}</span>
      </li>
    )
  })
  return (
    <div className="table premium">
      <div className="ribbon"><span>we wish to see you here!</span></div>
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
      <li>
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

const PrizeSection = () => {
  const pricelist = prizeData.map((prize) => {
    if (prize.type == 'premium') return( 
      <Tilt className="tilt">
      <PremiumPrizes data={prize} /></Tilt>
     )
    if (prize.type == 'ultimate') return(<Tilt className="tilt"><UltimatePrizes data={prize} /></Tilt>
      )
    if (prize.type == 'general') return( <Tilt className="tilt"><BasicPrizes data={prize} /></Tilt>
     )
  })
  return (
    <div className="outerWraper">

      <div className="wrapper">
      
          
        {pricelist}
        
      </div>
    </div>
  )
}

export default PrizeSection;

