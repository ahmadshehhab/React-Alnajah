import React from 'react'
import BasicTable from '../MuiComponents/Table'
import { Container } from '@mui/material'
import './DrNumbers.css'
import axios from 'axios'
const DrNumbers = () => {
    const [Post, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://ahmadshehab11177.pythonanywhere.com/studies/doctors/?format=json').then(res => setPost(res.data.results))
      },[])
  return (
    <>
    <div className="container">

        <div className="title">Doctors Emails</div>
    <Container className='All' maxWidth="xl">
        <div className="colleges" >
            <BasicTable data={Post}/>
        </div>

    </Container>
    </div>
    </>
)
}

export default DrNumbers