import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'


export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
   <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">QuizMaster: An Interactive Web-based Platform</h1>

        <ol className="text-gray-700 space-y-4 mb-6">
            <li className="flex items-start">
                <span className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3 font-semibold">1</span>
                <p>You will be asked 10 questions one after another.</p>
            </li>
            <li className="flex items-start">
                <span className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3 font-semibold">2</span>
                <p>10 points are awarded for the correct answer.</p>
            </li>
            <li className="flex items-start">
                <span className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3 font-semibold">3</span>
                <p>Each question has three options. You can choose only one option.</p>
            </li>
            <li className="flex items-start">
                <span className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3 font-semibold">4</span>
                <p>You can review and change answers before the quiz finishes.</p>
            </li>
            <li className="flex items-start">
                <span className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3 font-semibold">5</span>
                <p>The result will be declared at the end of the quiz.</p>
            </li>
        </ol>

        <form id="form" className="mb-6">
            <input
                ref={inputRef}
                className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="Enter your Username*"
            />
        </form>

        <div className="text-center">
            <Link
                className="inline-block w-full md:w-auto px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                to={'quiz'}
                onClick={startQuiz}
            >
                Start Quiz
            </Link>
        </div>
    </div>
</div>

   </>
  )
}
