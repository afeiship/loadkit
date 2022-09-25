import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  NotFound,
} from "./pages/page-n";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const urls: string[] = [];

function App() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `/page${page}`;
    document.title = `DOC_page_${page}`;
    navigate(url);
  }, [page]);

  useEffect(() => {
    const watcher = new nx.UrlWatcher({ immediate: true });
    watcher.watch((prev, current) => {
      urls.push(current);
      console.log("watch...", urls);
    });
  }, [urls]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <button
          disabled={page === 6}
          onClick={(e) => {
            let cur = page + 1;
            cur = cur > 6 ? 6 : cur;
            setPage(cur);
          }}
        >
          Next
        </button>
        <div>Current Page</div>
        <button
          disabled={page === 1}
          onClick={() => {
            let cur = page - 1;
            cur = cur <= 0 ? 1 : cur;
            setPage(cur);
          }}
        >
          Previous
        </button>
      </header>
    </div>
  );
}

export default App;
