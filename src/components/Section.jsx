export function Section({ title, id, children }) {
  return (
    <div id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  )
}

export function Step({ number, title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-blue text-white text-sm font-bold shrink-0">{number}</span>
        {title}
      </h3>
      <div className="ml-0 sm:ml-9 text-gray-600 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

export function Callout({ type = 'info', title, children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    tip: 'bg-purple-50 border-purple-200 text-purple-900',
    critical: 'bg-red-50 border-red-200 text-red-900',
  }

  return (
    <div className={`rounded-xl border-2 px-5 py-4 mb-6 ${styles[type]}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function TabGroup({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-xl mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition cursor-pointer ${
            activeTab === tab.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
