import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';

const FAQ_DATA = [
  {
    id: 1,
    question: 'Who can participate in the hackathon?',
    answer:
      "Everyone is welcome to apply, be it students, professionals or turing-test certified androids. As long as you wish to learn something, we'll be waiting to see you. If you are under 18 years of age, we’ll need a parental consent form.",
  },
  {
    id: 2,
    question: 'Are there any fees to participate?',
    answer: 'Nope. Trek The Hill is free of cost and open for all.',
  },
  {
    id: 3,
    question: 'Do I need a team?',
    answer: (
      <>
        Yes! keeping overall fairness and productivity in mind, participants
        will be required to have teams of <b>EXACTLY 4 people</b>.
      </>
    ),
  },
  {
    id: 4,
    question: "What if I don't have a team?",
    answer: (
      <>
        No worries, head on to the{' '}
        <Link
          href={'https://discord.gg/vdJX7j7N'}
          target="_blank"
          color="green.300"
        >
          Discord channel
        </Link>{' '}
        and meet people in the{' '}
        <code>
          <b>#find-my-team</b>
        </code>{' '}
        channel.
      </>
    ),
  },
  {
    id: 5,
    question: 'Can I bring a project that was built earlier?',
    answer:
      "We apologize, but all the hackathon's projects should be developed during the event from scratch. All hackers will be strictly monitored for any kind of plagiarism or cheating.",
  },
];

const FAQItem = ({ question, answer }) => (
  <AccordionItem>
    <AccordionButton _focus={{ shadow: 'none' }} px="4" py="8">
      <Icon as={AccordionIcon} me="4" h="8" w="8" />
      <Text flex="1" textAlign="left" fontSize="2xl" fontWeight="600">
        {question}
      </Text>
    </AccordionButton>
    <AccordionPanel ps="16" pb="4" fontSize="lg">
      {answer}
    </AccordionPanel>
  </AccordionItem>
);

export default function FAQs() {
  return (
    <div>
      <Container py="20" maxW="container.lg" zIndex="300" color={'white'}>
        <div className="heading">Frequently asked questions</div>
        <Accordion allowToggle allowMultiple>
          {FAQ_DATA.map(({ question, answer, id }) => (
            <FAQItem key={id} question={question} answer={answer} />
          ))}
        </Accordion>
      </Container>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');

          .heading {
            text-align: center;
            font-family: 'Nova Mono', monospace;
            font-size: 32px;
            color: rgb(26 188 156);
            margin-bottom: 30px;
            text-shadow: 0 0 10px rgb(26 188 156);
          }
        `}
      </style>
    </div>
  );
}
