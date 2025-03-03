import TextSeparator from '@/components/atoms/textSeparator/TextSeparator';

const UserManagement = () => {
  const id = 1; // 전역 상태로 연결하기
  const menuItems = [
    { text: 'M쌤 채팅', path: '/chatting' },
    { text: '알림', path: '/#' },
    { text: '활동', path: '/#' },
    { text: '프로필 설정', path: `/user/${id}` },
  ];
  return <TextSeparator array={menuItems} />;
};
export default UserManagement;
