import React from 'react';
import Image from 'next/image';

//props src, alt, title, body, url, showButton
function ProjectCardImage(props: any) {
	return (
		<div className="card bg-base-100 shadow-xl m-6">
			<figure className="min-w-60">
				<Image 
					src={props.src} 
					alt={props.alt} 
					width={384}  // standard card width
					height={256} // adjust based on your desired aspect ratio
				/>
			</figure>

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

export default ProjectCardImage;
