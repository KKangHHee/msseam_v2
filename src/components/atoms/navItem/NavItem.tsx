import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavItem.css';

interface NavItemProps {
  categories: {
    text: string;
    path: string;
  };
  weight: string;
}
const NavItem = ({ categories, weight }: NavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const select = location.pathname === categories.path;

  const handleClick = () => {
    navigate(categories.path);
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className={clsx('nav-item', { active: select }, weight)}
    >
      {categories.text}
    </button>
  );
};

export default NavItem;
