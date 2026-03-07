import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfileSwitcher from './components/shared/ProfileSwitcher';
import DeniApp from './DeniApp';
import VincensiaApp from './vincensia/VincensiaApp';

function App() {
  return (
    <BrowserRouter basename="/profile_project">
      {/* Fixed top bar for switching between profiles (40px / h-10) */}
      <ProfileSwitcher />

      {/* Offset content below the ProfileSwitcher bar */}
      <div className="pt-10">
        <Routes>
          {/* Root → Deni's profile */}
          <Route path="/" element={<Navigate to="/denione" replace />} />

          {/* Deni One profile */}
          <Route path="/denione/*" element={<DeniApp />} />

          {/* Vincensia profile */}
          <Route path="/vincensia/*" element={<VincensiaApp />} />

          {/* Fallback → Deni's profile */}
          <Route path="*" element={<Navigate to="/denione" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
