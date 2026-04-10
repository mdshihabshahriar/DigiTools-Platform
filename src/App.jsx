import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Main from './components/Main'
import Models from './components/Models'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import Cart from './components/Cart'

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
      <Navbar carts={carts} />

      <Banner />

      <Main />

      <div className="tabs tabs-box justify-center bg-transparent mt-4">
        <input type="radio" name="my_tabs_1" className={`tab rounded-l-full w-40 font-bold shadow-xl ${activeTab === "model" ? "bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white" : "bg-transparent"}`} aria-label="Products" onClick={()=>{setActiveTab("model")}} defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab rounded-r-full w-40 font-bold shadow-xl ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white" : "bg-transparent"}`} aria-label={`Cart (${carts.length})`} onClick={()=>{setActiveTab("cart")}}/>
      </div>

      {activeTab === "model" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models> : null}

      {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}></Cart> : null}

      <GetStarted />

      <Pricing />

      <Workflow />

      <Footer />

    </>
  )
}

export default App
