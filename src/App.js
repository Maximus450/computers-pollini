import { NavBar } from './Components/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greetings= 'Hello!'
        user= 'Jonh'
        age= {28}
      />
      <ItemListContainer 
        greetings= 'Hello!'
        user= 'Jane'
      />
    </div>
  );
}

export default App;