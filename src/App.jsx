// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-d52ee281e2/icons'

function App() {

  return (
    <>
        <h1>Welcome!</h1>
        <FontAwesomeIcon icon={byPrefixAndName.far['house']} className="text-red-500 hover:text-black hover:cursor-pointer" />
        <FontAwesomeIcon icon={byPrefixAndName.far['car']} />
        <FontAwesomeIcon icon={byPrefixAndName.far['key']} />
        <FontAwesomeIcon icon={byPrefixAndName.far['gear']} />
    </>
  )
}

export default App
