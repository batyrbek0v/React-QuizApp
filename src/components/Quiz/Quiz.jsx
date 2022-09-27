import React from 'react'
import cls from './Quiz.module.scss'
import question from '../../assets/img/question.png'

const Quiz = () => {

  const questions = [
    {
      questionText: 'Столица США',
      answerOptions: [
        { answerText: 'Бостон', isCorrect: false },
        { answerText: 'Нью-Йорк', isCorrect: false },
        { answerText: 'Вашингтон', isCorrect: true },
        { answerText: 'Флорида', isCorrect: false },
      ]
    },
    {
      questionText: 'Как меня зовут',
      answerOptions: [
        { answerText: 'Эрлан', isCorrect: true },
        { answerText: 'Дони', isCorrect: false },
        { answerText: 'Доку', isCorrect: false },
        { answerText: 'Баха', isCorrect: false },
      ]
    },
    {
      questionText: 'Столица Кыргызстана',
      answerOptions: [
        { answerText: 'Ош', isCorrect: false },
        { answerText: 'Бишкек', isCorrect: true },
        { answerText: 'Талас', isCorrect: false },
        { answerText: 'Ысык-Кол', isCorrect: false },
      ]
    },
    {
      questionText: 'Формула Воды',
      answerOptions: [
        { answerText: 'H2O', isCorrect: true },
        { answerText: 'NaCo2', isCorrect: false },
        { answerText: 'H2SO4', isCorrect: false },
        { answerText: 'CaCH', isCorrect: false },
      ]
    },
  ]


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
                <ul>
                  {
                    questions.map(({ questionText, answerOptions }, i) => (
                      <ul key={i}>
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
