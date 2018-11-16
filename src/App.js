/*
* APP
*/
import React from 'react'
import { Route } from "react-router-dom"
import HomeView from '../src/views/home_view/homeView'
import SearchView from '../src/views/search_view/searchView'
import './App.css'
import logo from "./logo.svg";
import * as BooksAPI from './BooksAPI'
import {connect} from 'react-redux';  
import * as actionCreator from "./action/action";

class App extends React.Component {

  constructor(){
    super()
  }

  componentDidMount() {
    this.props.dispatch(actionCreator.getAllSynch())
  }

  changeShelf = (book, shelf) => {

     this.props.dispatch(actionCreator.updateSynch(book, shelf))
  }

  onBookItemClick = (book) =>{
    
    console.log('onBookItemClick '+book.title);
  }

  render() {

    if(this.props.loading){
      return ( <div>
       { <img src={logo} className="App-logo" />}
     </div>)
   }
   else{

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeView
            books={this.props.books}
            onChange={this.changeShelf}
            onBookItemClick={ this.onBookItemClick }
          />
        )}>
        </Route>

        <Route path="/search" render={() => (
          <SearchView
            books={this.props.books}
            onChange={this.changeShelf}
          />
        )}>
        </Route>
      </div>
    )
   }
  }
}

function mapStateToProps(state) {

  return {

      books: state.books,
      loading: state.loading
  }
  
}

export default connect(mapStateToProps) (App);