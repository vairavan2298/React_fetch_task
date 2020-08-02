import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxyUrl}https://newsapi.org/v2/everything?q=bitcoin&apiKey=adba241f9e2249209ea905b6617234ef`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoaded: true, items: data.articles }) ||
          console.log(data);
        prompt();
      });
    //
    // .catch((error) => console.log("parsing failed", error));
  }

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div ClassName="App">
          loaded successfully
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Url</td>
                <td>name</td>
              </tr>
            </thead>
          </table>
          <ul>
            {this.items.map((item) => (
              <li>
                description: {item.description} | url: {item.url}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
