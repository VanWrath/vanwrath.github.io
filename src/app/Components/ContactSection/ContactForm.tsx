'use client';

import React, { useState } from 'react';

function ContactForm() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ subject, setSubject ] = useState('');
	const [ message, setMessage ] = useState('');

	//   Form validation state
	const [ errors, setErrors ] = useState({});

	//   Setting button text on form submission
	const [ buttonText, setButtonText ] = useState('Send');

	// Setting success or failure messages states
	const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
	const [ showFailureMessage, setShowFailureMessage ] = useState(false);
	const [sending, setSending] = useState(false);

	const handleValidation = () => {
		let tempErrors: any = {};
		let isValid: boolean = true;

		if (name.length <= 0) {
			tempErrors['name'] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors['email'] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors['subject'] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors['message'] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log('errors', errors);
		return isValid;
	};

	// Handling form submit

	//nodemailer submit
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		let isValidForm = handleValidation();
		if (isValidForm) {
			setButtonText('Sending');
			setSending(true);

			const data = {
				name: String(event.target.name.value),
				email: String(event.target.email.value),
				subject: String(event.target.subject.value),
				message: String(event.target.message.value)
			};

			console.log(data);

			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const { error } = await response.json();

			if (response.ok) {
				console.log('Message sent successfully');
				setSending(false);
				setShowSuccessMessage(true);
				setShowFailureMessage(false);
				setButtonText('Send');
				
			}
			if (!response.ok) {
				console.log('Error sending messsage');
				setSending(false);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText('Send');
			}
		}
		console.log(name, email, subject, message);
	};

	//SendGrid submit
	/*
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		let isValidForm = handleValidation();
		if (isValidForm) {
			setButtonText('Sending');
			const res = await fetch('/api/sendgrid', {
				body: JSON.stringify({
					email: email,
					name: name,
					subject: subject,
					message: message
				}),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText('Send');
				return;
			}

			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText('Send');
		}
		console.log(name, email, subject, message);
	};*/

	return (
		<form className="card-body" onSubmit={handleSubmit}>
			<div className="form-control">
				<label className="label" htmlFor="name">
					<span className="label-text">Name</span>
				</label>
				<input
					type="text"
					placeholder="name"
					id="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					className="input input-bordered"
					required
				/>
				{errors?.name && (<p className='text-red-500'>Name cannot be empty.</p>)}
			</div>

			<div className="form-control">
				<label className="label" htmlFor="email">
					<span className="label-text">Email</span>
				</label>
				<input
					type="email"
					placeholder="email"
					id="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className="input input-bordered"
					required
				/>
				{ errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
				)}
			</div>

			<div className="form-control">
				<label className="label" htmlFor="subject">
					<span className="label-text">Subject</span>
				</label>
				<input
					type="text"
					placeholder="subject"
					id="subject"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					className="input input-bordered"
					required
				/>
				{errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
				) }
			</div>

			<div className="form-control">
				<label className="label" htmlFor="message">
					<span className="label-text">Message</span>
				</label>
				<textarea
					className="textarea textarea-bordered"
					name="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					placeholder="Message"
					required
				/>
				{ errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
				) }
			</div>

			<div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" />
			<br />

			<div className="form-control mt-6">
				<button type="submit" className="btn btn-primary" disabled={sending}>
					{buttonText}
				</button>
			</div>
			<div className="text-left">
				{showSuccessMessage && (
					<p className="text-green-500 font-semibold text-sm my-2">
						Thank you! Your Message has been delivered.
					</p>
				)}
				{showFailureMessage && <p className="text-red-500">Oops! Something went wrong, please try again.</p>}
			</div>
		</form>
	);
}

export default ContactForm;
