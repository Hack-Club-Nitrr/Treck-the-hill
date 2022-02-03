import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

export const About = () => {
  return (
    <div>
      <div className="content_container">
        <div className="content">
          <SimpleGrid minChildWidth="300px">
            <Box>
              <img src="/about.png" alt="about" />
            </Box>
            <Box>
              <h1 className="heading">ABOUT</h1>
              <br />
              <p>
                The goal of Hack Club is to help you become a hacker. Being
                entirely student led, this provides you the space to learn and
                grow with the community. What is a Hack Club? The Hack Club is a
                non-profit global network of young makers and student-led
                programming clubs where young people create projects and thrive
                to think big and make an impact with technology around the
                world.
              </p>
              <br />
              <p>
                What is a Hack Club? The Hack Club is a non-profit global
                network of young makers and student-led programming clubs where
                young people create projects and thrive to think big and make an
                impact with technology around the world. We at Hack Club NITRR!
                🚀 Hack Club NITRR is a community where students from different
                branches and domains can come together and tinker with various
                new and upcoming techs. We aim to spread technical awareness
                among students who are new to this field and are confused about
                where to start.
              </p>
              <br />
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <p></p>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
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
            padding: 20px 40px;
          }

          .content {
            width: 100%;
            max-width: 1300px;
            color: white;
            font-family: 'Comfortaa', cursive;
            backdrop-filter: blur(12px);
            background: rgba(0, 1, 53, 0.253);
            border-radius: 20px;
            padding: 20px;
            letter-spacing: 1px;
          }
          @media screen and (max-width: 767px) {
            .content_container {
              padding: 20px 10px;
            }

            .content {
              backdrop-filter: blur(8px);
              background: rgba(0, 1, 53, 0.253);
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};
