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
              <h1 className="heading">About</h1>
              <br />
              <p>
                “Trek the hill 2022” brings an adventurous journey of 15 days
                through its{' '}
                <b
                  style={{
                    color: 'rgb(26 188 156)',
                    textShadow: '0 0 10px rgb(26 188 156)',
                  }}
                >
                  bootcamp + 48 hour hackathon
                </b>{' '}
                where beginners can acquire ideas on how to get started,
                providing access to learning materials, present their unique
                ideas and abilities, and push their limits with creativity and
                proficiency. We strive to make it a fun, informative, and
                instructive experience.
              </p>
              <br />
              <p>
                Hack Club is a non-profit global network of young makers and
                student-led programming clubs where young people create projects
                and thrive to think big and make an impact with technology
                around the world. We at Hack Club NITRR! 🚀 aim to spread
                technical awareness among students who are new to this field and
                are confused about where to start.
              </p>
              <br />
              <p>
                CyberJunk is a global initiative to promote international
                infosec research culture. The community provides free courses
                and uncountable infosec resources like roadmaps & tools.
                CyberJunk also conducts various live events and workshops to
                learn and sharpen cybersecurity skills.
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
          @import url('https://fonts.googleapis.com/css2?family=Lemonada&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');

          .heading {
            font-family: 'Nova Mono', monospace;
            font-size: 34px;
            color: rgb(26 188 156);
            text-align: center;
            text-shadow: 0 0 10px rgb(26 188 156);
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
