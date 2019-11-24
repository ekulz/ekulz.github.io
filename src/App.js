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
            <span role="img" aria-label="wave">👋</span>
          </p>
          <p>
            I live in Auckland, New Zealand. 
            <span role="img" aria-label="flag-nz">🇳🇿</span>
          </p>
          <p>
            I'm a software engineer currently working at <b>Xero</b>. 
            <span role="img" aria-label="laptop">💻</span>
          </p>
          <p>
            I love doing dev, I love doing ops, but it's even better when I can do both. 
            <span role="img" aria-label="nerd-face">🤓</span></p>
          <div>
            In my spare time, you'll find me hanging out with my friends, gaming, or playing soccer.<br></br>
            I'm a keen snowboarder in the winter, and to keep fit I've started learning kickboxing.<br></br>
            I also <b>love</b> cars. Like, a lot. My current daily is a BMW E90 330i. 
            <span role="img" aria-label="heart-eyes">😍</span>
          </div>
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
