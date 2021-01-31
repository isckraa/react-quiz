import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const [question, setQuestion] = useState("");


  return (
    <div className="App">
      <QuestionCard
        question="How old are you?"
        questionNr={1}
        totalQuestions={10}
      />
    </div>
  );
}

export default App;
