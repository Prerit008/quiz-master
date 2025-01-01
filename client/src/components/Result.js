import React from 'react'
// import '../styles/Result.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">QuizMaster: An Interactive Web-based Platform</h1>

    <div className="result space-y-4">
      <div className="flex justify-between items-center">
        <span>Username</span>
        <span className="font-semibold">{userId || ""}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Attempts :</span>
        <span className="font-semibold">{attempts || 0}/ {queue.length || 0}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Score :</span>
        <span className="font-semibold">{earnPoints || 0} / {totalPoints || 0}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Result</span>
        <span
          className={`font-semibold ${
            flag ? "text-green-400" : "text-red-500"
          }`}
        >
          {flag ? "Passed" : "Failed"}
        </span>
      </div>
    </div>
  
    <div className="mt-8 flex justify-center gap-3">
      <Link
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        to={"/"}
        onClick={onRestart}
      >
        Restart
      </Link>
      <Link
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        to={"/leaderboard"}
      >
        Leaderboard
      </Link>
    </div>
  
  </div>
  </div>
  
  )
}
