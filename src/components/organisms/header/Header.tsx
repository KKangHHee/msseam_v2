import LoginAndProfile from '@/components/molecules/loginAndProfile/LoginAndProfile';
import NavList from '@/components/molecules/navList/NavList';
import { categories, extraCategories } from '@/type/navItems';
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className='header-top'>
        <div className='logo' />
        <LoginAndProfile />
      </div>
      <nav>
        <NavList categories={categories} />
        <div>
          <NavList categories={extraCategories} weight='semibold' />
        </div>
      </nav>
    </header>
  );
};
export default Header;
