
import './App.css'
import AuthProvider from "./provider/authProvider.jsx";
import Routes from "./route/index.jsx";

function App() {


  return (
      <AuthProvider>
          <Routes />
      </AuthProvider>

  )
}

export default App
