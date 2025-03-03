import Button from '@/components/atoms/button/Button';
import AccountManagement from '@/components/atoms/textSeparator/AccountManagement';
import { useNavigate } from 'react-router-dom';
import './LoginAndProfile.css';
const LoginAndProfile = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
    console.log('-- login');
  };
  return (
    <>
      <div className='loginAndProfile-login'>
        <span>M쌤이 되어 더 자유롭데 이용하세요</span>
        <Button text='로그인하고 이용하기' size='md' onClick={handleLogin} color='light-purple' />
        <AccountManagement />
      </div>
    </>
  );
};
export default LoginAndProfile;
