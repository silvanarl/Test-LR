import Router from 'next/router';
import Spinner from './Spinner';

const Notes = ({notes}) => {
  return notes.map(({ id, title, cover_titular}) => (
    <article 
      className="article" key={id}
      onClick={(e) => Router.push('/notes/[id]', `/notes/${id}`)}
    >
      <img src={cover_titular} className="article-image" alt={title}/>
      <h4 className="article-title">
        {title}
      </h4>
    </article>
  ));
};

export default Notes;
