import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//library.add(faGithub, faLinkedin);

function Footer() {
	return (
		<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<div className="flex flex-col w-full">
				<div className="divider divider-neutral" />
			</div>
			<nav className="grid grid-flow-col gap-4">
				<a className="link link-hover" href="#about">
					About
				</a>
				<a className="link link-hover" href="#projects">
					Projects
				</a>
				<a className="link link-hover" href="#contact">
					Contact
				</a>
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<a href="https://github.com/VanWrath">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<FontAwesomeIcon icon={faGithub} />
						</svg>
					</a>

					<a href="https://www.linkedin.com/in/kyle-vannarath-66654b130/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</svg>
					</a>
				</div>
			</nav>
			<aside>
				<p>© 2024 Kyle Vannarath</p>
			</aside>
		</footer>
	);
}

export default Footer;
