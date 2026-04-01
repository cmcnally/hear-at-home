import { Printer } from 'lucide-react'

const alerts = [
  { sound: 'Smoke / CO Alarm', color: 'bg-alert-red', colorName: 'Red', flashes: 'Continuous', shaker: 'YES', priority: 'critical', action: 'Smoke alarm detected. Get out and call 911.' },
  { sound: 'Severe Weather', color: 'bg-alert-purple', colorName: 'Purple', flashes: '30', shaker: 'YES', priority: 'critical', action: 'Tornado warning for your area. Take shelter now.' },
  { sound: 'Glass Breaking', color: 'bg-alert-orange', colorName: 'Orange', flashes: '10', shaker: 'YES', priority: 'critical', action: 'Glass breaking detected. Possible break-in. Check your home.' },
  { sound: 'Doorbell', color: 'bg-alert-blue', colorName: 'Blue', flashes: '5', shaker: 'YES', priority: 'normal', action: 'Someone is at the front door.' },
  { sound: 'Front Door Opened', color: 'bg-alert-cyan', colorName: 'Cyan', flashes: '4', shaker: 'YES', priority: 'normal', action: 'Front door opened at [time].' },
  { sound: 'Back Door Opened', color: 'bg-teal-400', colorName: 'Teal', flashes: '4', shaker: 'YES', priority: 'normal', action: 'Back door opened at [time].' },
  { sound: 'Dog Barking', color: 'bg-alert-yellow', colorName: 'Yellow', flashes: '3', shaker: 'No', priority: 'normal', action: 'Birdie is barking at front door.' },
  { sound: 'Baby Crying', color: 'bg-alert-orange', colorName: 'Orange', flashes: '4', shaker: 'No', priority: 'normal', action: 'Baby crying detected.' },
  { sound: 'Water Running (5+ min)', color: 'bg-alert-cyan', colorName: 'Aqua', flashes: '8', shaker: 'No', priority: 'normal', action: 'Water has been running for over 5 minutes.' },
  { sound: 'Stove Fan Left On', color: 'bg-gray-300', colorName: '—', flashes: '—', shaker: 'No', priority: 'normal', action: 'Reminder at 15 & 30 min.' },
]

export default function AlertCodes() {
  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Alert Color Code Reference</h1>
          <p className="text-gray-300 text-lg">Print this and put it on your fridge. When lights flash or your phone buzzes, glance at this to know what it means.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition mb-8 cursor-pointer"
          >
            <Printer size={18} /> Print This Page
          </button>

          {/* Critical alerts */}
          <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            Critical — Act Immediately
          </h2>
          <div className="space-y-3 mb-10">
            {alerts.filter(a => a.priority === 'critical').map((alert) => (
              <div key={alert.sound} className="flex items-center gap-4 p-4 rounded-xl border-2 border-red-200 bg-red-50">
                <span className={`w-10 h-10 rounded-full ${alert.color} shrink-0`}></span>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{alert.sound}</p>
                  <p className="text-sm text-gray-600">{alert.colorName} • {alert.flashes} flashes • Bed shaker: {alert.shaker}</p>
                  <p className="text-sm font-medium text-red-700 mt-1">{alert.action}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Normal alerts */}
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            Informational — Check When You Can
          </h2>
          <div className="space-y-3 mb-10">
            {alerts.filter(a => a.priority === 'normal').map((alert) => (
              <div key={alert.sound} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                <span className={`w-10 h-10 rounded-full ${alert.color} shrink-0`}></span>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{alert.sound}</p>
                  <p className="text-sm text-gray-600">{alert.colorName} • {alert.flashes} flashes • Bed shaker: {alert.shaker}</p>
                  <p className="text-sm text-gray-500 mt-1">{alert.action}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center">These are default patterns — customize them to whatever works for you. Colors and flash counts are completely up to you.</p>
        </div>
      </section>
    </div>
  )
}
