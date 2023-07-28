import React, { useEffect, useState } from 'react';
import './walkthrough.scss';

const Walkthrough = () => {
  const [index, setIndex] = useState(0);

  const nextScreen = () => {
    if (index < indexMax()) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevScreen = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const updateScreen = () => {
    reset();
    goTo(index);
    setBtns();
  };

  const setBtns = () => {
    const $nextBtn = document.querySelector('.next-screen');
    const $prevBtn = document.querySelector('.prev-screen');
    const $lastBtn = document.querySelector('.finish');

    if (index === indexMax()) {
      $nextBtn.disabled = true;
      $prevBtn.disabled = false;
      if ($lastBtn) {
        $lastBtn.classList.add('active');
        $lastBtn.disabled = false;
      }
    } else if (index === 0) {
      $nextBtn.disabled = false;
      $prevBtn.disabled = true;
      if ($lastBtn) {
        $lastBtn.classList.remove('active');
        $lastBtn.disabled = true;
      }
    } else {
      $nextBtn.disabled = false;
      $prevBtn.disabled = false;
      if ($lastBtn) {
        $lastBtn.classList.remove('active');
        $lastBtn.disabled = true;
      }
    }
  };

  const goTo = (index) => {
    const $screens = document.querySelectorAll('.screen');
    const $dots = document.querySelectorAll('.dot');

    $screens.forEach((screen, i) => {
      screen.classList.toggle('active', i === index);
    });

    $dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  const reset = () => {
    const $screens = document.querySelectorAll('.screen');
    const $dots = document.querySelectorAll('.dot');

    $screens.forEach((screen) => {
      screen.classList.remove('active');
    });

    $dots.forEach((dot) => {
      dot.classList.remove('active');
    });
  };

  const indexMax = () => {
    const $screens = document.querySelectorAll('.screen');
    return $screens.length - 1;
  };

  const closeModal = () => {
    const $walkthrough = document.querySelector('.walkthrough');
    const $shade = document.querySelector('.shade');
    $walkthrough.classList.remove('reveal');
    setTimeout(() => {
      $walkthrough.classList.remove('show');
      setIndex(0);
      updateScreen();
    }, 200);
  };

  const openModal = () => {
    const $walkthrough = document.querySelector('.walkthrough');
    const $shade = document.querySelector('.shade');
    $walkthrough.classList.add('show');
    setTimeout(() => {
      $walkthrough.classList.add('reveal');
    }, 200);
    updateScreen();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    switch (e.which) {
      case 37: // left arrow
        prevScreen();
        break;
      case 38: // up arrow
        openModal();
        break;
      case 39: // right arrow
        nextScreen();
        break;
      case 40: // down arrow
        closeModal();
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  useEffect(() => {
    // Call the updateScreen function whenever the index changes
    updateScreen();
  }, [index]);

  return (
    <>
    <div className='container'>
      <button className="open-walkthrough" onClick={openModal}>
        Start
      </button>
      <div className="walkthrough">
        <div className="walkthrough-pagination">
          <a className="dot active"></a>
          <a className="dot"></a>
          <a className="dot"></a>
          <a className="dot"></a>
        </div>
        <div className="walkthrough-body">
          <button className="prev-screen" onClick={prevScreen}>
            <i className="icon-angle-left"></i>
          </button>
          <button className="next-screen" onClick={nextScreen}>
            <i className="icon-angle-right"></i>
          </button>
          <ul className="screens animate">
          <li className="screen active">
              <div className="media logo">
                <img
                  className="logo"
                  src="https://s3.amazonaws.com/jebbles-codepen/icon.png"
                  alt="Logo"
                />
              </div>
              <h3>
                Product Intro
                <br />
                Walkthrough
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </li>
            <li className="screen">
              <div className="media books">
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/book_icon_1.png"
                  alt="Book Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/book_icon_2.png"
                  alt="Book Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/book_icon_3.png"
                  alt="Book Icon"
                />
              </div>
              <h3>
                Data and File
                <br />
                Management
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </li>
            <li className="screen">
              <div className="media bars">
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_axis.png"
                  alt="Bar Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_3.png"
                  alt="Bar Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_2.png"
                  alt="Bar Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_1.png"
                  alt="Bar Icon"
                />
              </div>
              <h3>
                Analytics
                <br />
                and Metrics
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </li>
            <li className="screen">
              <div className="media files">
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/file_icon_1.png"
                  alt="File Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/file_icon_2.png"
                  alt="File Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/file_icon_3.png"
                  alt="File Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/file_icon_4.png"
                  alt="File Icon"
                />
              </div>
              <h3>
                Reporting
                <br />
                and Insights
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </li>
            <li className="screen">
              <div className="media comm">
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/comm_icon_1.png"
                  alt="Communication Icon"
                />
                <img
                  className="icon"
                  src="https://s3.amazonaws.com/jebbles-codepen/comm_icon_2.png"
                  alt="Communication Icon"
                />
              </div>
              <h3>
                Communications
                <br />
                Tools
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </li>
          </ul>
        </div>
        <div className="walkthrough-footer">
          <button className="button prev-screen" onClick={prevScreen}>
            Prev
          </button>
          <button className="button next-screen" onClick={nextScreen}>
            Next
          </button>
          <button className={`button finish close ${index === indexMax() ? 'active' : ''}`} disabled>
            Finish
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Walkthrough;
