import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
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
    <div className="flex justify-center items-center"> {/* Flex container for centering */}
      <span
        className={classNames(
          style.appIcon,
          size && style[size],
          rounded && style.rounded,
          className ?? '',
        )}
      >
        <img src={imageUrl} alt="App Icon" className={style.appIconImage} />
      </span>
    </div>
  )
}

export default AppIcon
