import Search from "./components/Search"
import { useState  } from "react"


const App = () => {
  const [searchTerm, setSearchTerm] = useState ("")

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
<header>
  <img src="./hero.png" alt="hero Banner" />
  <h1 className="text-gradient">
    Find Movies You'll Enjoy Without the Hassle
  </h1>
</header>

<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

<h1 className="text-white text-2xl">{searchTerm}</h1>
        </div> 
      
    </main>
  )
}

export default App