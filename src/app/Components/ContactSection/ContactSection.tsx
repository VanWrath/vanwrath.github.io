import React from 'react';
import ContactForm from './ContactForm';

function ContactSection() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left m-6">
					<h1 className="text-5xl font-bold">Contact Me!</h1>
					<p className="py-6">
						Thank you for visiting my portfolio! If you have any inquiries, project opportunities, or simply
						want to connect, feel free to reach out to me. I'm always eager to collaborate on exciting
						projects and explore new opportunities in the realm of software development.
					</p>
				</div>
				<div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 m-6">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
