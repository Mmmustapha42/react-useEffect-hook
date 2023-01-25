import React,{useState, useEffect} from 'react';


function App() {
  const [resourseType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then(res => res.json())
      .then(data => setItems(data))

  }, [resourseType])

  function tryPost() {
    setResourceType('posts')
  }

  function tryUsers() {
    setResourceType('users')
  }
   
  function tryComments(){
    setResourceType('comments')
  }


  return (
    <>
    <button onClick={tryPost}>Posts</button>
    <button onClick={tryUsers}>Users</button>
    <button onClick={tryComments}>Comments</button>

    <h1>{resourseType}</h1>
    {items.map(item =>{
      return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  );
}

export default App;
