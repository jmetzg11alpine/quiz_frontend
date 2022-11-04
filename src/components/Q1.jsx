import { useState, useEffect } from 'react'
import Quiz from './Quiz'
import Graph from './Graph'
import getData from './functions/getData.js'
import questions from './data/q1_data'
import './styles/quiz.css'

const url = 'https://evtssx.deta.dev/q1'
const Q1 = () => {
  const [scores, setScores] = useState([])
  const [quizSubmitted, setQuizSubmitted] = useState(0)

  useEffect(() => {
    getData(url, setScores)
  }, [quizSubmitted])

  return (
    <div>
      <div className='info-container'>
        <h1>Quiz 1 - Geography</h1>
        <Quiz
          questions={questions}
          url={url}
          setQuizSubmitted={setQuizSubmitted}
        />
      </div>

      <Graph graph_name='graph_1' data={scores} />
    </div>
  )
}
export default Q1
