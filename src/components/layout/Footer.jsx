import { FacebookIcon, GithubIcon, LinkedInIcon } from './assets/icons'

function Footer() {
	const copyYear = new Date().getFullYear()

	return (
		<footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
			<div className='grid grid-flow-col gap-4'>
				<div>
					<a
						href='https://www.facebook.com/403WebDev'
						target='_blank'
						rel='noreferrer'
					>
						<FacebookIcon />
					</a>
				</div>

				<div>
					<a
						href='https://github.com/N00bG1rl'
						target='_blank'
						rel='noreferrer'
					>
						<GithubIcon />
					</a>
				</div>

				<div>
					<a
						href='https://www.linkedin.com/in/helen-marttila-403'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon />
					</a>
				</div>
			</div>

			<div className='grid grid-flow-col gap-2 text-neutral-content'>
				<p>&copy; Copyright {copyYear}</p>
				<span>|</span>
				<a
					href='https://www.403.ee'
					target='_blanc'
					className='hover:text-secondary'
				>
					www.403.ee
				</a>
				<span>|</span>
				<a href='mailto:403helen@gmail.com' className='hover:text-secondary'>
					403helen@gmail.com
				</a>
			</div>
		</footer>
	)
}

export default Footer
