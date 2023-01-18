import { Fragment } from 'react';
import Footer from './components/Layout/Footer';
import AddItem from './components/Item/AddItem';
import ItemList from './components/Item/ItemList';
import ItemProvider from './store/ItemProvider';
import './App.css';

function App() {
  return (
    <Fragment>
      <header>
        <h1>My Shopping List</h1>
      </header>
      <main>
        <ItemProvider>
          <AddItem />
          <ItemList />
          <Footer />
        </ItemProvider>
      </main>
    </Fragment>
  );
}

export default App;
