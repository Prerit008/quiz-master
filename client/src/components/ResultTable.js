import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'
import { useNavigate } from 'react-router-dom'
export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`//localhost:8080/api/result`, (res) => {
            setData(res)
        })
    })
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1); // -1 goes one step back in the browser history
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Leaderboard</h1>

    <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse">
      <thead className="bg-gray-100 text-left text-sm font-semibold">
        <tr>
          <td className="px-4 py-2 border-b">Name</td>
          <td className="px-4 py-2 border-b">Attempts</td>
          <td className="px-4 py-2 border-b">Earn Points</td>
          <td className="px-4 py-2 border-b">Result</td>
        </tr>
      </thead>
      <tbody>
        {data?.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-4">No Data Found</td>
          </tr>
        ) : (
          [...data]
          .sort((a, b) => b?.points - a?.points) // Sort by points in descending order
          .map((v, i) => (
            <tr className="hover:bg-gray-50" key={i}>
              <td className="px-4 py-2 border-b">{v?.username || ''}</td>
              <td className="px-4 py-2 border-b">{v?.attempts || 0}</td>
              <td className="px-4 py-2 border-b">{v?.points || 0}</td>
              <td className="px-4 py-2 border-b">{v?.achived || ""}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    <button
      onClick={goBack}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full mt-4"
    >
      Back
    </button>
  </div>
  
  </div></div>
  )
}
