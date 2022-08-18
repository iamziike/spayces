import classes from './OrdersTable.module.css';
import Avatar from '../../widgets/Avatar';
import Icon from '../../widgets/Icon';
import { ReactComponent as DownloadSVG } from '../../../assets/images/download.svg';
import { ReactComponent as BinSVG } from '../../../assets/images/delete.svg';
import { ReactComponent as EditSVG } from '../../../assets/images/edit.svg';
import { ReactComponent as RightArrowSVG } from '../../../assets/images/chevron-right.svg';
import { Order, VoidFunctionWithParams } from '../../../types/types';

type OrdersTableProps = {
  orders: Order[];
  className?: string;
  onSelect: VoidFunctionWithParams<string | number>;
};

const OrdersTable = ({
  onSelect,
  orders,
  className = '',
}: OrdersTableProps) => {
  return (
    <div className={`no-visible-scrollbar ${className}`}>
      <div className={`${classes['orders-table']} default-border`}>
        <div>
          <span>New Orders</span>
          <span>.</span>
          <span className='subtext'>Total order value: GHS 42,350.00</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type='checkbox'
                  checked={orders.every((order) => order.isSelected)}
                  onChange={() => {
                    onSelect('all');
                  }}
                />
              </th>
              <th>Full Name</th>
              <th>Email</th>
              <th>This Week</th>
              <th>Total contribution</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              ({
                id,
                firstname,
                lastname,
                email,
                isSelected,
                jobPosition,
                avatarSrcPath,
                weeklyTrend,
                totalContributions,
              }) => (
                <tr key={id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={isSelected}
                      onChange={() => {
                        onSelect(id);
                      }}
                    />
                  </td>
                  <td className={classes['orders-table__fullname']}>
                    <div>
                      <Avatar src={avatarSrcPath} size={40} />
                    </div>
                    <div>
                      <p>{`${firstname} ${lastname}`}</p>
                      <p className='subtext'>{jobPosition}</p>
                    </div>
                  </td>
                  <td>{email}</td>
                  <td>
                    <div className={classes['orders-table__badge']}>
                      <span>
                        <img
                          src={weeklyTrend.trendImageSrc}
                          alt='trend-image'
                        />
                      </span>
                      <span>{weeklyTrend.by}</span>
                    </div>
                  </td>
                  <td>
                    <Avatar group={totalContributions} size={24} max={3} />
                  </td>
                  <td>
                    <div className={classes['orders-table__details-controls']}>
                      <Icon value={DownloadSVG} />
                      <Icon value={BinSVG} />
                      <Icon value={EditSVG} />
                      <Icon value={RightArrowSVG} />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
