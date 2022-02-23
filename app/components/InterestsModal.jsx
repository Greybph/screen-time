import {useFetcher, Form, useTransition} from 'remix'
import {AiOutlinePlus} from 'react-icons/ai'
import {useRef, useEffect, useState} from 'react'

function InterestsModal({profile, onClick}) {
  const transition = useTransition()
  const fetcher = useFetcher()
  const formRef = useRef()
  const inputRef = useRef()
  const isAdding = 
    transition.state === 'loading' || transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'add' 
  const isDeleting = 
    fetcher.state === 'submitting' || fetcher.state == 'loading' &&
    fetcher.submission.formData.get('_action') === 'delete'

  useEffect(() => {
    if (isAdding) {
      formRef.current?.reset()
      inputRef.current?.focus()
    }
  }, [isAdding])

  return (
    <main className="fixed left-0 z-10 w-5/6 px-8 py-8 mx-8 rounded-md shadow top-64 bg-slate-300">
      <Form method="post" ref={formRef}>
        <div className="space-y-4">
          <h1 className="text-2xl text-center text-slate-900 dark:text-white">What interests {profile.name}?</h1>
          <div className='flex items-center justify-center py-2'>
            <input type="hidden" name="_action" value="add" />
            <input ref={inputRef} name="interest" type="text" className="w-full px-3 py-2 rounded-md bg-slate-100 outline-slate-700" />
            <button type='submit' className='ml-2 rounded-md bg-slate-900'>
            <AiOutlinePlus 
              className={`${isAdding && 'animate-spin'} text-4xl text-white`}
            />
            </button>
          </div>
        </div>
      </Form>
      <ul>
      {profile?.interests.map((interest, idx) => (
        <li key={idx}>
          <fetcher.Form method='post' className='flex justify-between px-4 py-1'>
            <input type="hidden" name="_action" value="delete" />
            <input type="hidden" name="interest" value={interest.toLowerCase()} />
            <span className='text-xl text-slate-900 overflow-clip'>
              {interest}
            </span>
            <button type="submit">
              <AiOutlinePlus 
                className='ml-2 text-2xl rotate-45 text-slate-900'
              />
            </button>
          </fetcher.Form>
        </li> 
      ))}
      </ul>  
      <button  
        className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700"
        onClick={onClick}
      >
        {isDeleting ? 'Updating...' : 'Done'}
      </button>
    </main>
  )
}

export default InterestsModal