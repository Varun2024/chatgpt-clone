import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  

  return (
    <div className='App'>

      <div className="sideBar">

        <div className="upperside">

          <div className="uppersidetop">
            <img src={gptLogo} alt="Logo" className='logo'/>
            <span className="brand">ChatGpt</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            NewChat
          </button>
          
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" className="" /> What is programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" className="" /> How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems">
            <div className="listItem">
              <img src={home} alt="" className="listItemsImage" />
              <span>Home</span>
            </div>  

            <div className="listItem">
              <img src={saved} alt="" className="listItemsImage" />
              <span>Saved</span>
            </div>  
            
            <div className="listItem">
              <img src={rocket} alt="" className="listItemsImage" />
              <span>Upgrade to Pro</span>
            </div>  
          </div>
        </div>
      </div>

      <div className="main">

      </div>
    </div>
  )
}

export default App
