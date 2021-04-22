import { useEffect, useState } from 'react';
const App = () => {
  const [search, setSearch] = useState('');
  const [listNames, setListNames] = useState([
    "ethan",
    "madd",
    "calum"
  ]);
  const [displayedNames, setDisplayedNames] = useState(listNames);
  useEffect(() => {
    if (search === '') {
      setDisplayedNames(listNames);
    } else {
      setDisplayedNames(listNames.filter(name => name.includes(search)));
    }
  }, [search]);
  return (
    <>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      {displayedNames.map(name => <p key={name}>{name}</p>)}
    </>
  );
}
export default App;