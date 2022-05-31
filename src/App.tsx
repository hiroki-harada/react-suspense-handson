import { Suspense, useState } from 'react'
import { DataLoader1, DataLoader2 } from './Dataloader'
import './App.css'
import { RenderingNotifier } from './RenderingNotifier';

function App() {
  const [count, setConunt] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense"/>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader1/>
        <DataLoader2/>
      </Suspense>
    </div>
  )
}

export default App
