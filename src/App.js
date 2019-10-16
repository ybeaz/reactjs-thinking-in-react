import React from 'react';
import { FilterableProductTable } from './FilterableProductTable'
import './App.css';

function App(props) {


  return (
    <div className="App">
      <header className="App-header">
        Hello Redux
      </header>
      <section className='App__section'>
        <FilterableProductTable />
      </section>
    </div>
  );
}

export default App;
