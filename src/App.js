import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Quiz from './components/QuizHome'
import Q1 from './components/Q1'
import Q2 from './components/Q2'
import Q3 from './components/Q3'
import Q4 from './components/Q4'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Quiz />}></Route>
          <Route path='/q1' element={<Q1 />}></Route>
          <Route path='/q2' element={<Q2 />}></Route>
          <Route path='/q3' element={<Q3 />}></Route>
          <Route path='/q4' element={<Q4 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
