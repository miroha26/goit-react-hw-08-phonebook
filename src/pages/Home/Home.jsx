import React from 'react';
import { HomeContainer,Content } from './Home.styled';
import { FaAddressBook, FaHandsHelping, FaSmileWink } from 'react-icons/fa';
const Home = () => {
  return (
    <HomeContainer>
      <Content>
        {' '}
        Hi there... <FaHandsHelping />
      </Content>
      <Content>
        Welcome to PhoneBook!
        <FaAddressBook />
      </Content>
      <Content>
        Say goodbye to the hassle of managing your contacts. With PhoneBook, you
        can easily keep track of all your friends, family, and colleagues in one
        place. Your data is always encrypted and protected. Whether you're a
        busy bee or a social butterfly, PhoneBook has got you covered.
      </Content>
      <Content>
        Sign up now and start organizing your contacts like a pro! <FaSmileWink />
      </Content>
    </HomeContainer>
  );
};
export default Home;