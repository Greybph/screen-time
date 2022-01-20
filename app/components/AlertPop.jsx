import FlashMessage from 'react-flash-message'
import clsx from 'clsx'

function AlertPop({type, title, message}) {

  const popFont = clsx({
   'font-semibold': true,
   "text-emerald-500 dark:text-emerald-400": type === 'success',
   "text-red-500 dark:text-red-400": type === 'error'
  })

  return (
    <FlashMessage duration={4000}>
       <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className={`flex items-center justify-center w-12 ${type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
            </svg>
        </div>
        
        <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
                <span className={popFont}>{title}</span>
                <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
            </div>
        </div>
    </div>
    </FlashMessage>
  )
}

export default AlertPop
