import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as constants from 'constants';
import cls from './Button.module.scss';

export enum ThemeButton {
	  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
		className?: string
	  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
    className, theme, children, ...otherProps
}): JSX.Element => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
