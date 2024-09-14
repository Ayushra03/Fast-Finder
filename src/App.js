import React from 'react';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <h1 align="center"><b>Fast Finder Search App</b></h1>
      <h4 align="center">[Country ---- Capital]</h4>
      <SearchBar />
      
    </div>
  );
}

export default App;
