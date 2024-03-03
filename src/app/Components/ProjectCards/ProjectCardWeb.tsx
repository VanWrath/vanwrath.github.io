import React from 'react';
import { motion } from 'framer-motion';

//props src, alt, title, body, url, showButton
function ProjectCardWeb(props: any) {
	return (
		<div className="card bg-base-100 shadow-xl m-6">
			<div>
				<div className="mockup-browser border bg-base-300 m-4">
					<div className="mockup-browser-toolbar">
						<div className="input">{props.url}</div>
					</div>
					<figure className="min-w-60">
						<img src={props.src} alt={props.alt} />
					</figure>
				</div>
			</div>

			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p>{props.body}</p>
				<div className="card-actions justify-end m-5">
					{
						props.showButton ? <a className="btn btn-primary" href={props.url}>
							Check it out
						</a> :
						<div />}
				</div>
			</div>
		</div>
	);
}

export default ProjectCardWeb;
