import './ItemListContainer.css';

export const ItemListContainer = ({ greetings, user, age }) => {
  return (
    <div class="greetings">
      <h1>{greetings}</h1>
      <h2>{user}</h2>
      <h3>{age}</h3>
    </div>
  );
};