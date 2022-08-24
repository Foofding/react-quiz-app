import React from 'react';
import QuestionCard from './Components/QuestionCard';
import logo from './logo.svg';

const App = () => {

    const startTrivia = async () => {

    }
     const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

     }

     const nextQuestion = () => {
      
     }

      return (
      <div className="App">
      <h1> REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
      <a href="https://youtu.be/F2JCjVSZlG0?t=277">
        <button title="linkButton" style={{border:"1px solid darkgrey"}}> LINK </button>
      </a>
      </div>
      );
  
 
}

export default App;
