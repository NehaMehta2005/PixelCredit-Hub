import React , {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../context/MyContext";
import Button from "../components/Button";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faHeart, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons';
const backendURL = `http://localhost:5500`;
function LandingPage() {
  const { state, dispatch } = useContext(MyContext);
  const { allUploads, categories } = state;
  const [iconColors, setIconColors] = useState(['black', 'black', 'black']);

  useEffect(() => {
    async function fetchUploadedImages() {
      try {
        //const response = await axios.get(`${backendURL}/images/alluploadedimages/pending`);
        const response = await axios.get(`${backendURL}/images/alluploadedimages/approved`);
        dispatch({ type: "setAllUploads", payload: response.data });
      } catch (error) {
        console.error("Error fetching allUploads details:", error);
         
      }
    }
     fetchUploadedImages();
  }, []);

  const getRandomImageURL = () => {
    if (allUploads.length === 0) {
      // When it mounts and has checked 0 images so far
      return "alt.jpg";
    }
    const randomIndex = Math.floor(Math.random() * allUploads.length);
    return allUploads[randomIndex].imageURL;
  };
  
  const handleChange = (index) => {
      // Toggle the color of the specific heart icon at the given index
      const newIconColors = [...iconColors];
      newIconColors[index] = iconColors[index] === 'black' ? 'red' : 'black';
      setIconColors(newIconColors);
  };




  return (
    <div className="Home-Container">
      <div className="Home-cardContainer withBG">
        <div className="cardDiv">
          <h3>"Photography: where light and stories meet."</h3>
          <p>
            Enter a world of visual wonders where pixels narrate tales, colors
            dance, and each click unveils a masterpiece. Join our odyssey
            through beauty, elegance, and the sheer magic of storytelling.
            Welcome to a symphony of pixels transcending the ordinary, inviting
            you to witness the extraordinary.
          </p>
          <Link to="/categories" className="cat-Link">
            Explore Picture Wonderland
          </Link>
        </div>

        <div className="imageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
        {/* <div key={image.id}  className="your-class-name">
          <Link to={`/image/${image.id}`}>
            <img src={image.url} alt={`Image ${image.id}`} />
          </Link>
        </div> */}
      </div>

      <div className="Home-cardContainer">
        <div className="imageDiv smallImageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>

        <div className="cardDiv">
          <h3>Images, that speak louder than words.</h3>
          {/* <p>Make 5 of these pages, (Same page, Same Route, different image and quote. A Carousel)</p> */}
        </div>
      </div>

      <div className="Home-cardContainer colum">
        <div className="cardDiv">
          <p className="PopularPara">Most Popular</p>
          <h4>Dive into a selection of popular visuals</h4>
        </div>

        <div className="imageContainer">
          <div className="imageOuterDiv">
            <div className="imageDiv withBTN" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
              <Link className="imageLink">
                <img src="" alt=""/>
              </Link>
            </div>
            <div className="btnDiv">
              <Button
                buttonText={<FontAwesomeIcon icon={faHeart} style={{ color: iconColors[0] }} />}
                className="BTN"
                onClick={() => handleChange(0)}
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faShareFromSquare} />}
                className="BTN"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faDownload} />}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>

          <div className="imageOuterDiv">
            <div className="imageDiv withBTN" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
              <Link className="imageLink">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="btnDiv">
              <Button
                buttonText={<FontAwesomeIcon icon={faHeart} style={{ color: iconColors[1] }}/>}
                className="BTN"
                onClick={() => handleChange(1)}
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faShareFromSquare} />}
                className="BTN"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faCartArrowDown} />}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>

          <div className="imageOuterDiv">
            <div className="imageDiv withBTN" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
              <Link className="imageLink">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="btnDiv">
              <Button
               buttonText={<FontAwesomeIcon icon={faHeart} style={{ color: iconColors[2] }}/>}
                className="BTN"
                onClick={() => handleChange(2)} 
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faShareFromSquare} />}
                className="BTN"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<FontAwesomeIcon icon={faCartArrowDown} />}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Home-cardContainer">
        <div className="videoContainer">
          <p>The reasons</p>
          <h4>Why choose Us?</h4>
          <div className="videoDiv">
            <Link className="video">
                <Button
                className="videoBTN"
                buttonText={<FontAwesomeIcon icon={faPlayCircle} />}
                /* onClick={handleSearch} */
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="Home-cardContainer imageContainer">
        <div className="imageDiv bottomImageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
        <div className="imageDiv bottomImageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
        <div className="imageDiv bottomImageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
        <div className="imageDiv bottomImageDiv" style={{ backgroundImage: `url('${getRandomImageURL()}')` }}>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
