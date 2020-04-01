import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../Styles/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      robots: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const { robots, search } = this.state;
    const filtered = robots.filter(robot => robot.username.toLowerCase().includes(search.toLowerCase()))
    return !robots.length ?
      <h1>Loading my bois</h1>
      :
      (
        <div className="app" >
          <h1>Robot Users</h1>
          <SearchBar searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filtered} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;