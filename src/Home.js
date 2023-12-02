import React from 'react';
import {useContext} from 'react';
import Feed from './Feed';
import DataContext from './context/DataContext';

const Home = () => {
  const {searchresults, fetchError, isLoading} = useContext(DataContext)
  return (
    <main className='Home'>
      { isLoading && <p className='statusMsg' > Loading Posts...</p> }
      {!isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchresults.length ? <Feed posts ={searchresults} /> : <p className='statusMsg'>No posts to display..</p>)} 
    </main>
  )
}

export default Home