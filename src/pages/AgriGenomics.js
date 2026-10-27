import React from 'react'
import AgriGenoBanner from '../components/Agri/AgriGenoBanner'
import FarmInfrastructure from '../components/Agri/FarmInfrastructure'
import LivestockCare from '../components/Agri/LivestockCare'
import LivestockNutrition from '../components/Agri/LivestockNutrition'
import AnimalIVFWorkflow from '../components/Agri/AnimalIVFWorkflow'
import QualityAssurance from '../components/Agri/QualityAssurance'
import AgriFAQs from '../components/Agri/AgriFAQs'
import Vacination from '../components/Agri/Vacination'
import ReproductiveBiotech from '../components/Agri/Reproductivebiotech'

const AgriGenomics = () => {
  return (
    <div>
      <AgriGenoBanner/> 
      <FarmInfrastructure/>
      <LivestockCare/>
      <LivestockNutrition/>
      <Vacination/>
      <AnimalIVFWorkflow/>
      <ReproductiveBiotech/>
      <QualityAssurance/>
      <AgriFAQs/>
      
    </div>
  )
}

export default AgriGenomics