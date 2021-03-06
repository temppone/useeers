import React, { useContext } from 'react';
import Login from '../../components/Login';
import { FlexContainer } from '../../shared/flexContainer';
import { ReactComponent as LoginSvg } from '../../assets/login.svg';
import Head from '../../components/Head';

const Home = () => {
  // const { userLogin } = useContext(useContext);

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
      wdith="100%"
      margin="0 auto"
    >
      <Head title="Login" description="Home do site useeers" />
      <LoginSvg width="20rem" height="15rem" />
      <Login />

      {/* <Input label='email' name='email' required='true'></Input> */}
    </FlexContainer>
  );
};

export default Home;
