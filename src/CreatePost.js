import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('The Dancing Kitchen');
  const [isPending, setIsPending] = useState(false);
  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);
    
    const blog = { title, body, author};
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      navigate.push('/');
    })
  }
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        <label>Recipe Title : </label>
        <input 
          value={title}
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder='E.g : Chicken Pasta'
        />
        <label>Description : </label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='E.g : Italian Chicken Pasta with Tomato'
        >
        </textarea>
        <label>Recipe by : </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="The Dancing Kitchen">The Dancing Kitchen</option>
          <option value="Aeshini's Kitchen">Aeshini's Kitchen</option>
        </select>
        {!isPending && <button>Add Recipe</button>}
        {isPending && <button disabled>Adding Recipe....</button>}
      </form>
    </div>
  )
}

export default CreatePost
