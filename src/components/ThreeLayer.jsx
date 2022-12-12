import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container:
        'bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
    title: 'text-sky-900 dark:text-sky-400',
    body: 'text-sky-800 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300 prose-a:text-sky-900 [--tw-prose-background:theme(colors.sky.50)]',
  },
  warning: {
    container:
        'bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 prose-code:text-amber-900 prose-a:text-amber-900 [--tw-prose-underline:theme(colors.amber.400)] dark:[--tw-prose-underline:theme(colors.sky.700)] [--tw-prose-background:theme(colors.amber.50)] dark:text-slate-300 dark:prose-code:text-slate-300',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
}

export function ThreeLayer({ type = 'note', title, children }) {
  let IconComponent = icons[type]

  return (
      <div className={clsx('container my-8 flex justify-center rounded-3xl p-6', styles[type].container)}>
        <div className="flex justify-center ml-4 flex-auto pl-20">
          <div className="box relative bg-violet-600 h-64 w-64 flex flex-col text-center p-2 text-white">
            <span className="title">DiagramFrame</span>
            <div className="relative flex-grow">
              <div className="lifeline-layer h-full w-full flex justify-center absolute bg-green-700 border-dashed border-2 border-white">
                <div className="content">LifelineLayer</div>
              </div>
              <div className="message-layer h-full w-full flex justify-center absolute bg-sky-700 border-dashed border-2 border-white">
                <div className="content">MessageLayer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
