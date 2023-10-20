import { TDescriptionList } from '@/components/DescriptionList';
import { TIcon } from '@/components/SocialIcon';

type TContactInfo = {
  contact: TDescriptionList['data'];
  social: Array<{
    name: TIcon;
    link: string;
  }>;
};

const contactInfo: TContactInfo = {
  contact: [
    {
      key: 'E-mail',
      value: 'contato@leadster.com.br',
      href: 'mailto:contato@leadster.com.br',
    },
    { key: 'Telefone', value: '(42) 98828-9851', href: 'tel:42988289851' },
  ],
  social: [
    { name: 'Linkedin', link: '#' },
    { name: 'Facebook', link: '#' },
    { name: 'Instagram', link: '#' },
  ],
};
export default contactInfo;
