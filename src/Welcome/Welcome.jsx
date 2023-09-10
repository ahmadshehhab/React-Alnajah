import React from 'react'
import './Welcome.css'
import axios from 'axios';
const Welcome = () => {
  

  const [Post, setPost] = React.useState([]);
  React.useEffect(() => {
      axios.get(`https://ahmadshehab11177.pythonanywhere.com/studies/settings/`).then(res => setPost(res.data.results[0]))
    },[])
    console.log(Post)
  return (
    <>

    <div className="Container" /* style={{backgroundImage: `url(${Post.mainPicture})`}} */>
      <div className='Welcome'>
        <div className="fil"> </div>
      {Post.WelcomePageText} 
      <br/>
      <br/>
      <p className='p1'>-التغذية والتصنيع الغذائي-</p>
      </div>
      
    </div>
    
    </>
  )
}

export default Welcome