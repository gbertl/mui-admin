import { CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext } from './context/ColorModeContext';
import Sidebar from './layouts/Sidebar';
import Topbar from './layouts/Topbar';
import Dashboard from './pages/dashboard';
import Contacts from './pages/Contacts';
import Team from './pages/Team';
import { useGetTheme } from './theme';
import Invoices from './pages/Invoices';

const App = () => {
  const { mode } = useContext(ColorModeContext);
  const theme = useGetTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
