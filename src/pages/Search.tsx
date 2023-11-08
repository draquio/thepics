
import { useParams } from 'react-router-dom';
import SearchResults from '../components/SearchResults/SearchResults';

const Search = () => {
    const params = useParams();
    const { query = "" } = params;
  return (
    <SearchResults query={query} />
  )
}

export default Search
