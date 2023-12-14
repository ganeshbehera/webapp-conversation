import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  className?: string
  imageUrl: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'large',
  rounded = false,
  className,
  imageUrl = 'https://grayfords.co.uk/wp-content/uploads/2023/02/logo-1.png',
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'large' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
    >
      <img src={imageUrl} alt="App Icon" />
    </span>
  )
}

export default AppIcon
