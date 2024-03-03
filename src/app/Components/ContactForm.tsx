import React from 'react';

function ContactForm() {
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
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="text" placeholder="name" className="input input-bordered" required />
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" placeholder="email" className="input input-bordered" required />
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Subject</span>
							</label>
							<input type="text" placeholder="subject" className="input input-bordered" required />
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Message</span>
							</label>
							<textarea className="textarea textarea-bordered" placeholder="Message" required />
						</div>

						<div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" />
						<br />

						<div className="form-control mt-6">
							<button className="btn btn-primary">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
