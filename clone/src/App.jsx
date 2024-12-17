import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from  './assets/send.svg'
import userIcon from  './assets/user-icon.png'
import gptImgLogo from  './assets/chatgptLogo.svg'

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
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa magnam minus corporis, nobis cupiditate aliquam possimus culpa aut amet.
            </p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore odio at beatae dolorem, nostrum reprehenderit similique laboriosam aliquam, numquam mollitia repudiandae ipsum quasi veniam commodi consequatur porro. Doloribus, non rerum ex, soluta laudantium possimus dolorum nemo quam minus illo vitae architecto officia magnam quod tempore. Error dicta commodi quam sunt a ab velit reiciendis debitis iusto voluptas expedita delectus similique, odit, eum nisi neque amet nihil recusandae? Facilis culpa ducimus repellat aliquam labore nesciunt id doloribus beatae. Veritatis libero temporibus et obcaecati officia asperiores atque nemo error ex accusantium, nihil unde tempora aperiam omnis facilis repellat blanditiis impedit hic!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT December 24 Version.
          </p>
        </div>
      </div>
    </div>
  )
}
export default App
