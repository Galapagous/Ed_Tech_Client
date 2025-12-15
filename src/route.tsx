import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/template/home.layout';
import Homepage from './pages/homepage';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Blog from './pages/blog';
import Single from './pages/blog/single';
import NotFound from './pages/NotFound';
import DashboardLayout from './components/template/dashboard.layout';
import Analytics from './pages/dashboard/analytics';
import Course from './pages/dashboard/course';
import ViewCourse from './pages/dashboard/course/viewCourse';
import Quiz from './pages/dashboard/quiz';
import StartQuiz from './pages/dashboard/quiz/quiz';
import Result from './pages/dashboard/result';
import ViewResult from './pages/dashboard/result/view';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/single',
        element: <Single />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'courses',
        element: <Course />,
      },
      {
        path: 'courses/view/:id',
        element: <ViewCourse />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'result/view/:id',
        element: <ViewResult />,
      },
      {
        path: 'quiz/start/:id',
        element: <StartQuiz />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
