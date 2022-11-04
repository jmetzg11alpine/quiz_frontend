import { useState, useEffect } from 'react'
import Quiz from './Quiz'
import Graph from './Graph'
import getData from './functions/getData.js'
import questions from './data/q2_data'

const url = 'https://evtssx.deta.dev/q2'

const Q2 = () => {
  const [scores, setScores] = useState([])
  const [quizSubmitted, setQuizSubmitted] = useState(0)

  useEffect(() => {
    getData(url, setScores)
  }, [quizSubmitted])

  return (
    <div>
      <div className='info-container'>
        <h1>Quiz 2 - STEM</h1>
        <Quiz
          questions={questions}
          url={url}
          setQuizSubmitted={setQuizSubmitted}
        />
      </div>
      <Graph graph_name='graph_2' data={scores} />
    </div>
  )
}
export default Q2
