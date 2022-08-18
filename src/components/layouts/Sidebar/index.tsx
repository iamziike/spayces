import classes from './Sidebar.module.css';
import SearchBar from '../../widgets/SearchBar';
import Icon from '../../widgets/Icon';
import List from '../../widgets/List';
import Avatar from '../../widgets/Avatar';
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';
import { ReactComponent as CloseSVG } from '../../../assets/images/close.svg';
import { ReactComponent as HomeSVG } from '../../../assets/images/home.svg';
import { ReactComponent as DashboardSVG } from '../../../assets/images/dashboard.svg';
import { ReactComponent as ProjectsSVG } from '../../../assets/images/project.svg';
import { ReactComponent as AnalyticsSVG } from '../../../assets/images/analytics.svg';
import { ReactComponent as UsersSVG } from '../../../assets/images/users.svg';
import { ReactComponent as Logout } from '../../../assets/images/Solid.svg';
import { ReactComponent as ChevronLeftSVG } from '../../../assets/images/chevron-left.svg';
import avatarSrc from '../../../assets/images/Avatar-53.svg';

type SidebarProps = {
  className: string;
  onSidebarClose: VoidFunction;
  isShowingBackdrop?: boolean;
};

const Sidebar = ({
  className = '',
  isShowingBackdrop = false,
  onSidebarClose,
}: SidebarProps) => {
  return (
    <>
      <div
        className={'backdrop ' + (isShowingBackdrop ? 'backdrop--open' : '')}
        onClick={onSidebarClose}
      ></div>
      <div className={`${classes.sidebar} ${className}`}>
        <div className={classes.sidebar__menu}>
          <header>
            <div className={classes['sidebar__menu__header__top']}>
              <Icon value={LogoSVG} />
              <Icon
                value={CloseSVG}
                className={classes['sidebar-close-btn']}
                onClick={onSidebarClose}
              />
              <Icon className={classes['sidebar-drawer-control']}>
                <ChevronLeftSVG />
              </Icon>
            </div>
            <SearchBar className={classes.searchbar} />
          </header>
          <nav>
            <List
              items={[
                {
                  type: 'SingleItem',
                  title: 'Home',
                  icon: <Icon value={HomeSVG} />,
                  active: true,
                },
                {
                  type: 'SingleItem',
                  title: 'Dashboard',
                  icon: <Icon value={DashboardSVG} />,
                },
                {
                  type: 'GroupItem',
                  title: 'Projects',
                  badge: 4,
                  icon: <Icon value={ProjectsSVG} />,
                  options: [
                    {
                      type: 'SingleItem',
                      title: 'Web design',
                    },
                    {
                      type: 'SingleItem',
                      title: 'Branding',
                    },
                    {
                      type: 'SingleItem',
                      title: 'Marketing',
                    },
                    { type: 'SingleItem', title: 'Sales' },
                  ],
                },
                {
                  type: 'SingleItem',
                  title: 'Analytics',
                  icon: <Icon value={AnalyticsSVG} />,
                },
                {
                  type: 'SingleItem',
                  title: 'Users',
                  icon: <Icon value={UsersSVG} />,
                },
              ]}
            />
          </nav>
        </div>
        <div className={classes['user-account']}>
          <Avatar src={avatarSrc} size={28} isStatusVisible={true} />
          <div className={classes['user-account__details']}>
            <p className={classes['user-account__details__name']}>Paul Price</p>
            <p className={`${classes['user-account__details__email']} subtext`}>
              paulprice@example.com
            </p>
          </div>
          <Icon value={Logout} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
