import { lazy, Suspense } from "react";
import styled from "styled-components";

const ProfileCard = lazy(() => import("../components/ProfileCard"));
import profileImg1 from "../assets/abdelnaser.webp";
import profileImg2 from "../assets/darsh.webp";
import profileImg3 from "../assets/shihab.webp";
import profileImg4 from "../assets/khalid.webp";
import profileImg5 from "../assets/saeed.webp";
import profileImg6 from "../assets/abdo.webp";

const Title = styled.h1`
  color: var(--color-grey-800);
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  color: var(--color-primary-variant);
`;

const Paragraph = styled.p`
  color: var(--color-grey-700);
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding-left: 20px;
  text-indent: -20px;

  &:before {
    content: "•";
    color: var(--color-primary);
    padding-right: 10px;
  }
`;

const ProfileSection = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 2.4rem 9.6rem;
  margin-top: 2.4rem;
`;

const profiles = [
  {
    img: profileImg1,
    name: "Ahmed Abdelnasser",
    job: "Data Engineer",
    LinkedInLink: "https://www.linkedin.com/in/ahmed-abdelnasser-sayed",
    GitHubLink: "https://github.com/ahmed3bnaser",
  },
  {
    img: profileImg2,
    name: "Mostafa Hamdy",
    job: "(React & React Native) Developer",
    LinkedInLink: "https://www.linkedin.com/in/mostafa-7amdy/",
    GitHubLink: "https://github.com/MostafaHamdy3",
  },
  {
    img: profileImg3,
    name: "Shihab Mahmoud",
    job: "Backend Developer",
    LinkedInLink: "https://www.linkedin.com/in/shihab-mahmoud-20a98b1b9/",
    GitHubLink: "https://github.com/S65001",
  },
  {
    img: profileImg4,
    name: "Khalid Mohammed",
    job: "Software Engineer",
    LinkedInLink: "https://www.linkedin.com/in/khalid-mohammed-763ba019b/",
    GitHubLink: "https://github.com/Khalid24225",
  },
  {
    img: profileImg5,
    name: "Ahmed Saeed",
    job: "Data scientist",
    LinkedInLink: "https://www.linkedin.com/in/ahmed-saeed-436124216/",
    GitHubLink: "https://github.com/AhmedSaeed0qfq",
  },
  {
    img: profileImg6,
    name: "Abdelrahman Essam",
    job: "Data Engineer",
    LinkedInLink: "https://eg.linkedin.com/in/abdelrahman-essam-4bb756252",
    GitHubLink: "https://github.com/horus208",
  },
];

const About = () => {
  return (
    <>
      <Title>About Our Predictive Maintenance Web App for Metro Lines</Title>
      <Section>
        <Paragraph>
          Harnesses the power of advanced artificial intelligence, big data, and
          large-scale software systems to deliver real-time monitoring,
          prediction, and historical analysis of equipment failures.
        </Paragraph>
      </Section>
      <Section>
        <SubTitle>Key Features</SubTitle>
        <List>
          <ListItem>
            Real-Time Monitoring: Stay ahead of potential issues with live
            updates and alerts.
          </ListItem>
          <ListItem>
            Predictive Analytics: Leverage AI to predict equipment failures
            before they happen.
          </ListItem>
          <ListItem>
            Historical Analysis: Access in-depth historical data to inform
            maintenance strategies.
          </ListItem>
          <ListItem>
            User-Friendly Dashboards: Intuitive interfaces designed for Business
            Managers, On-Site Workers, Monitoring Engineers, On-Site Maintenance
            Engineers, and Drivers.
          </ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Why Choose Our Solution?</SubTitle>
        <Paragraph>
          Our Predictive Maintenance System is more than just a tool it is a
          revolution in maintenance strategies.
        </Paragraph>
        <Paragraph>
          By integrating cutting-edge technologies with user-centric design, we
          provide a holistic solution that addresses the complex needs of the
          metro lines industry.
        </Paragraph>
        <List>
          <ListItem>
            For Business Managers: Gain insights to make informed decisions and
            improve overall operational efficiency.
          </ListItem>
          <ListItem>
            For On-Site Workers and Maintenance Engineers: Access detailed,
            actionable information to perform proactive maintenance and repairs.
          </ListItem>
          <ListItem>
            For Monitoring Engineers: Utilize advanced tools to monitor system
            performance and predict potential issues.
          </ListItem>
          <ListItem>
            For Drivers: Ensure a safe and reliable service for passengers
            through timely maintenance alerts.
          </ListItem>
        </List>
      </Section>

      <SubTitle>Development Team</SubTitle>
      <ProfileSection>
        <Suspense fallback={<div>Loading...</div>}>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.img}
              avatar={profile.img}
              peopleName={profile.name}
              peopleJob={profile.job}
              LinkedInLink={profile.LinkedInLink}
              GitHubLink={profile.GitHubLink}
            />
          ))}
        </Suspense>
      </ProfileSection>
    </>
  );
};

export default About;
