import React from 'react';

type Props = {
    question: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    questionNr,
    totalQuestions
}) => (
    <div className="question-card">
        <h1>Question: {question}</h1>
        <p>Question: {questionNr} / {totalQuestions}</p>
    </div>
)

export default QuestionCard;