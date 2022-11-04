import { useState, useEffect } from 'react'
import Graph from './Graph'
import getData from './functions/getData.js'
import './styles/quiz.css'
const url = 'https://evtssx.deta.dev/all_scores_average'

const Quiz = () => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    getData(url, setScores)
  }, [])

  return (
    <div>
      <div className='info-container'>
        <h1>Quiz summary</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, ex.
          Sapiente reprehenderit maiores blanditiis aut numquam ducimus
          incidunt, molestias quae. Magni reprehenderit quae quis quasi
          accusamus animi? Officia tempora aut amet cum, ut dolore dignissimos.
          Doloremque libero consequuntur magnam nisi?
        </p>
      </div>

      <Graph graph_name='graph_home' data={scores} />
    </div>
  )
}
export default Quiz
