import React from "react";
import "./HomePage.css";
import MediaCard from "../colleges/Colleges";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import lecture from "../assets/lect.jpg";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import { Container } from "@mui/material";

const HomePage = () => {
  const [Post, setPost] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://ahmadshehab11177.pythonanywhere.com/studies/simplemajors/?format=json"
      )
      .then((res) => setPost(res.data.results));
  }, []);
  return (
    <>
      <Welcome />
      <Container className="All" maxWidth="xl">
        <div className="colleges">
          {Post.map((e, i) => (
            <>
              <Card className="Card2" key={i}>
                <Link  to={"/major/" + e.id} className="link">
                  <CardMedia
                    className="cc"
                    image={e.image}
                    title="green iguana"
                  >
                    <Button size="large" className="btn">
                      {e.name}
                    </Button>
                  </CardMedia>
                </Link>
              </Card>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
