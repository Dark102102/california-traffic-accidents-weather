import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import RainEffect from './components/Effects/RainEffect'
import Introduction from './components/Tabs/Introduction'
import DataPrepEDA from './components/Tabs/DataPrepEDA'
import Conclusions from './components/Tabs/Conclusions'
import { PCA, Clustering, ARM, DT, NB, SVM, Regression } from './components/Tabs/Models'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('Introduction')

  const renderContent = () => {
    switch (activeTab) {
      case 'Introduction': return <Introduction />
      case 'Data Prep/EDA': return <DataPrepEDA />
      case 'PCA': return <PCA />
      case 'Clustering': return <Clustering />
      case 'ARM': return <ARM />
      case 'DT': return <DT />
      case 'NB': return <NB />
      case 'SVM': return <SVM />
      case 'Regression': return <Regression />
      case 'Conclusions': return <Conclusions />
      default: return <Introduction />
    }
  }

  return (
    <div className="app-container">
      <RainEffect />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
