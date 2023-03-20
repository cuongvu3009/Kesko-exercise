import './app.css';
import List from './components/list/List';
import Search from './components/search/Search';

export function App() {
  return (
    <>
      <div className='title'>
        <Search />
        <List />
      </div>
    </>
  );
}
