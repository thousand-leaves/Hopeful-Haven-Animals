import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [liveNews, setLiveNews] = useState([]);

  useEffect(() => {
    fetchLiveNews();
  }, []);

  const fetchLiveNews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/live-news/1");
      setLiveNews(response.data);
    } catch (error) {
      console.error("Error fetching LiveNews:", error);
    }
  };

  const renderLiveNews = () => {
    if (typeof liveNews !== "object" || Object.keys(liveNews).length === 0) {
      return <p>Loading LiveNews...</p>;
    }

    const newsItems = Object.values(liveNews);
    const liveNewsImages = Array.from({ length: 4 }, (_, index) => `/PicsForLN/pic${index + 1}.jpg`);

    return newsItems.slice(0, 4).map((newsItem, index) => (
      <div className="card" key={newsItem.id}>
        <img
          src={liveNewsImages[index]}
          alt="Live News"
          className="card-img-left"
        />
        <div className="card-body">
          <h5 className="card-title">{newsItem.title || "Title Placeholder"}</h5>
          <p className="card-text">{newsItem.description || "Description Placeholder"}</p>
        </div>
      </div>
    ));
  };

  const renderRelatedNews = () => {
    if (typeof liveNews !== "object" || Object.keys(liveNews).length === 0) {
      return <p>Loading Related News...</p>;
    }

    const newsItems = Object.values(liveNews);

    return newsItems.map((newsItem, index) => (
      <div className="card" key={newsItem.id}>
        <img
          src={`/PicsForLN/pic${index + 1}.jpg`} // Updated image source path
          alt="Related News"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{newsItem.title}</h5>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="LiveNews">
        <h1 className="display">Live News</h1>
        <p className="LNPlaceholderText">
          <h3>HAPPENING NOW!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="LNPlaceholderText">
          <h3>BREAKING NEWS 1!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="LNPlaceholderText">
          <h3>BREAKING NEWS 2!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="LNPlaceholderText">
          <h3>BREAKING NEWS 3!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
      </div>
      
      <div className="RelatedNews">
        <h2>Related News</h2>
        <p className="RNPlaceholderText">
          <h3>Heading 1!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="RNPlaceholderText">
          <h3>Heading 2</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="RNPlaceholderText">
          <h3>Heading 3!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
        <p className="RNPlaceholderText">
          <h3>Heading 4!</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus?
        </p>
      </div>
      <div className="Donations">
        <h4>Recent Donations</h4>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
        <hr></hr>
        <p className="DonationText">
          <h3>User1479</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Donated £347.00
        </p>
      </div>
    </div>
  );
};

export default Home;
