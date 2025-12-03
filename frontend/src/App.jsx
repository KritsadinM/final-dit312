import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // Filter + Search
  const filteredMovies = movies.filter((m) => {
    const matchFilter = filter === "All" ? true : m.genre === filter;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="page">

      {/* HEADER */}
      <header className="navbar">
        <h1 className="logo">🎬 Movie Library</h1>

        <input
          type="text"
          className="search-box"
          placeholder="ค้นหาหนัง..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

        {/* FILTER BUTTONS */}
        <div className="filters">
          {["All", "Action", "Drama", "Crime", "Sci-Fi"].map((g) => (
            <button
              key={g}
              className={`filter-btn ${filter === g ? "active" : ""}`}
              onClick={() => setFilter(g)}
            >
              {g}
            </button>
          ))}
        </div>


      {/* MOVIE GRID */}
      <div className="grid">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="card"
            onClick={() => setSelected(movie)}
          >
            <img src={movie.image_url} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year} • {movie.genre}</p>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img className="modal-img" src={selected.image_url} />
            <h2>{selected.title}</h2>
            <p>ปีที่ฉาย: {selected.year}</p>
            <p>ประเภท: {selected.genre}</p>

            <button className="close-btn" onClick={() => setSelected(null)}>
              ปิด
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
