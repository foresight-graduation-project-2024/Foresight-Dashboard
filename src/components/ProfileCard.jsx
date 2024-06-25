import styled from "styled-components";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Card = styled.div`
  background: var(--color-grey-50);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Header = styled.div`
  background: var(--color-primary);
  padding: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: auto;
  width: 100%;
  object-fit: cover;
  max-width: 140px;
  max-height: 140px;
`;

const Name = styled.h2`
  color: var(--color-grey-700);
  font-size: 24px;
  margin: 20px 0 10px;
`;

const Title = styled.h3`
  color: var(--color-grey-500);
  font-size: 16px;
  margin: 0 0 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: var(--color-primary);
  margin: 0 10px;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: var(--color-primary-variant);
  }
`;

const ProfileCard = ({
  avatar,
  peopleName,
  peopleJob,
  LinkedInLink,
  GitHubLink,
}) => {
  return (
    <Card>
      <Header>
        <Avatar src={avatar} alt={`${peopleName}'s avatar`} loading="lazy" />
      </Header>
      <Name>{peopleName}</Name>
      <Title>{peopleJob}</Title>
      <SocialLinks>
        <SocialLink href={LinkedInLink} aria-label="LinkedIn profile">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href={GitHubLink} aria-label="GitHub profile">
          <FaGithub />
        </SocialLink>
      </SocialLinks>
    </Card>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  peopleName: PropTypes.string.isRequired,
  peopleJob: PropTypes.string.isRequired,
  LinkedInLink: PropTypes.string.isRequired,
  GitHubLink: PropTypes.string.isRequired,
};

export default ProfileCard;
