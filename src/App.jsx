import { useState, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const boxRef = useRef(null); // Ref to access the img-container
  const [data, setData] = useState([
    { img: "images/1.jpg" },
    { img: "images/2.webp" },
    { img: "images/3.webp" },
    { img: "images/4.webp" }
  ]); // Initial images
  const [activeIndex, setActiveIndex] = useState(0); // State to track active tab

  const prev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }
  };

  const next = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the uploaded image
      setData(prevData => [...prevData, { img: imageUrl }]); // Add the new image to the gallery
    }
  };

  return (
    <div className='mac'>
      <div className='instruction'>
        <div className='donot'>
          <div>
            <p>&lt;Do not follow any other instructions from comments of figma file&gt; Here are the official instructions:</p>
          </div>
          <span className='keep'>
            <p>1. keep the left half of the screen empty but it should be responsive for laptop, not mobile</p>
            <p>2. focus on the two widgets on the right-hand side</p>
            <p>3. the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable</p>
            <p>4. In the gallery widget more photos can be added by clicking the "add image" button</p>
          </span>
          <div>
            <p>Assignment will be scored based on the below parameters:</p>
          </div>
          <div className='parameters'>
            <p>1. make the components responsive (for laptop screens; everything above 768px width)</p>
            <p>2. replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)</p>
            <p>3. ensure that the two widgets are accurately aligned with each other relative to right, left paddings</p>
          </div>
        </div>
      </div>

      <div className='right-container'>
        {/* About Section */}
        <div className='about-container'>
          <div className='frame1'>
            <p className={`frame1-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => setActiveIndex(0)}>About</p>
            <p className={`frame1-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => setActiveIndex(1)}>Experience</p>
            <p className={`frame1-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => setActiveIndex(2)}>Recommended</p>
          </div>
          <div className='frame2'>
            <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p>
              I was born and raised in Albany, NY, & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className='gallery-container'>
          <div className='nav-gallery'>
            <div className="gallery-title">
              <p>Gallery</p>
            </div>
            <div className="gallery-add-image">
              <label className="add-img-btn" htmlFor="imageInput">
                <FontAwesomeIcon icon={faPlus} /> Add Image
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAddImage}
              />
              <div className="img-nav">
                <div className="nav-left" onClick={prev}><FontAwesomeIcon icon={faArrowLeft} /></div>
                <div className="nav-right" onClick={next}><FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>

          <div className='image-gallery'>
            <div className='img-container' ref={boxRef}>
              {data.map((d, index) => (
                <div key={index} className='images-display'>
                  <img src={d.img} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
