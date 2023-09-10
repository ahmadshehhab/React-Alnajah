import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import "./Media.scss";
import { Container, Input } from "@mui/material";

const MediaPage = (props) => {
  const params = useParams();
  const [Post, setPost] = React.useState([]);
  const [Sections, setSections] = React.useState([]);
  const [Email, setEmail] = React.useState("");
  const [AllEmail, setALlEmail] = React.useState([]);
  const [view, setview] = React.useState(null);
  const [Access, setAccess] = React.useState(false);
  const [Send, setSend] = useState(false);
  const [Msect, setMsect] = useState([]);
  const [Value, setValue] = useState(0);

  React.useEffect(() => {
    axios
      .get(
        `https://ahmadshehab11177.pythonanywhere.com/studies/majors/${params.id}/subjects/${params.subId}?format=json`
      )
      .then((res) => {
        setPost(res.data.item);
        setSections(res.data.section);
      });
    axios
      .get(`https://ahmadshehab11177.pythonanywhere.com/studies/emails/`)
      .then((res) =>
        res.data.results.map((e, i) => {
          AllEmail.push({ email: e.email, canAccess: e.canAccess });
          if (
            AllEmail.some(
              (item) =>
                item.email == localStorage.getItem("email") &&
                item.canAccess == true
            )
          ) {
            setValue(1);
            setAccess(true);
            setSend(true);
            setview(true);
          } else if (
            AllEmail.some(
              (item) =>
                item.email == localStorage.getItem("email") &&
                item.canAccess == false
            )
          ) {
            setValue(2);
            setSend(false);
            setview(false);
            setEmail(" ");
          }
        })
      );
  }, []);

  Post.some((item) => {
    if (!Msect.includes(item.section)) {
      Msect.push(item.section);
    }
  });

  const sendFunc = async (e) => {
    e.preventDefault();

    if (
      AllEmail.some((item) => item.email == Email && item.canAccess == true)
    ) {
      localStorage.setItem("email", Email);
      setValue(1);
      setAccess(true);
      setSend(true);
      setview(true);
    } else if (
      AllEmail.some((item) => item.email == Email && item.canAccess == false)
    ) {
      localStorage.setItem("email", Email);
      setValue(2);
      setSend(false);
      setview(false);
      setEmail(" ");
    } else {
      if (Email != "") {
        localStorage.setItem("email", Email);
        setValue(3);
        const result = await axios.post(
          `https://ahmadshehab11177.pythonanywhere.com/studies/emails/`,
          { email: Email, canAccess: false }
        );
        setSend(false);
        setview(false);
        console.log(result);
        setEmail(" ");
      }
    }
    console.log(Value);
  };
  const form = () => {
    return (
      <>
        {Value == 0 ? (
          <>
            <form onSubmit={sendFunc} method="post" className="con">
              <input
                className="input"
                type="email"
                required
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Enter</button>
            </form>
          </>
        ) : Value == 2 || Value == 3 ? (
          <>
            <tr />
            <p>Wait until Admin Approval</p>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      <Container className="All1" maxWidth="xl">
        {Sections.map((sec, i) => (
          <>
            {console.log(sec)}
            {(Msect.includes(sec.id) || sec.isPublic == false) && (
              <>
                <div
                  className="sections"
                  key={sec.id}
                  style={{ backgroundImage: `url(${sec.wallpaper})` }}
                >
                  <div className="a">
                    <div className="title1">{sec.name}</div>
                    {sec.isPublic == false && <>{form()}</>}
                    {(Send == true || sec.isPublic == true) &&
                      Post.map((e, i) => (
                        <>
                          {sec.id == e.section && (
                            <Card className="Card" key={i}>
                              {e.file != null && (
                                <Link target="_blank" to={e.file}>
                                  <CardContent className="cardContent1">
                                    {" "}
                                    {e.name}{" "}
                                  </CardContent>
                                </Link>
                              )}
                              {e.image != null && (
                                <Link target="_blank" to={e.image}>
                                  <CardContent className="cardContent1">
                                    {" "}
                                    {e.name}{" "}
                                  </CardContent>{" "}
                                </Link>
                              )}
                              {e.link != null && (
                                <Link target="_blank" to={e.link}>
                                  <CardContent className="cardContent1">
                                    {" "}
                                    {e.name}{" "}
                                  </CardContent>
                                </Link>
                              )}
                              {e.video != null && (
                                <Link target="_blank" to={e.video}>
                                  <CardContent className="cardContent1">
                                    {" "}
                                    {e.name}{" "}
                                  </CardContent>
                                </Link>
                              )}
                            </Card>
                          )}
                        </>
                      ))}
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </Container>
    </>
  );
};

export default MediaPage;
