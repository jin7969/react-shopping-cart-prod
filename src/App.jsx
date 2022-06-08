import { useRoutes } from 'react-router-dom';
import routes from './routes/Routes';
import Header from './components/Header';

function App() {
  const content = useRoutes(routes);

  return (
    <>
      <Header />
      {content}
    </>
  );
}

export default App;
