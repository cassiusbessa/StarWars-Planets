import styled from 'styled-components';
import starbackground from '../assets/imgs/starbg2.jpg';

const IntroButton = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url(${starbackground});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

  button {
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        width:  350px;
        height: 350px;
        border-radius: 50%;
        margin-left: 1rem;
        
    }
  }


`;

export default IntroButton;
