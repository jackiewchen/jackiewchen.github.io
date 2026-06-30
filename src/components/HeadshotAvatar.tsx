import { useState } from 'react'

const HEADSHOT_SRC = '/images/headshot.png'

type HeadshotAvatarProps = {
  alt?: string
  className?: string
  fallbackText?: string
}

function HeadshotAvatar({
  alt = 'Jackie Chen headshot',
  className = '',
  fallbackText = 'J',
}: HeadshotAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const avatarClassName = [
    'headshot-avatar',
    imageFailed ? 'headshot-avatar-fallback' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (imageFailed) {
    return (
      <span className={avatarClassName} aria-label={alt} role="img">
        {fallbackText}
      </span>
    )
  }

  return (
    <img
      className={avatarClassName}
      src={HEADSHOT_SRC}
      alt={alt}
      onError={() => setImageFailed(true)}
    />
  )
}

export default HeadshotAvatar
