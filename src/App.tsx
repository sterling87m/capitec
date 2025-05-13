import React, { useState } from "react";
import './index.css';

const LOGO_URL = "https://www.qmatic.com/hubfs/Capitec_Bank_logo.svg.png"; // Clean logo

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="min-h-screen bg-[#fbfbfb] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 pt-6 pb-3 bg-white drop-shadow-sm">
        <div className="flex items-center gap-8">
          <img src={LOGO_URL} alt="Capitec" className="h-8"/>
          <nav className="flex gap-6 text-lg font-medium">
            <a className="border-b-2 border-black pb-1" href="#">Personal</a>
            <a className="relative text-gray-800 pb-1 ml-2" href="#">
              Business <span className="bg-red-500 text-xs text-white rounded px-1 py-0.5 absolute -top-3 left-10">New</span>
            </a>
          </nav>
        </div>
        <div className="flex-1 flex justify-center">
          <input type="text" placeholder="Find ways to bank better" className="w-80 border border-gray-300 rounded px-4 py-1 shadow-inner focus:outline-none"/>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-700">Menu ▼</a>
          <button
            className="flex items-center gap-1 border-2 border-blue-700 text-blue-700 rounded-lg px-3 py-1 font-medium shadow-sm hover:bg-blue-50"
            onClick={() => setShowLogin(true)}
          >
            <span className="material-icons">account_circle</span>
            Online Banking <span className="ml-1 underline">Sign in</span>
          </button>
          <button className="border border-blue-600 text-blue-700 rounded-md px-4 py-1 bg-white hover:bg-blue-50">Get the app</button>
          <button className="bg-blue-700 text-white rounded-md px-4 py-1 hover:bg-blue-800">Switch to Capitec</button>
        </div>
      </header>
      {/* Secondary Navigation */}
      <div className="flex items-center gap-8 px-12 py-2 bg-[#fbfbfb] border-b border-gray-100 text-gray-800/90 text-base">
        <div className="flex gap-3 items-center"><span className="material-icons">compare_arrows</span> Transact</div>
        <div className="flex gap-3 items-center"><span className="material-icons">bar_chart</span> Save</div>
        <div className="flex gap-3 items-center"><span className="material-icons">shield</span> Insure</div>
        <div className="flex gap-3 items-center"><span className="material-icons">credit_card</span> Credit</div>
      </div>
      {/* Main Feature Card */}
      <main className="flex-1 flex items-center justify-center relative">
        {/* Banner background graphic (blurred, pink as in screenshot) */}
        <div className="absolute inset-0 flex justify-center items-center opacity-80 blur-[2px]">
          <div className="w-[600px] h-[240px] bg-pink-500 rounded-2xl"></div>
        </div>
        <section className="relative z-10 flex rounded-3xl bg-white shadow-xl max-w-4xl w-full mt-24 h-[340px]">
          {/* Card left (tabs + personal) */}
          <div className="flex-1 flex flex-col justify-center pl-12 pr-8">
            <div className="flex gap-2 mb-7">
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium shadow">Personal Banking</button>
              <button className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full font-medium">Business Banking</button>
            </div>
            <h2 className="text-3xl font-semibold mb-4">Personal</h2>
            <p className="mb-7 text-lg text-gray-700">Sign in to your personal banking profile or easily switch to your business banking profile above.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg shadow font-semibold hover:bg-blue-700 transition-colors">Personal online banking</button>
          </div>
          {/* Card right (image) */}
          <div className="flex-1 bg-gray-100 rounded-r-3xl flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Family using online banking" className="object-cover w-full h-full rounded-r-3xl"/>
          </div>
          <button className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-gray-700">×</button>
        </section>
      </main>
      {/* Cookie Consent Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-8 py-3 bg-white shadow text-gray-700 gap-8">
          <div>
            Cookies make our website work properly and give you a more personalised experience. You can change your cookies settings at any time. <a href="#" className="underline text-blue-600">Capitec Cookie Policy</a>
          </div>
          <div className="flex gap-4">
            <button className="border border-blue-600 text-blue-700 rounded-md px-4 py-1 bg-white hover:bg-blue-50">Cookies Settings</button>
            <button className="bg-blue-600 text-white rounded-md px-4 py-1 hover:bg-blue-700">Accept All Cookies</button>
          </div>
        </div>
      </footer>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-700" onClick={()=>setShowLogin(false)}>×</button>
            <h3 className="text-2xl font-bold mb-6">Online Banking Login</h3>
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="account-number">Account Number</label>
                <input id="account-number" name="account-number" type="text" required className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="username"/>
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="current-password"/>
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded shadow mt-2 transition-colors text-lg">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
