import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import CourseInstanceForm from './components/CourseInstanceForm';
import CourseInstanceList from './components/CourseInstanceList';
import CourseInstanceDetail from './components/CourseInstanceDetail';

export default function App() {
  return (
    <Router>
      <header className="site-header">
        <div className="container">
          <h1>
            IITB-ASC Course Manager
          </h1>
          <a
            href="https://github.com/sssshish"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project in Github
          </a>
        </div>
      </header>
      <nav>
        <Link to="/create">Create Course</Link> | <Link to="/">List Courses</Link> | <Link to="/instances/create">Create Course Instance</Link> | <Link to="/instances"> List Course Instances</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/create" element={<CourseForm />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/instances/create" element={<CourseInstanceForm />} />
        <Route path="/instances" element={<CourseInstanceList />} />
        <Route path="/instances/:year/:semester/:id" element={<CourseInstanceDetail />} />
      </Routes>
    </Router>
  );
}
