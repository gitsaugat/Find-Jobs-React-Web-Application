import useFecthJobs from './components/useFecthJobs'
import {Container} from 'react-bootstrap';
import React from 'react';
import Job from './components/Job';
function App() {
  const [params , setParams] = React.useState({});
  const [page , setPage] = React.useState(1);
 
  const {  jobs ,loading , error  }= useFecthJobs(params , page)
  return (
   <Container>

      {loading && <h1>Loading ...</h1>}
      {error && <h1>error loading</h1>}
      {jobs.map((job) => (
        <Job key = {job.id} job = {job} />
      ))}


   </Container>
  );
}

export default App;
