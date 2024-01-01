import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircleUser } from "react-icons/fa6";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SalesTeam from "../../Components/SalesTeam/SalesTeam";
import "./Blog.css";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import axios from "axios";

const Blog = () => {
    useEffect(() => {
      document.title = "Obtain expert insights about latest trends | DEMS - We care about our Customers";
    }, []);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(27);
  const [expandedPosts, setExpandedPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [postsPerPage]);

  const fetchData = async () => {
    try {
      const pexelsApiKey =
        "Xn2iHWqdhfKbejI1LtYAhWrzpVOHCt8xEjei3qxLeoL26LfLfolDh2kl";
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=technology&per_page=${postsPerPage}`;
      const pexelsResponse = await axios.get(pexelsApiUrl, {
        headers: { Authorization: pexelsApiKey },
      });
      const images = pexelsResponse.data.photos.map((photo) => ({
        imageUrl: photo.src.medium,
      }));

      // News API for fetching digital marketing-related posts
      const newsApiKey = "e5c67ad1897544cd94189390f50f5fab";
      const newsApiUrl = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=${postsPerPage}&apiKey=${newsApiKey}`;
      const newsResponse = await axios.get(newsApiUrl);
      const newsArticles = newsResponse.data.articles.map((article) => ({
        title: article.title,
        description: article.description,
      }));

      // Combine image and post data
      const combinedData = images.map((image, index) => ({
        ...image,
        ...newsArticles[index],
      }));
      setPosts(combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAdditionalPosts = async (pageNumber) => {
    try {
      const pexelsApiKey =
        "Xn2iHWqdhfKbejI1LtYAhWrzpVOHCt8xEjei3qxLeoL26LfLfolDh2kl";
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=technology&per_page=${postsPerPage}&page=${pageNumber}`;
      const pexelsResponse = await axios.get(pexelsApiUrl, {
        headers: { Authorization: pexelsApiKey },
      });
      const images = pexelsResponse.data.photos.map((photo) => ({
        imageUrl: photo.src.medium,
      }));

      // News API for fetching digital marketing-related posts
      const newsApiKey = "e5c67ad1897544cd94189390f50f5fab";
      const newsApiUrl = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=${postsPerPage}&page=${pageNumber}&apiKey=${newsApiKey}`;
      const newsResponse = await axios.get(newsApiUrl);
      const newsArticles = newsResponse.data.articles.map((article) => ({
        title: article.title,
        description: article.description,
      }));

      // Combine image and post data
      const additionalData = images.map((image, index) => ({
        ...image,
        ...newsArticles[index],
      }));

      // Append additional posts to the existing list
      setPosts((prevPosts) => [...prevPosts, ...additionalData]);
      setCurrentPage(pageNumber);
    } catch (error) {
      console.error("Error fetching additional posts:", error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => fetchAdditionalPosts(pageNumber);
  const items = [
    {
      id: 1,
      heading:
        "Why Your Website's First Impression Matters: The Importance of Homepage Design",
      paragraph:
        "The first impression of your website is crucial in the modern, ever-changing digital landscape where businesses vie for supremacy online.",
      name: "Joshua Moody",
      designation: "President",
      imageUrl: "/blog/first.png",
    },
    {
      id: 2,
      heading:
        "Supercharge Your SEO Strategy for 2024 with Professional Web Marketing Agency",
      paragraph:
        "Augmenting organic traffic’ significance lies in its ability to yield substantial value for your organization. The SEO services, meticulously crafted by a proficient web marketing agency, are inherently geared towards optimizing your overall ROL",
      name: "John Doe",
      designation: "Developer",
      imageUrl: "/blog/second.png",
    },
    {
      id: 3,
      heading: "From A to Z: How to Set Up a Google Remarketing Campaign",
      paragraph:
        "Did you know that approximately 97% of initial website visitors leave without making a purchase? This departure often results from the need for potential customers to develop a sense of familiarity and trust with your brand",
      name: "DEMS",
      designation: "Author",
      imageUrl: "/blog/third.png",
    },
    {
      id: 4,
      heading:
        "The Future of Web Development in Digital Marketing: In 2024 and Beyond!",
      paragraph:
        "Digital marketing and web development are undergoing parallel evolution as the digital landscape undergoes a perpetual transformation.",
      name: "DEMS",
      designation: "Author",
      imageUrl: "/blog/forth.png",
    },
    {
      id: 5,
      heading:
        "SEO Audits Disclosed: How SEO Agencies Identify and Fix Website Issues",
      paragraph:
        "Consistent website SEO audits are essential to uphold your business's online competitiveness.",
      name: "Moody Joshe",
      designation: "President",
      imageUrl: "/blog/fifth.png",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const toggleExpand = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="slider-container">
        <Carousel
          activeIndex={activeIndex}
          onSelect={(index) => handleSlide(index)}
          interval={3000}
          indicators={true}
          prevIcon={<span style={{ display: "none" }}></span>}
          nextIcon={<span style={{ display: "none" }}></span>}
        >
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="slider-content">
                <div className="left-content">
                  <h2>{item.heading}</h2>
                  <p>{item.paragraph}</p>
                  <div className="profile">
                    <FaCircleUser className="icon" />
                    <div className="profile-desc">
                      <h5>{item.name}</h5>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </div>
                <div className="right-content">
                  <img src={item.imageUrl} alt={`Section ${item.id}`} />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Container className="my-5">
        <Row>
          {currentPosts.map((post, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="card-hover">
                <Card.Img
                  variant="top"
                  src={post.imageUrl}
                  alt={`Post ${index + 1}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text
                    style={{
                      maxHeight: expandedPosts.includes(index)
                        ? "none"
                        : "80px",
                      overflow: "hidden",
                    }}
                  >
                    {post.description}
                  </Card.Text>
                  <div
                    className="text-center mt-3 text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedPosts.includes(index) ? "Read Less" : "Read More"}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination className="mt-4">
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </Container>
      <SalesTeam />
      <Footer />
    </>
  );
};

export default Blog;
