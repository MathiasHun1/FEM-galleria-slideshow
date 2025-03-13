import Header from './components/Header';
import data from './data.json';

function App() {
  console.log(data);

  return (
    <div className="app text-body container">
      <Header />
      <hr className="divider" />
      <main className="main wrapper">
        <div className="masonry-cont">
          {data.map((elem) => (
            <div key={elem.name} className="card">
              <img src={elem.images.gallery} alt="" />
              <div className="card__text">
                <div className="card__inner-wrapper">
                  <a
                    href="https://images.steamusercontent.com/ugc/769399012346960845/636154F0A518E36C0154078B114B2F266B00EDCC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                    className="link"
                  ></a>
                  <h2 className="card__title text-white text-heading-2">
                    {elem.name}
                  </h2>
                  <p className="card__artist text-white-opq text-subhead-2">
                    {elem.artist.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
