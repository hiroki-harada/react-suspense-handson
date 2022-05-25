import { Suspense, useState } from 'react'
import { DataLoader } from './Dataloader'
import './App.css'
import { RenderingNotifier } from './RenderingNotifier';

function App() {
  const [count, setConunt] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense"/>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader/>
      </Suspense>
    </div>
  )
}

export default App
