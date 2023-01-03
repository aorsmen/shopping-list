import { Fragment } from 'react';

import AddItem from './components/Items/AddItem';
import ItemList from './components/Items/ItemList';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <Fragment>
      <header>
        <h1>My Shopping List</h1>
      </header>
      <main>
        <AddItem />
        <ItemList />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
