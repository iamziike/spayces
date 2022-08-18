import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import classes from './App.module.css';
import Main from './components/layouts/Main';
import Sidebar from './components/layouts/Sidebar';
import Icon from './components/widgets/Icon';
import { ReactComponent as LogoSVG } from './assets/images/logo.svg';
import { ReactComponent as MenuSVG } from './assets/images/menu.svg';

const App = () => {
  const matches = useMediaQuery('(max-width:1100px)');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarVisibility = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!matches && isSidebarOpen) setIsSidebarOpen(false);
  }, [matches]);

  return (
    <div
      className={`${classes.app} ${
        isSidebarOpen ? classes['app--sidebar-open'] : ''
      }`}
    >
      <div className={classes['app-bar']}>
        <Icon value={LogoSVG} />
        <Icon value={MenuSVG} onClick={handleSidebarVisibility} />
      </div>
      <Sidebar
        isShowingBackdrop={isSidebarOpen}
        onSidebarClose={handleSidebarVisibility}
        className={`${classes.sidebar} ${
          isSidebarOpen ? classes['sidebar--open'] : ''
        }`}
      />
      <Main className={classes.main} />
    </div>
  );
};

export default App;
