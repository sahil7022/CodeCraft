import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { VisualizerPage } from './pages/VisualizerPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/:slug" element={<LessonDetailPage />} />
            <Route path="/visualizer" element={<VisualizerPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
