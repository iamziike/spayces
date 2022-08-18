export type VoidFunctionWithParams<T> = (value: T) => void;

export type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type Trend = {
  direction: 'up' | 'down' | 'static';
  by: number;
  trendImageSrc: string;
};

export type User = {
  id: number | string;
  avatarSrcPath: string;
  firstname: string;
  lastname: string;
};

export type Order =
  | User & {
      email: string;
      jobPosition: string;
      weeklyTrend: Trend;
      totalContributions: string[];
      isSelected: boolean;
    };

export type IconSrcString = {
  type: 'path';
  value: string;
};

export type IconComponent = {
  type: 'component';
  value: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
