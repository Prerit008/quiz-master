

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
import ResultTable from './ResultTable';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },

  {
    path : '/leaderboard',
    element : <ResultTable />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <footer className="text-center py-4 bg-gray-800 text-white bottom-0 sticky w-full">
        <p>© 2025 QuizMaster. Credits: Prerit, Shreya, Tanishq, Shubham.</p>
      </footer>
    </>
  );
}

export default App;
