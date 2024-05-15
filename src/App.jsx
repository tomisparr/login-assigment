import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'

import PersonalInfo from './Components/PersonalInfo'
import SelectPlan from './Components/SelectPlan'
import AddOn from './Components/AddOn'
import AddOn2 from './Components/AddOn2'
import Summary from './Components/Summary'
import Summary2 from './Components/Summary2'
import ThankYou from './Components/ThankYou'

function App() {
  const [step, setStep] = useState(1)
  const [change, setChange] = useState(1)
  const [fullname, setFullName] = useState("")
  const [emailaddress, setEmailAddress] = useState('')
  const [phonenumber, setPhoneNumber] = useState("")

  

  const onChangeFullName = (e) => {
    setFullName(e.target.value)
  }
  const onChangeEmailAddress = (e) => {
    setEmailAddress(e.target.value)
  }
  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const onNextSelectPlan = () => setStep(2)
  const onBackPersonalInfo = () => setStep(1)

  const onNextAddOns = () => setStep(3)
  const onBackSelectPlan = () => setStep(2)

  const onNextAddOns2 = () => setStep(6)
  const onBackAddOnPlan = () => setStep(3)
  const onNextSummary = () => setStep(4)

  const onBackAddOn = () => setStep(3)
  const onNextFinalPage = () => setStep(5)

 const onBackSummaryPage = () => setStep(4)
 const onNextSummaryPage = () => setStep(7)

  const onChangePage1 = () => setStep(1)
  const onChangePage2 = () => setStep(2)
  const onChangePage3 = () => setStep(3)
  const onChangePage4 = () => setStep(4)


  return (
    <div className={style.cont}>


      {step === 1 && (
        <PersonalInfo
        fullname={fullname}
        phonenumber={phonenumber}
        emailaddress={emailaddress}
        onChangeFullName={onChangeFullName}
        onChangeEmailAddress={onChangeEmailAddress}
        onChangePhoneNumber={onChangePhoneNumber}
        onNextSelectPlan={onNextSelectPlan}
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}
         />

      )}


      {step === 2 && (
         <SelectPlan 
         onBackPersonalInfo={onBackPersonalInfo}
         onNextAddOns={onNextAddOns}
         onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}
          />)}

      {step === 3 && (
        <AddOn
        onBackSelectPlan={onBackSelectPlan}
        onNextAddOns2={onNextAddOns2}
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}
         />

      )}


      {step === 6 && (
        <AddOn2
        onBackAddOnPlan={onBackAddOnPlan}
        onNextSummary={onNextSummary}
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}

        />
      )}

      
      {step === 7 && (
        <Summary
        onBackSummaryPage={onBackSummaryPage}
        onNextFinalPage={onNextFinalPage}
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}
         />

      )}

      {step === 4 && (
        <Summary2
        onBackAddOn={onBackAddOn}
        onNextSummaryPage={onNextSummaryPage}
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}

        />
      )}

      {step === 5 && (
        <ThankYou
        onChangePage1={onChangePage1}
        onChangePage2={onChangePage2}
        onChangePage3={onChangePage3}
        onChangePage4={onChangePage4}
        />
      )}
      

    </div>
  )
}

export default App
