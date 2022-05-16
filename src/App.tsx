import { Suspense } from 'react'
import AlwaysSuspend from './AlwaysSuspend'
import './App.css'

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <p>ここは表示される。。。。？</p>
        <AlwaysSuspend/>
      </Suspense>
    </div>
  )
}

export default App
