import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
}
const Nav = () => {
  return (
    <div>
      <Link to='/' style={linkStyle}>
        Quizzes
      </Link>
      <Link to='/q1' style={linkStyle}>
        Quiz 1
        <Link to='/q2' style={linkStyle}>
          Quiz 2
        </Link>
        <Link to='/q3' style={linkStyle}>
          Quiz 3
        </Link>
        <Link to='/q4' style={linkStyle}>
          Quiz 4
        </Link>
      </Link>
    </div>
  )
}
export default Nav
