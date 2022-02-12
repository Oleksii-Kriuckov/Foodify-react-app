import React, { useEffect } from 'react';
import axios from 'axios'
import Main from '../Components/main';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Random = () => {
  const dispath = useDispatch();

  async function fetchRandomRecipe() {
    const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    console.log(responce.data.meals[0])
    dispath({type: "RandomRecipe", payload: responce.data.meals[0]})
  }

  useEffect(() => {
    fetchRandomRecipe()
  }, [])

  return <div className='d-flex flex-column align-items-center'>
    <Main/>
    <div className='buttons'>
      <Button variant='danger' className='me-3' onClick={fetchRandomRecipe}>Skip</Button>
      <Button variant='success'>Like</Button>
    </div>
  </div>;
};

export default Random;
