import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Theme from './pages/Theme'
import PhotoReport from './pages/PhotoReport'
import VideoReport from './pages/VideoReport'
import News from './pages/News'
import FAQ from './pages/FAQ'
import Participants from './pages/Participants'
import Benefits from './pages/Benefits'
import Documents from './pages/Documents'
import MeetingsSuccess from './pages/MeetingsSuccess'
import ParticipantsList from './pages/ParticipantsList'

function AppRoutes() {
  return (
    <Routes>

      <Route
        exact
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/about-expo"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />

      <Route
        path="/theme"
        element={
          <MainLayout>
            <Theme />
          </MainLayout>
        }
      />

      <Route
        path="/photo-report"
        element={
          <MainLayout>
            <PhotoReport />
          </MainLayout>
        }
      />

      <Route
        path="/video-report"
        element={
          <MainLayout>
            <VideoReport />
          </MainLayout>
        }
      />

      <Route
        path="/news"
        element={
          <MainLayout>
            <News />
          </MainLayout>
        }
      />

      <Route
        path="/faq"
        element={
          <MainLayout>
            <FAQ />
          </MainLayout>
        }
      />

      <Route
        path="/participants"
        element={
          <MainLayout>
            <Participants />
          </MainLayout>
        }
      />

      <Route
        path="/benefits"
        element={
          <MainLayout>
            <Benefits />
          </MainLayout>
        }
      />

      <Route
        path="/documents"
        element={
          <MainLayout>
            <Documents />
          </MainLayout>
        }
      />

      <Route
        path="/meetings-success"
        element={
          <MainLayout>
            <MeetingsSuccess />
          </MainLayout>
        }
      />

      <Route
        path="/participants-list"
        element={
          <MainLayout>
            <ParticipantsList />
          </MainLayout>
        }
      />

    </Routes>
  )
}

export default AppRoutes
