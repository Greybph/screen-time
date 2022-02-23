import {useState, useEffect} from 'react'
import { useFetcher } from 'remix'
import AlertPopup from './AlertPopup'

function LearningGoalsModal({profile}) {
  const [goals, setGoals] = useState(profile.goals)
  const [showPopup] = useState(!localStorage.getItem('LEARNING_GOALS_ALERT'))
  const fetcher = useFetcher()

  useEffect(() => {
    localStorage.setItem('LEARNING_GOALS_ALERT', true)
  },[])

  function updateGoals(goal) {
    if (goals.includes(goal)) {
      let newGoals = goals.filter(g => g !== goal)
      setGoals(newGoals)
    } else {
      setGoals(goals => [...goals, goal])
    }
  }

  function submitGoals() {
    fetcher.submit({goals: goals}, {method: 'post'})
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
      <p className='p-2 mb-4 text-sm text-center rounded-md bg-slate-200 font-open'>Select the goals you wish to set<br />Click Update when finished</p>
        <ul className='space-y-2 text-center'>
          <li 
            onClick={() => updateGoals('art')}
            className={`${goals.includes('art') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Art
          </li>
          <li 
            onClick={() => updateGoals('social')}
            className={`${goals.includes('social') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Social Skills
          </li>
          <li 
            onClick={() => updateGoals('manners')}
            className={`${goals.includes('manners') ? 'text-3xl' : 'text-xl'} text-slate-900`}
          >
            Manners
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