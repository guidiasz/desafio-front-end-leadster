import stacksData from '@/content/linkStacks.json';
import AutoGrid from '@/components/AutoGrid';
import LinkStack from '@/components/LinkStack';
import ContactInfo from '@/components/ContactInfo';

const FooterGrid = () => {
  return (
    <AutoGrid as={'ul'}>
      {stacksData.map((linkList, index) => (
        <LinkStack as={'li'} key={index} title={linkList.title} items={linkList.items} />
      ))}

      <ContactInfo as={'li'} />
    </AutoGrid>
  );
};
export default FooterGrid;
