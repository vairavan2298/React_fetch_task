import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    isLoaded: false,
  };
  constructor() {
    super();
    let isLoaded = false;
    let data = [];
    this.state = { data, isLoaded };
  }

  componentDidMount = () => {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=adba241f9e2249209ea905b6617234ef";

    let req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.articles, isLoaded: true });
      });
  };
  render() {
    let { isLoaded, data } = this.state;
    return (
      <React.Fragment>
        <header>
          <div className="container header">
            <h2>NewsAPI</h2>
          </div>
        </header>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Url</th>
                <th>Source Name</th>
              </tr>
            </thead>
            <tbody>
              {isLoaded &&
                data.map((row) => {
                  return (
                    <tr key={row["title"]}>
                      <td>{row["title"]}</td>
                      <td>{row["description"]}</td>
                      <td>
                        <a href={row["url"]}>{row["url"]}</a>
                      </td>
                      <td>{row["source"]["name"]}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {!isLoaded && (
          <div className="loader container">
            <b>Loading...</b>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
