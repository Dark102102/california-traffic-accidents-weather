import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import RainEffect from './components/Effects/RainEffect'
import Introduction from './components/Tabs/Introduction'
import DataPrepEDA from './components/Tabs/DataPrepEDA'
import Conclusions from './components/Tabs/Conclusions'
import PCA from './components/Tabs/PCA'
import Clustering from './components/Tabs/Clustering'
import ARM from './components/Tabs/ARM'
import NaiveBayes from './components/Tabs/NaiveBayes'
import DecisionTrees from './components/Tabs/DecisionTrees'
import RegressionTab from './components/Tabs/RegressionTab'
import SVM from './components/Tabs/SVM'
import { DT, NB } from './components/Tabs/Models'
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
      case 'DT': return <DecisionTrees />
      case 'NB': return <NaiveBayes />

      case 'Regression': return <RegressionTab />
      case 'SVM': return <SVM />
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
