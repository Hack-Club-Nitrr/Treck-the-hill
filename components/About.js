import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Image from 'next/Image';

export const About = () => {
  return (
    <div>
      <div className="content_container">
        <div className="content">
          <SimpleGrid minChildWidth="40%">
            <Box>
              <img src="/about.png" alt="about" />
            </Box>
            <Box>
              {' '}
              <h1 className="heading">ABOUT</h1>
              <br />
              <p>
                ABOUT Discover your craft this fall at HackGT 8 from October
                22nd - 24th! We’re back with the eighth iteration of our
                flagship event where we bring you to the HackGT marketplace to
                support you as you hone your hacking skills and explore a
                weekend filled with community and compassion.
              </p>
              <br />
              <p>
                This year, we’ll be welcoming over 1,500 talented hackers from
                around the world to win amazing prizes, meet new people, and
                experience a weekend filled with quests and adventure!
              </p>
              <br />
              <p>
                Our first-ever hybrid event will redefine the hacker experience
                by bringing you the best of both worlds. Not only will we be
                supplying workshops, mentors, and tech talks, but we will also
                have built-in, cross-platform interactions to bridge the virtual
                and in-person experiences.
              </p>
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
            z-index: 10000000000000;
          }
          .content {
            width: 100%;
            max-width: 1300px;
            color: white;
            font-family: 'Comfortaa', cursive;
          }

          .content {
            width: 100%;
            max-width: 700px;
            color: white;
            font-family: 'Comfortaa', cursive;
            backdrop-filter: blur(12px);
            background: rgba(0, 1, 53, 0.253);
            border-radius: 20px;
            padding: 20px;
            letter-spacing: 1px;
          }
        `}
      </style>
    </div>
  );
};
