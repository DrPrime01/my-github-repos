import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import RepositoriesWithErrorBoundary from './Components/Pages/Repositories'
import SingleRepo from './Components/Pages/SingleRepo'
import SharedLayout from './Components/OtherComponents/SharedLayout'
import PageNotFound from './Components/OtherComponents/PageNotFound'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="repositories" element={<RepositoriesWithErrorBoundary />} />
          <Route path="repositories/:singleRepoId" element={<SingleRepo />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="repositories/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
