import React from 'react';
import '../home.css';

function Home() {
  return (
    <>
    <div className="banner">
      <div
        className="slider"
        style={{
          '--quantity': 10, 
        }}
      >
        <div
          className="item"
          style={{
            '--position': 1,
          }}
        >
          <img src="https://boldoutline.in/wp-content/uploads/2019/10/Web-Cover-82.jpg" alt="Dragon 1" />
        </div>
        <div
          className="item"
          style={{
            '--position': 2,
          }}
        >
          <img src="https://thumbs.dreamstime.com/b/concept-grocery-shopping-home-delivery-app-filled-package-goods-decoration-wallpaper-desktop-poster-booklet-cover-298213803.jpg" alt="Dragon 2" />
        </div>
        <div
          className="item"
          style={{
            '--position': 3,
          }}
        >
          <img src="https://wallpapers.com/images/hd/jewellery-background-2880-x-1800-dgixvilq78viyf9w.jpg" alt="Dragon 3" />
        </div>
        <div
          className="item"
          style={{
            '--position': 4,
          }}
        >
          <img src="https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg" alt="Dragon 4" />
        </div>
        <div
          className="item"
          style={{
            '--position': 5,
          }}
        >
          <img src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?cs=srgb&dl=pexels-david-bartus-43782-297933.jpg&fm=jpg" alt="Dragon 5" />
        </div>
        <div
          className="item"
          style={{
            '--position': 6,
          }}
        >
          <img src="https://media.istockphoto.com/id/1256474013/photo/hanger-with-pink-womens-clothing-against-the-background-of-a-pink-wall-monotonous-pink.jpg?s=612x612&w=0&k=20&c=Cuq2ybBIJLtRLI_DS81mwF8oCFmDBJZDQ6KnadY3ZO0=" alt="Dragon 6" />
        </div>
        <div
          className="item"
          style={{
            '--position': 7,
          }}
        >
          <img src="https://www.hdwallpapers.in/download/cute_babies_lying_in_green_carpet_wearing_cartoon_dress_4k_5k_hd_cute-5120x2880.jpg" alt="Dragon 7" />
        </div>
        <div
          className="item"
          style={{
            '--position': 8,
          }}
        >
          <img src="https://i.pinimg.com/550x/85/8e/6c/858e6c988cf463dc3059e872339e4dae.jpg" alt="Dragon 8" />
        </div>
        <div
          className="item"
          style={{
            '--position': 9,
          }}
        >
          <img src="https://5.imimg.com/data5/XM/TS/HL/GLADMIN-81686742/086-500x500.png" alt="Dragon 9" />
        </div>
        <div
          className="item"
          style={{
            '--position': 10,
          }}
        >
          <img src="https://redtape.com/cdn/shop/files/RSO4065_1.jpg?v=1711715382" alt="Dragon 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="BUYIT">BuyIt</h1>
        <div className="author">
        </div>
        <div className="model"></div>
      </div>
    </div>
    <div className="white-section">
        <h2>Explore Our Categories</h2>
        <div className="container">
  <div className="landing-cards" id="card-1">
    <div className="card-content">
      <p className="card-text">Cosmetics</p>
    </div>
  </div>
  <div className="landing-cards" id="card-2">
    <div className="card-content">
      <p className="card-text">Groceries</p>
    </div>
  </div>
  <div className="landing-cards" id="card-3">
    <div className="card-content">
      <p className="card-text">Jewellery</p>
    </div>
  </div>
  <div className="landing-cards" id="card-4">
    <div className="card-content">
      <p className="card-text">E-Gadgets</p>
    </div>
  </div>
  <div className="landing-cards" id="card-5">
    <div className="card-content">
      <p className="card-text">Men Wear</p>
    </div>
  </div>
  <div className="landing-cards" id="card-6">
    <div className="card-content">
      <p className="card-text">Women Wear</p>
    </div>
  </div>
  <div className="landing-cards" id="card-7">
    <div className="card-content">
      <p className="card-text">Kid's Wear</p>
    </div>
  </div>
  <div className="landing-cards" id="card-8">
    <div className="card-content">
      <p className="card-text">Party Wear</p>
    </div>
  </div>
  <div className="landing-cards" id="card-9">
    <div className="card-content">
      <p className="card-text">Watches</p>
    </div>
  </div>
  <div className="landing-cards" id="card-10">
    <div className="card-content">
      <p className="card-text">Shoes</p>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Home;
