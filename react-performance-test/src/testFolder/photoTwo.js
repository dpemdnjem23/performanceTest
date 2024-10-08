const Message = ({ message }) => {
  return <p>{message}</p>;
};

const ListItem = ({ photo }) => {
  return (
    <li key={photo.id}>
      <img src={photo.url} alt={photo.title} />
    </li>
  );
};

const List = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <ListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

const PhotoTwo = ({ message = "", photos = [] }) => {
  return (
    <div>
      <h1>PhotoTwo</h1>
      <Message message={message} />
      <List photos={photos} />
    </div>
  );
};

export default PhotoTwo;
