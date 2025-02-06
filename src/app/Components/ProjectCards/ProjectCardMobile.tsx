import React from 'react';
import Image from 'next/image';

//props src, alt, title, body, url, showButton
function ProjectCardMobile(props: any) {
	return (
		<div className="card bg-base-100 shadow-xl m-4 p-5">
			<div className="mockup-phone">
				<div className="camera" />
				<div className="display">
					<figure className="max-w-80">
						<Image 
							src={props.src} 
							alt={props.alt} 
							width={320}  // mobile phone display width
							height={640}  // typical mobile aspect ratio (2:1)
						/>
					</figure>
				</div>
			</div>

			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p>{props.body}</p>
				<div className="card-actions justify-start m-5">
					{
						props.showButton ? <a className="btn btn-primary" href={props.url} target="_blank" rel="noopener noreferrer">
							Check it out
						</a> :
						<div />}
				</div>
			</div>
		</div>
	);
}

export default ProjectCardMobile;
