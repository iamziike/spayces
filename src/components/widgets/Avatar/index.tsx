import classes from './Avatar.module.css';

type AvatarProps = {
  src?: string;
  size: 40 | 28 | 24;
  className?: string;
  isStatusVisible?: boolean;
};

const SingleAvatar = ({
  src,
  size,
  isStatusVisible = false,
  className = '',
  style = {},
  text = '',
}: AvatarProps & { style?: { [key: string]: string }; text?: string }) => {
  return (
    <div
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        width: size + 'px',
        height: size + 'px',
      }}
      className={`${className} ${classes.avatar} ${
        isStatusVisible ? classes['avatar--status'] : ''
      }`}
    >
      {text}
    </div>
  );
};

const Avatar = ({
  group = [],
  max = 0,
  ...props
}: AvatarProps & { group?: string[]; max?: number }) => {
  if (group.length)
    return (
      <div className={classes['avatar-group']}>
        {group
          .filter((_, index) => index <= max)
          .map((avatar, index) => (
            <SingleAvatar
              style={{
                marginLeft: -5 + 'px',
                zIndex: `${group.length - index}`,
              }}
              key={index}
              {...props}
              src={avatar}
            />
          ))}
        {max < group.length ? (
          <SingleAvatar
            style={{
              position: 'relative',
              marginLeft: -5 + 'px',
              zIndex: `${group.length - max - 1}`,
            }}
            text={`+${group.length - max - 1}`}
            className={classes['avatar-group__left-over-count']}
            {...props}
          />
        ) : (
          ''
        )}
      </div>
    );

  return <SingleAvatar {...props} />;
};

export default Avatar;
