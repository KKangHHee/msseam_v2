import NavItem from '@/components/atoms/navItem/NavItem';
import './NavList.css';

interface NavListProps {
  categories: {
    text: string;
    path: string;
  }[];
  weight?: 'semibold' | 'bold';
}
const NavList = ({ categories, weight = 'bold' }: NavListProps) => {
  return (
    <div className='navList'>
      <ul>
        {categories.map((categories) => (
          <li key={categories.path}>
            <NavItem categories={categories} weight={weight} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
