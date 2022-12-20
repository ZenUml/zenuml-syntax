import { Callout } from '@/components/Callout'
import { LinkGrid } from '@/components/LinkGrid'
import { Button } from '@/components/Button'
import { ThreeLayer} from "@/components/ThreeLayer";
import {PlaygroundHtml} from "@/components/PlaygroundHtml";


const tags = {
  'playground': {
    render: PlaygroundHtml
  },
  'three-layer': {
    render: ThreeLayer
  },
  button: {
    render: Button,
  },
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'link-grid': {
    render: LinkGrid,
  },
  'link-grid-link': {
    selfClosing: true,
    render: LinkGrid.Link,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
