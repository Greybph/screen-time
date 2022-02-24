import dogIcon from '~/assets/dogIcon.svg'
import catIcon from '~/assets/catIcon.svg'
import pandaIcon from '~/assets/pandaIcon.svg'
import pigIcon from '~/assets/pigIcon.svg'

export default function setIcon(icon) {
  switch (icon) {
    case 'dog':
      return dogIcon
    case 'cat':
      return catIcon
    case 'pig':
      return pigIcon
    case 'panda':
      return pandaIcon
    }
}