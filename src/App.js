import React, { useState, useContext } from 'react';

const languages = ['JavaScript', 'Python'];
const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [language, setLanguage] = useState('')
  const handleToggle = () => {
    setIsClicked(!isClicked)
    setLanguage(isClicked? languages[0] : languages[1])
  }
  return  <AppContext.Provider value={{language, handleToggle}}>
          {children}
          </AppContext.Provider>
}

class App extends React.Component {
  constructor(props) {
    super(props);
     }
  render() {
    return (
       <MainSection />
    );
  }
}

const MainSection = () => {
   const {language, handleToggle} = useContext(AppContext)
   return (
      <div>
        <p id="favoriteLanguage">Favorite programing language: {language}</p>
        <button id="changeFavorite" onClick={handleToggle}>Toggle language</button>
      </div>
    )
  }


export default App;
