

function Clip() {
  return (
      <div 
        style={{clipPath: 'ellipse(65% 45% at 30% -05%)', zIndex: -100, width: '130%'}} 
        className="fixed top-0 transition-colors duration-1000 delay-300 bg-slate-300 bg-opacity-90 dark:bg-slate-800 h-4/6">
      </div> 
  )
}

export default Clip