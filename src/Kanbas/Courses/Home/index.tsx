import Modules from "../Modules/index";

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <h2>Home</h2>
        <Modules />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
        <h4>Course Status</h4>
        <span className="float-end">
          <button type="button" className="btn btn-light border border-dark"> Unpublish</button>
          <button type="button" className="btn btn-success"> Published</button>
          <button type="button" className="btn btn-light border border-dark"> Import Existing Content</button>
          <button type="button" className="btn btn-light border border-dark"> Import From Command</button>
          <button type="button" className="btn btn-light border border-dark"> Choose Homepage</button>
        </span>
      </div>
    </div>
  );
}
export default Home;