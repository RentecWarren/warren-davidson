const Home = () => {
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/messages');

// Conditional Templating - check blogs exist before display  
  return (  
    <nav className="home">
      {/* { error && <div>{ error }</div> }
      {isPending && <p>Loading...</p>}     
      {blogs && <MessageList blogs={blogs} title="All Messages!" />}      */}
     </nav>
  );
}
 
export default Home;