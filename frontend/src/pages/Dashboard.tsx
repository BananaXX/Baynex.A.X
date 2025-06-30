// frontend/src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react'
import StrategyPanel from '../components/StrategyPanel'
import Baynexa from '../components/Baynexa'

const Dashboard = () => {
  const [message, setMessage] = useState('🚀 Loading BAYNEX.A.X Dashboard...')

  useEffect(() => {
    setTimeout(() => {
      setMessage('✅ BAYNEX.A.X Dashboard is LIVE and Ready!')
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">{message}</h1>
      <Baynexa />
      <StrategyPanel />
    </div>
  )
}

export default Dashboard
