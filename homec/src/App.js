import React from 'react'
import {Route} from 'react-router-dom'

import Dom from "./components/Dom"
import Swiatlo from './components/Swiatlo'
import Ogrzewanie from "./components/Ogrzewanie"

const App = ({location}) => (
    <div>
      <Route  location={location} path="/" exact component={Dom} />
      <Route  location={location} path="/ogrzewanie" exact component={Ogrzewanie}  />
      <Route  location={location} path="/swiatlo" exact component={Swiatlo}  /> 
    </div>
)

// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired,
// }

export default App;
