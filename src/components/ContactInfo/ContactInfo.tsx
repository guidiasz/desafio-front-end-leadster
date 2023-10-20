import Cluster from '@/components/Cluster';
import { Flow } from '@/components/CssUtilities';
import DescriptionList from '@/components/DescriptionList';
import Heading from '@/components/Heading';
import SocialIcon from '@/components/SocialIcon';
import VisuallyHidden from '@/components/VisuallyHidden';
import data from '@/content/contactInfo';
import React from 'react';
import styled, { css } from 'styled-components';

type TContactInfo = React.PropsWithChildren & {
  as?: React.ElementType;
};

const SocialIconList = () => {
  return (
    <>
      <VisuallyHidden>Redes Sociais:</VisuallyHidden>
      <Cluster as={'ul'} gap={'s'}>
        {data.social.map((item, index) => (
          <li key={index}>
            <SocialIcon href={item.link} icon={item.name} />
          </li>
        ))}
      </Cluster>
    </>
  );
};

const ContactInfo = ({ children, ...props }: TContactInfo) => {
  return (
    <Wrapper {...props}>
      <Heading weight="bold" size="0">
        Siga a Leadster
      </Heading>
      <ContactList data={data.contact} />
      <SocialIconList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flow({ flowSpace: 'm', split: true })}
  ${({ theme }) => css``}
`;
const ContactList = styled(DescriptionList)`
  margin-bottom: auto;
`;

export default ContactInfo;
