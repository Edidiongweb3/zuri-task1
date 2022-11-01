import image from './profile-img.png';
import './App.css';
import gitimg from './github.png';
import slackimg from './slack-img.png';
import zuriimg from './image1.png';
import hngicon from './image.png';
 

function App() {
  return (
    <div className="body-area">
      <header className="profile-area">
        <img src={image} className="profile_img" alt='' id='profile_img' />
        <h3 className='name'>Edidiong Ekanem</h3>
          {/* <p className='' id='slack'>Eddie</p> */}
          </header>
    

        <div className='links-area'>
          <a href='https://twitter.com/EddieeContent'>
          <button className='twitter' id='twitter'>Twitter Link</button>
        </a>
        <a href='https://training.zuri.team/'>
          <button className='btn_zuri' id='btn_zuri'>Zuri Team</button>
          </a>
          <a href='http://books.zuri.team/'>
          <button className='books' id='books'>Zuri Books</button>
          </a>
          <a href='https://books.zuri.team/'>
          <button className='book_python' id='book_python'>Python Books</button>
          </a>
          <a href='https://background.zuri.team'>
            <button className='pitch' id='pitch'>Background Check for Coders</button>
          </a>
          <a href='https://books.zuri.team/design-rules'>
            <button className='book_design' id='book_design'>Design Books</button>
          </a>
          </div>
      

      <div className='icon-area'>
      <img src={slackimg} className='slack-img' alt=''></img>

      <img src={gitimg} className='github' alt=''></img> 
      </div>

        <div className='footer'>      
        <img src={zuriimg} className='image1' alt='' id='image1'></img>
        <p className='text'>HNG Intership 9 Frontend Task</p>
        <img src={hngicon} className='image' alt='' id='image'></img>
        </div>
      
    </div>
    

  
  );
}

export default App;
