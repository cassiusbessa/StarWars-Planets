import styled from 'styled-components';
import tablebg from '../assets/imgs/bgtable.jpg';

const TablePage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 150vh;
width: 100%;
background-image: url(${tablebg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
color: whitesmoke;

  h1 { 
    
    font-size: 4.5rem;
    font-weight: bold;
    margin-top: -50px;
    margin-bottom: 32px;
    color: rgba(248, 231, 28);

  }

  label {
    font-size: larger;
    font-weight: bold;
    color: #9f0613
  }

  .all-forms {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .numeric-filters {
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: rgba( 255, 255, 255, 0.05 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 0.5px );
        -webkit-backdrop-filter: blur( 0.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        margin-bottom: 10px;

        button {
            margin: 8px;
            padding: 16px;
            border-radius: 5%;
            background: rgba( 142, 216, 252, 0.2 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 0px );
            -webkit-backdrop-filter: blur( 0px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );]
            font-weight: bold;
            font-size: larger;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            color: #9f0613;

        }

    }

    input, select {
        border-radius: 0.5rem;
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 20px;
        font-family:sans-serif;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        padding: 8px 4px;
        max-width: 250px;
        border-radius: 18px;
        transition: box-shadow 0.1s;
        color: #9f0613;
        border: 1.5px solid #F2CB05

    }
  }

  table {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    text-align: center;
    margin: 16px;
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.5px );
    -webkit-backdrop-filter: blur( 0.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    th {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem;
        background: rgba( 255, 255, 255, 0.05 );
    }

    td {

        background: rgba( 255, 255, 255, 0.05 );
        
    }
  }


`;

export default TablePage;
