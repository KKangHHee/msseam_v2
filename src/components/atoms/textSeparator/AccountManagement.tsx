import TextSeparator from '@/components/atoms/textSeparator/TextSeparator';

const AccountManagementArray = [
  { text: '아이디 찾기', path: '/findId' },
  { text: '비밀번호 찾기', path: '/findPw' },
  { text: '회원가입', path: '/signup' },
];

const AccountManagement = () => {
  return <TextSeparator array={AccountManagementArray} />;
};

export default AccountManagement;
