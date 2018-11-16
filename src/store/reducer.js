import * as BooksAPI from '../BooksAPI'

const  initialState = {

    books: [],
    loading: true,
}

const reducer =(state = initialState, action) =>{

    const newState = {...state};

    if(action.type === 'LOADING'){

        newState.loading = true;
    }
    else if(action.type === 'ON_COMPLETE'){
 
        newState.books = action.data;
        newState.loading = false;
     }
      
    else if(action.type === 'REQUEST_INITIATE_A'){
    
        setBooksState();
    }
    else if(action.type === 'AGE_DOWN'){

    }

    return newState;
}

const setBooksState =() => {

    console.log('Set Data' );

    BooksAPI.getAll()
      .then( books => this.setState({ books }))
      .catch(error => console.error("Failed to fetch books", error));
  }
export default reducer;