import React from 'react';

//props src, alt, title, body, url, showButton
function ProjectCardMobile(props: any) {
	return (
		<div className="card bg-base-100 shadow-xl m-4 p-5">
			<div className="mockup-phone">
				<div className="camera" />
				<div className="display">
					<figure className="max-w-80">
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

export default ProjectCardMobile;
