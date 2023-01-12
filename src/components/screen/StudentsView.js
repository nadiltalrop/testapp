import React from 'react';
import { useParams } from 'react-router-dom';

function StudentsView() {

  // const params = useParams()
  const { name } = useParams()
  //id app.js route n akath /:id enn koduthathan any value kodukkam

  return (
    // <h3>My id is {params.id}</h3>
    <h3>My name is { name }</h3>

  )
}

export default StudentsView;