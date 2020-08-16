import React from 'react';

import { 
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeardphoneIcon,
  SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Fábio Francisco</strong>
          <span>#4546</span>
        </UserData>
      </Profile>

      <Icons>
       <MicIcon />
       <HeardphoneIcon />
       <SettingsIcon />
      </ Icons>

    </Container>
  );
  }

export default UserInfo;