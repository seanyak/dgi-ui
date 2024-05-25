import FlexGroup from './ui/flexGroup'

export default function Community() {
  return (
    <FlexGroup>
      <h2 className='text-2xl font-bold'>Community</h2>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>Newsletter</h3>
          <p>
            Stay up to date with new components, announcements, blog posts,
            and tips related to DGI-UI, subscribe to our newsletter
          </p>
          <a
            href='https://yaksean.com/#contact'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-500 hover:underline dark:text-sky-300'
          >
            Subscribe to our newsletter
          </a>
        </div>

        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>Twitter</h3>
          <p>
            Stay up-to-date on the latest DGI-UI news, follow
            us on Twitter.
          </p>
          <a
            href='https://www.twitter.com/compasean'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-500 hover:underline dark:text-sky-300'
          >
            Follow us on Twitter
          </a>
        </div>

        <div className='flex flex-col gap-1.5'>
          <h3 className='text-xl font-semibold'>GitHub</h3>
          <p>
            Explore our source code, check out the GitHub repo.
          </p>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-500 hover:underline dark:text-sky-300'
          >
            GitHub repo
          </a>
        </div>
      </div>
    </FlexGroup>
  )
}
