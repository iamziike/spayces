import classes from './CoinCard.module.css';
import {
  IconComponent,
  IconSrcString,
  SVGComponent,
} from '../../../types/types';
import { ReactComponent as CoinSVG } from '../../../assets/images/coins.svg';
import { ReactComponent as ArrowDown } from '../../../assets/images/arrow-bottom-right.svg';

type CoinProps = {
  mainText: string | number;
  description: string;
  asideContent?: {
    text: string | number;
    icon: IconSrcString | IconComponent;
  } | null;
};

const CoinCard = ({
  asideContent = null,
  description,
  mainText,
}: CoinProps) => {
  let AsideIconComponent: SVGComponent | null = null;

  if (asideContent && asideContent.icon.type === 'component') {
    AsideIconComponent = asideContent.icon.value;
  }

  return (
    <div className={`${classes['coin-card']}  default-border`}>
      <div>
        <CoinSVG />
        <span className={classes['coin-card__description']}>{description}</span>
        <h1 className={classes['coin-card__title']}>
          <span>{mainText}</span>
          {asideContent && (
            <span className={classes['coin-card__aside-text--mobile']}>
              <ArrowDown />
              <span>{asideContent.text}%</span>
            </span>
          )}
        </h1>
      </div>
      {asideContent && (
        <div>
          <>
            <p className={classes['coin-card__aside-text']}>
              <ArrowDown />
              <span>{asideContent.text}%</span>
            </p>
            <div className={classes['coin-card__aside-content__image']}>
              {asideContent.icon.type === 'path' && (
                <img src={asideContent.icon.value} alt='trend chart' />
              )}
              {AsideIconComponent && <AsideIconComponent />}
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default CoinCard;
