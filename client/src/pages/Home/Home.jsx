import React, { Component } from "react";
//import {ArticleCard, ArticleItem} from "../../components/ArticleCard";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css";
import API from "../utils/API"

class Home extends Component {
  state = {
    articles: [],
    articleSearch: "",
    startYear:"",
    endYear:""
  };

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="sm-2" />
            <Col size="sm-8">
              <div className="card">
                <div class="card-header">Search for an article</div>
                <form>
                  <div className="form-group label">
                    <label for="search">Search: {this.state.articleSearch}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      placeholder="Search"
                    />
                  </div>
                  <div className="form-group">
                    <label for="startYear">Start Year: {this.state.startYear}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="startYear"
                      placeholder="ex: 1997"
                    />
                  </div>
                  <div className="form-group">
                    <label for="endYear">End Year: {this.state.endYear}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      placeholder="ex: 1998"
                    />
                  </div>
                  <input
                    class="btn btn-primary"
                    type="submit"
                    value="Submit"
                    id="submit"
                  />
                </form>
              </div>
            </Col>
            <Col size="sm-2" />
          </Row>
          <Row>
            <Col size="sm-2" />
            <Col size="sm-8" />
            <Col size="sm-2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
