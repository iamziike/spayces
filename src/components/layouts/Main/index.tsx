import { useEffect, useState } from 'react';

import classes from './Main.module.css';
import Avatar from '../../widgets/Avatar';
import SearchBar from '../../widgets/SearchBar';
import Icon from '../../widgets/Icon';
import Button from '../../widgets/Button';
import CoinCard from '../../ui/CoinCard';
import profileImgSrc from '../../../assets/images/user2.jfif';
import trendChartSrc from '../../../assets/images/_base.Mini Trend Chart.svg';
import ArrowTopRightSrc from '../../../assets/images/arrow-top-right.svg';
import OrdersTable from '../../ui/OrdersTable';
import user1Src from '../../../assets/images/user1.jfif';
import user2Src from '../../../assets/images/user2.jfif';
import user3Src from '../../../assets/images/user3.jfif';
import user4Src from '../../../assets/images/user4.jfif';
import user5Src from '../../../assets/images/user5.jfif';
import user6Src from '../../../assets/images/user6.jfif';
import user7Src from '../../../assets/images/user7.jfif';
import user8Src from '../../../assets/images/user8.png';
import curologyImageSrc from '../../../assets/images/curology.jfif';
import roseClayImageSrc from '../../../assets/images/Rose_Clay.jfif';
import narcisoImageSrc from '../../../assets/images/Narciso.jfif';
import lineChartImgSrc from '../../../assets/images/line-chart.svg';
import pieChartImgSrc from '../../../assets/images/pie-chart.svg';
import { ReactComponent as HelpSVG } from '../../../assets/images/help.svg';
import { Order, Trend } from '../../../types/types';

type StoreBasicDetail = {
  title: string | number;
  description: string;
  trendIndicator?: Trend;
};

const imgSrc = [
  user1Src,
  user2Src,
  user3Src,
  user4Src,
  user5Src,
  user6Src,
  user7Src,
  user8Src,
];

const Main = ({ className }: { className?: string }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const topPerformingProducts = [
    {
      imageSrc: curologyImageSrc,
      productType: 'SKINCARE',
      description: 'Curology skin cleanser',
      price: 27.99,
    },
    {
      imageSrc: roseClayImageSrc,
      productType: 'SKINCARE',
      description: 'Rose Clay face maske',
      price: 27.99,
    },
    {
      imageSrc: narcisoImageSrc,
      productType: 'SKINCARE',
      description: 'Narciso body cream',
      price: 27.99,
    },
  ];

  const storeBasicDetails: StoreBasicDetail[] = [
    {
      title: 'GHS 100,000.00',
      description: 'Store Balance',
      trendIndicator: {
        by: 95,
        direction: 'down',
        trendImageSrc: trendChartSrc,
      },
    },
    { title: 8, description: 'Active Products' },
    { title: 10, description: 'New Orders' },
  ];

  const handleOrdersSelection = (id: number | string | 'all') => {
    if (id === 'all') {
      return setOrders((prev) => {
        return prev.map((order) => ({
          ...order,
          isSelected: true,
        }));
      });
    }

    setOrders((prev) => {
      const orders = [...prev];
      const order = { ...orders[id as number] };
      order.isSelected = !order.isSelected;
      orders[id as number] = order;
      console.log(orders);
      return orders;
    });
  };

  useEffect(() => {
    const orders: Order[] = [];
    for (let count = 0; count < 8; count++) {
      orders.push({
        id: count,
        avatarSrcPath: imgSrc[count],
        email: 'justinmarkson@example.com',
        firstname: 'Justin',
        lastname: 'Markson',
        jobPosition: 'Sales Manager',
        totalContributions: imgSrc,
        weeklyTrend: {
          by: 17.39,
          direction: 'down',
          trendImageSrc: ArrowTopRightSrc,
        },
        isSelected: false,
      });
    }
    setOrders(orders);
  }, []);

  return (
    <div className={`${className} ${classes.main}`}>
      <header>
        <div className={classes.header__top}>
          <SearchBar hasBoard className={classes.header__top__searchbar} />
          <Icon>
            <Avatar src={profileImgSrc} size={40} />
          </Icon>
        </div>
        <div className={classes.header__bottom}>
          <div>
            <h2 className={classes.greeting}>Welcome Back</h2>
            <p className='subtext'>
              Here is an overview of whats going on in your store.
            </p>
          </div>
          <Button title='New Product' />
        </div>
      </header>
      <main>
        <div className={classes['store-basic-details']}>
          {storeBasicDetails.map(({ description, title, trendIndicator }) => {
            let asideContent = null;

            if (trendIndicator)
              asideContent = {
                text: trendIndicator.by,
                icon: {
                  type: 'path',
                  value: trendIndicator.trendImageSrc,
                },
              };

            return (
              <CoinCard
                key={description}
                mainText={title}
                description={description}
                asideContent={asideContent as any}
              />
            );
          })}
        </div>
        <OrdersTable
          orders={orders}
          onSelect={handleOrdersSelection}
          className={classes['orders-table']}
        />
        <div className={classes['store-top-performing-items__wrapper']}>
          <header>
            <h2>Top Performing Products</h2>
            <p className='subtext'>
              Here a some products people seem to love from you
            </p>
          </header>
          <main className={classes['store-top-performing-items']}>
            {topPerformingProducts.map(
              ({ imageSrc, description, price, productType }) => (
                <div
                  className={`${classes['store-top-performing-item']} default-border`}
                  key={imageSrc}
                >
                  <div
                    style={{
                      backgroundImage: `url(${imageSrc})`,
                    }}
                    className={classes['store-top-performing-item__image']}
                  ></div>
                  <div
                    className={classes['store-top-performing-item__details']}
                  >
                    <span className='subtext'>{productType}</span>
                    <span className='orange-badge'>${price}</span>
                    <span>{description}</span>
                  </div>
                </div>
              )
            )}
          </main>
        </div>
        <div className={classes['orders-activity__chart']}>
          <div
            className={`${classes['orders-activity__chart--line-chart']} default-border`}
          >
            <header>
              <p className='subtext'>
                <span>Total Paid</span>
                <span className='green-badge'>+2.5%</span>
              </p>
              <h2>1,321</h2>
            </header>
            <main>
              <img src={lineChartImgSrc} alt='line-chart' />
            </main>
          </div>
          <div
            className={`${classes['orders-activity__chart--pie-chart']} default-border`}
          >
            <header>
              <h3>Order Activity</h3>
              <Icon value={HelpSVG} />
            </header>
            <main>
              <img src={pieChartImgSrc} alt='pie-chart' />
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
