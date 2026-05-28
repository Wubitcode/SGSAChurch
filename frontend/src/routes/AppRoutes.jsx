import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from '../routes/ProtectedRoute'

/* =========================
   PUBLIC PAGES
========================= */
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Events from '../pages/Events'
import Media from '../pages/Media'
import Donate from '../pages/Donate'
import Membership from '../pages/Membership'

/* =========================
   AUTH PAGES
========================= */
import Login from '../pages/auth/Login'

/* =========================
   DASHBOARD LAYOUT
========================= */
import AdminLayout from '../layouts/AdminLayout'

/* =========================
   DASHBOARD PAGES
========================= */
import DashboardOverview from '../pages/dashboard/DashboardOverview'

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================
            PUBLIC WEBSITE ROUTES
        ====================================== */}
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/media"
            element={<Media />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/donate"
            element={<Donate />}
          />

          <Route
            path="/membership"
            element={<Membership />}
          />

        </Route>

        {/* =====================================
            AUTH ROUTES
        ====================================== */}
        <Route
          path="/auth/login"
          element={<Login />}
        />

        {/* =====================================
            PROTECTED ADMIN DASHBOARD
        ====================================== */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['admin']} />
          }
        >

          <Route
            path="/dashboard"
            element={<AdminLayout />}
          >

            {/* DASHBOARD HOME */}
            <Route
              index
              element={<DashboardOverview />}
            />

            {/* PLACEHOLDER ADMIN PAGES */}
            <Route
              path="members"
              element={<div>Members Page</div>}
            />

            <Route
              path="events"
              element={<div>Events Admin Page</div>}
            />

            <Route
              path="donations"
              element={<div>Donations Page</div>}
            />

            <Route
              path="reports"
              element={<div>Reports Page</div>}
            />

          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}