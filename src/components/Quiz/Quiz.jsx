import React from 'react'
import cls from './Quiz.module.scss'
import { questions } from './Utils/Questions'

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [score, setScore] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false)


  const handleAnswer = (isCorrect) => {

    isCorrect && setScore(score + 1)

    const nextQuestion = currentQuestion + 1

    nextQuestion < questions.length ? setCurrentQuestion(nextQuestion) : setShowScore(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <React.Fragment>
      <div className={cls.container}>
        {
          showScore
            ? <div className={cls.section_score}>
              <h2>Правильных ответов {score} из {questions.length}</h2>
              <div className={cls.right_answers}>
                <ul className={cls.mainList}>
                  {
                    questions.map(({ questionText, answerOptions }, i) => (
                      <ul className={cls.innerList} key={i}>
                        <h2 className={cls.questionText}>
                          {questionText}?
                        </h2>
                        {
                          answerOptions.map(({ answerText, isCorrect }, i) => (
                            <li
                              className={isCorrect == false ? cls.wrong : cls.right}
                            >{answerText}</li>
                          ))
                        }
                      </ul>
                    ))
                  }
                </ul>
              </div>
              <button
                onClick={restartQuiz}
                className={cls.restart_btn}
              >
                Restart
              </button>
            </div>
            : <div className={cls.quiz_block}>
              <div className={cls.top}>
                <h2 className={cls.title}>Qestion {currentQuestion + 1}/{questions.length}</h2>
              </div>
              <div className={cls.question}>
                <h2>{questions[currentQuestion].questionText}?</h2>
              </div>
              <div className={cls.bottom}>
                <ul className={cls.list}>
                  {questions[currentQuestion].answerOptions.map(({ answerText, isCorrect }, index) => (
                    <li
                      key={index}
                      onClick={() => handleAnswer(isCorrect)}
                    >
                      {answerText}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        }


      </div>
    </React.Fragment>
  )
}

export default Quiz
