import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://127.0.0.1:8000/all_scores_average'

const Quiz = () => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    axios.get(url, { headers: {} }).then((response) => {
      setScores(response.data)
    })
  }, [])

  console.log(scores)

  return (
    <div>
      <h1>Quiz summary</h1>
      <p>q1</p>
      <p>q2</p>
      <p>q3</p>
      <p>q4</p>
      <p>some cool d3</p>
      <h2>{scores}</h2>
      <p>tester</p>
    </div>
  )
}
export default Quiz
