import './App.css'
// import { Layout } from './Layout'
import { QrCodeGenerator } from './QrCodeGenerator'
import { QrCodeScanner } from './QrCodeScanner'


function App() {

  return (
    <div>
      <QrCodeScanner />
      <QrCodeGenerator />
    </div>
  )
}

export default App
