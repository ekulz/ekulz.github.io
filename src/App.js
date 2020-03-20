import React from 'react';
import './App.css';
import { Container, Header, Divider, Icon, Segment, Button } from 'semantic-ui-react'

const App = () => {
  
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="App">
      <Container text textAlign='center'>

        <Segment basic className='segmentHeader' size='huge'>
          <Header as='h1' icon textAlign='center' color='blue'>
            <Icon name='terminal' circular/>
            <Header.Content>Luke Hickin</Header.Content>
          </Header>
        </Segment>

        <Divider className='dividerHeader'/>

        <Segment basic size='large' textAlign='center'>
          <p>
            Hi, I'm <b>Luke</b>. 
            <span role="img" aria-label="wave"> 👋</span>
          </p>
          <p>
            I recently moved to Vancouver BC, Canada!
            <span role="img" aria-label="flag-nz"> 🇳🇿</span>
          </p>
          <p>
            I'm a Software Engineer currently looking for opportunities in the area. 
            If are looking for devs, please <a href={"mailto:lukehickin@hotmail.com"}>contact me!</a>
          </p>
          <p>
            I looooove <b>software development</b>, but I have a passion for <b>DevOps</b>. 
            My ideal role is one where I can do both <span role="img" aria-label="blush">😊</span>
          </p>
        </Segment>

        <Divider />

        <Segment basic size='large'>
          <p>Get in touch, I'd love to connect with you:</p>
          <div>
            <Button color='black' onClick={() => handleClick('https://github.com/ekulz')}>
              <Icon name='github' /> Github
            </Button>
            <Button color='linkedin' onClick={() => handleClick('https://www.linkedin.com/in/lhickin/')}>
              <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button color='twitter' onClick={() => handleClick('https://twitter.com/lukeee_h')}>
              <Icon name='twitter' /> Twitter
            </Button>
          </div>
        </Segment>

      </Container>
    </div>
  );
};

export default App;
