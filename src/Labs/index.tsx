import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h2>Siddharth Ramachandran</h2>
      Siddharth's Github:
      <a
        id="wd-github"
        href="https://github.com/siddharthr3535/kambaz-react-web-app"
      >
        Siddharth's Github
      </a>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
