import React from 'react';
import Image from 'next/image';

import image from '../images/kyle_photo.jpg';

function HeroSection() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className="w-full max-w-sm px-4 lg:px-0">
					<Image 
						src={image.src} 
						alt="Portrait" 
						width={384}
						height={512}
						className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[3/4]" 
						priority
					/>
				</div>
				<div className="m-6">
					<h1 className="text-5xl font-bold">About</h1>
					<p className="py-6">
						Welcome to my world of code! I'm Kyle Vannarath, a dynamic software developer fueled by a
						passion for crafting innovative solutions. Armed with a Bachelor of Science in Computer Science
						from York University, I've honed my skills to transform ideas into reality.
					</p>

					<p className="py-6">
						My journey through programming has been an exhilarating ride, marked by diverse projects that
						stretch the boundaries of possibility. Currently, I'm immersed in the creation of a cutting-edge
						mobile application designed to streamline item management for users. But beyond the screen, I'm
						a multifaceted individual. Whether I'm conquering virtual realms in video games, sculpting my
						physique through exercise, or unraveling the mysteries of electronics, I'm always eager to
						explore new horizons.
					</p>

					<p className="py-6">
						Curious to delve deeper into my arsenal of skills and experiences? Eager to collaborate on
						groundbreaking ventures? Let's connect and embark on an exciting journey together.
					</p>

					<a className="btn btn-primary" href="#contact">
						Lets Connect
					</a>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
