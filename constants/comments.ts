import eduardoht from "@/public/img/comments/eduardoht.png"
import ojuliocode from "@/public/img/comments/ojuliocode.jpg"
import jaineamaral from "@/public/img/comments/jaineamaral.png"
import davimoreira from "@/public/img/comments/davimoreira.jpeg"
import { Comment } from "@/models/comment"

export const commentsData: Comment[] = [
  {
    id: 'eduardoht',
    avatar: eduardoht,
    link: 'https://www.instagram.com/eduardohteixeira/',
    arrouba: 'eduardohteixeira'
  },
  {
    id: 'davimoreira',
    avatar: davimoreira,
    link: 'https://www.instagram.com/davibmoreira_/',
    arrouba: 'davibmoreira_'
  },
  {
    id: 'jaineamaral',
    avatar: jaineamaral,
    link: 'https://www.instagram.com/_jaineamaral/',
    arrouba: '_jaineamaral'
  },
  {
    id: 'ojuliocode',
    avatar: ojuliocode,
    link: 'https://www.instagram.com/ojuliocode/',
    arrouba: 'ojuliocode'
  }
]