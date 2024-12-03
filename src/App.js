
import './App.css';
import Navbars from './Components/Navbar';
import { Container, Row } from "react-bootstrap"
import SideBars from './Components/Sidbar';
import Overview from './Components/Overview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Directory from './Components/Directory';
import AddMember from './Components/AddMember';
import LogIn from './Components/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />


        <Container fluid className="mt-3">
          <Row>

            <SideBars />

            <Routes>
              <Route path='/' element={<LogIn />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/PeopleDirectory' element={<Directory />} />
              <Route path='/addMember' element={<AddMember />} />

            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
