import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Quiz from './Components/Quiz'
import Rijecnik from './Components/Rijecnik'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <Navbar activeTab={activeTab} onNavigate={setActiveTab} />
      <main>
        {activeTab === 'home' && (
          <Hero
            onStartQuiz={() => setActiveTab('quiz')}
            onOpenDictionary={() => setActiveTab('dictionary')}
          />
        )}

        {activeTab === 'quiz' && (
          <Quiz onOpenDictionary={() => setActiveTab('dictionary')} />
        )}

        {activeTab === 'dictionary' && <Rijecnik />}
      </main>
    </>
  )
}

export default App