import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../api/query';

const Notes = () => {
    const { loading, error, data } = useQuery(GET_NOTES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
  
    return data.notes.map(({ id, title, cover_titular}) => (
      <article className="article" key={id}>
        <img src={cover_titular} alt=""/>
        <h3 className="article-title">
          {title}
        </h3>
      </article>
    ));
  };

export default Notes;
