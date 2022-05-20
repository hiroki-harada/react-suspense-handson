import { Suspense, useState } from 'react'
import AlwaysSuspend from './AlwaysSuspend'
import {SometimesSuspend} from './SometimesSuspend'
import './App.css'
import { RenderingNotifier } from './RenderingNotifier';

function App() {
  const [count, setConunt] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense"/>
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense"/>
        <button className='border p-1' onClick={() => setConunt((c) => c+1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

export default App
