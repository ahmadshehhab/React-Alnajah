import React from "react";
import "./SubjectPage.css";
import MediaCard from "../colleges/Colleges";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import lecture from "../assets/lect.jpg";
import { Link, useParams } from "react-router-dom";
import { Container } from "@mui/material";

const HomePage = () => {
  const params = useParams();
  const [Post, setPost] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        `https://ahmadshehab11177.pythonanywhere.com/studies/majors/${params.id}?format=json`
      )
      .then((res) => setPost(res.data.item));
  }, []);
  console.log(Post);
  return (
    <>
      <Container className="All" maxWidth="xl">
        <div className="colleges">
          {Post.map((e, i) => (
            <Card className="Card1" key={i}>
              <Link
                to={`/major/${params.id}/subjects/` + e.id}
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
  );
};

export default HomePage;
