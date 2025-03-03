import mlogo from '@/assets/logo/mlogo.png';
import TextSeparator from '@/components/atoms/textSeparator/TextSeparator';
import './Footer.css';

const option = [
  { text: '이용약관', path: '/findId' },
  { text: '개인정보 처리 방침', path: '/findPw' },
  { text: '문의 이메일', path: '/signup' },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <TextSeparator array={option} />
      <hr />
      <img src={mlogo} alt='logo' />
    </footer>
  );
};
export default Footer;
