import './App.css'
import Clock from './study/Clock'
import CommentList from './study/CommentList'

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold">Vite + React</h1>
      <p className="text-red-100 text-3xl">
        study
      </p>
      <Clock />
      <CommentList />
    </>
  )
}

export default App
