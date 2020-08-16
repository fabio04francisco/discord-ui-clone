import React from 'react';

import { Container, Row, User, Avatar } from './styles';

import userChat from '../../data/userChat.json';

interface UserProps {
  nickname: string;
  isBot?: boolean;
};

  

const UserRow: React.FC<UserProps> = ({ nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return ( 
    <Container>
      <Row>Disponíel - {userChat.userOnline.length}</Row>

      {userChat.userOnline.map((user) =>
        <UserRow nickname={user.nickname} isBot={user.isBot}/>
      ) }

      <Row>Offline - {userChat.userOffline.length}</Row>

      {userChat.userOffline.map((user) =>
        <UserRow nickname={user.nickname} isBot={user.isBot}/>
      ) }
    </Container>
  );
  };

export default UserList;