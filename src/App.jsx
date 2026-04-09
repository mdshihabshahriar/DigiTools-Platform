import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Main from './components/Main'
import Models from './components/Models'
import Navbar from './components/Navbar'

const getModels = async () => {
    const res = await fetch('/models.json')
    return res.json()
  }

  const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar />

      <Banner />

      <Main />

      <div className="tabs tabs-box justify-center bg-transparent mt-4">
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "model" ? "bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white" : "bg-transparent"}`} aria-label="Models" onClick={()=>{setActiveTab("model")}} defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white" : "bg-transparent"}`} aria-label={`Cart (${carts.length})`} onClick={()=>{setActiveTab("cart")}}/>
      </div>

      <Models modelPromise={modelPromise} />

    </>
  )
}

export default App
