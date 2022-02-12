import FlashMessage from 'react-flash-message'

function AlertPopup({title, message, type, duration, children }) {
  return (
    <FlashMessage duration={duration}>
      <div 
        className="fixed left-0 right-0 z-10 flex w-5/6 mx-auto overflow-hidden bg-white rounded-lg shadow-md top-20">
        <div 
          className={`
            ${type === 'error' && 'bg-red-500'} 
            ${type === 'success' && 'bg-emerald-300'} 
            ${type === 'alert' && 'bg-slate-900'} 
            flex items-center justify-center w-12
          `}
          >
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
          </svg>
        </div>
        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className={`${type === 'error' ? 'text-red-500' : 'text-slate-900'} block`}>
              {title}
            </span>
            {message && (
              <span className="text-sm text-gray-600">
                {message}
              </span>
            )}
            {children}
          </div>
        </div>
      </div>
    </FlashMessage>
  )
}

export default AlertPopup