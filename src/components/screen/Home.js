import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

//use navigate works like a link, click cheyyumbo namukk oru pagilekk direct cheyyam
//bracket n akath open aakand apage kodukkuka

function Home() {
  let navigate = useNavigate();
  return (
    <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
      <h1>Home page</h1>
      <h3 onClick={() => navigate('/contact')}>click here to contact page</h3>
    </>
    
  )
}

export default Home;