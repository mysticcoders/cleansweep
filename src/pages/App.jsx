import QuizPage from './QuizPage'
import StartPage from './StartPage'
import NotFoundPage from './NotFoundPage'

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/start" replace />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/start" element={<StartPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default App
