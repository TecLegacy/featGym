import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  page: string;
  id: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({ page, id: linkId, selectedPage, setSelectedPage }: Props) => {
  /**
   *lowercase page - later to use it as id
    typescript doesnt understand type of lower, "as" it to enum 
   */

  const lowerCase = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <>
      <AnchorLink
        href={`#${lowerCase}`}
        className={`${selectedPage === lowerCase ? 'text-primary-500' : ''}
           transistion duration-300 hover:text-primary-300
        `}
        id={linkId}
        onClick={() => setSelectedPage(lowerCase)}
      >
        {page}
      </AnchorLink>
    </>
  );
};

export default Links;
