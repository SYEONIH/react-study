import './App.css'
import Accomodate from './study/Accommodate'
import Clock from './study/Clock'
import CommentList from './study/CommentList'
import DarkOrLight from './study/DarkOrLight'

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold">Vite + React</h1>
      <p className="text-red-100 text-3xl">
        study
      </p>
      <Clock />
      <CommentList />
      <Accomodate />
      <DarkOrLight />
    </>
  )
}

export default App
