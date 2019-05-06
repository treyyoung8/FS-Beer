import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/header'
import Footer from './Components/footer'
import HomePage from './Components/homePage'
import AllBeersPage from './Components/allBeersPage'
import AddBeer from './Components/addBeer'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        beers: [],
        oneBeer: []
    }
  }
  
  componentDidMount() {
    this.fetchAllBeers()
  }
  
  fetchAllBeers() {
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer')
      .then(res => res.json())
      .then(beers => this.setState({ beers: beers }))
  }

  getBeerById = (id) => {
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer/' + id)
      .then(res => res.json())
      .then(oneBeer => this.setState({ oneBeer: oneBeer }))
  }

  upLike = (id, currentLikes) => {
    var beer = {
      likes: currentLikes + 1
    }
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer/' + id, {
      method: 'PUT',
      body: JSON.stringify(beer),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; charset=utf - 8'
      }
  })
      .then(res => {this.fetchAllBeers()})
  }

  downLike = (id, currentLikes) => {
    var beer = {
      likes: currentLikes - 1
    }
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer/' + id, {
      method: 'PUT',
      body: JSON.stringify(beer),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; charset=utf - 8'
      }
  })
      .then(res => {this.fetchAllBeers()})
  }

  postBeer = () => {
    var beers = {
      name: this.state.name,
      likes: this.state.likes
    }
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer', {
          method: 'POST',
          body: JSON.stringify(beers),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json; charset=utf - 8'
          }
      })
      .then(res => {this.fetchAllBeers()})
      .then(alert('Confirmed!'))
  }

  deleteBeer = (id) => {
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://beer.fluentcloud.com//v1/beer/' + id, {
      method: 'DELETE'
    })
      .then(res => {this.fetchAllBeers()})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path='/' render={HomePage} />
                <Route exact path='/beers' render={(props) => <AllBeersPage {...props} beers={this.state.beers} deleteBeer={this.deleteBeer} upLike={this.upLike} downLike={this.downLike} handleChange={this.handleChange} />} />
                <Route exact path='/beers/newbeer' render={(props) => <AddBeer {...props} postBeer={this.postBeer} handleChange={this.handleChange} />} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
