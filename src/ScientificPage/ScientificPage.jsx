import { Button, Card, CardMedia, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ScientificPage.scss'
const ScientificPage = () => {
    const [Post, setPost] = useState([]);
    React.useEffect(() => {
        axios
          .get(
            `https://ahmadshehab11177.pythonanywhere.com/studies/books/?format=json`
          )
          .then((res) => setPost(res.data.results));
      }, []);
  return (
    <>
      <Container className="Alla" maxWidth="xl">
        <div className="collegesa">
          {Post.map((e, i) => (
            <Card className="Card3" key={i}>
              <Link
                target="_blank"
                to={e.link}
                className="link"
              >
                <CardMedia className="cc" image={e.image} title="green iguana">
                  <div className="a">

                  <Button size="large" className="btn">
                    <div className="text">{e.name}</div>
                  </Button>
                  </div>
                </CardMedia>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}

export default ScientificPage