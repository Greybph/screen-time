import {useState, useEffect} from 'react'
import { useFetcher, useSubmit } from 'remix'
import AlertPopup from './AlertPopup'

function LearningGoalsModal({profile, closeModal}) {
  const [goals, setGoals] = useState(profile.goals)
  const [emptyUpdate, setEmptyUpdate] = useState(false)
  const [showPopup] = useState(!localStorage.getItem('LEARNING_GOALS_ALERTED'))
  const fetcher = useFetcher()
  const submit = useSubmit()

  useEffect(() => {
    if (!localStorage.getItem('LEARNING_GOALS_ALERTED'))
    localStorage.setItem('LEARNING_GOALS_ALERTED', true)
  },[])

  let timeouts = []
  useEffect(() => {
    return function cleanUp() {
      clearTimeout(timeouts[0])
    }
  },[timeouts])

  function updateGoals(goal) {
    if (goals.includes(goal)) {
      let newGoals = goals.filter(g => g !== goal)
      setGoals(newGoals)
    } else {
      setGoals(goals => [...goals, goal])
    }
  }
  
  function submitGoals() {
    if (!goals.length) {
      setEmptyUpdate(true)
      let t1 = setTimeout(() => setEmptyUpdate(false), 4000)
      timeouts.push(t1)
      return 
    }
    if (
      !goals.every(goal => profile.goals.includes(goal)) ||
      !profile.goals.every(goal => goals.includes(goal)) 
      ) 
      {
        submit({goals: goals}, {method: 'post'})
        closeModal()
        return
    }
    return closeModal()
  }
  
  return (
    <main className="w-full px-6 py-6 mx-8 -mt-1 shadow rounded-b-md bg-slate-300">
      {showPopup &&  
        <AlertPopup 
          type='alert' 
          title='Learning Goals!'
          message={`What is ${profile.name} working on?`}
          duration={5000}
        />
      }
      {emptyUpdate && 
        <AlertPopup 
          type='error' 
          title='Uh oh...'
          message='No learning goals selected'
          duration={5000}
        />
      }
      <p className='p-2 mb-4 text-sm text-center rounded-md bg-slate-200 font-open'>Select the goals you wish to set<br />Click Update when finished</p>
        <ul className='space-y-2 text-center'>
          <li 
            onClick={() => updateGoals('literacy')}
            className={`${goals.includes('literacy') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Literacy
          </li>
          <li 
            onClick={() => updateGoals('social skills')}
            className={`${goals.includes('social skills') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Social Skills
          </li>
          <li 
            onClick={() => updateGoals('curiosity')}
            className={`${goals.includes('curiosity') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Curiosity
          </li>
        </ul>
        <button 
          onClick={submitGoals}
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700"
        >
          {fetcher.submission ? 'Updating...' : 'Update'}
        </button>
    </main>
  )
}

export default LearningGoalsModal