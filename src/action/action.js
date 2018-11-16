import * as BooksAPI from '../BooksAPI'

export const loading = () => {
    return {
      type: "LOADING"
    };
  };
  
  export const setData = val => {
    return { type: "ON_COMPLETE", data: val };
  };
  
  export const getAllSynch = () => {
    return dispach => {
      
       dispach(loading());

      BooksAPI.getAll()
      .then( books => dispach(setData( books)))
      .catch(error => console.error("Failed to fetch books", error));
    };
  };


  export const updateSynch = (book, shelf) => {
    return dispach => {

        console.log('In update synch');
      
       dispach(loading());

       BooksAPI.update(book, shelf)
       .then( () =>dispach(getAllSynch()) ) 
      .catch(error => console.error("Failed to update books", error));
    };
  };
  
 

  
  