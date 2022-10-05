import React, {useState} from 'react';

// Membuat Tampilan Search 
function Searchbar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'> 
        <div className='field'>
          <label htmlFor="video-search">Video Search</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)} name='video-search' type="text" placeholder="Search.."/>
        </div>
      </form>
    </div>
  )
}

export default Searchbar;