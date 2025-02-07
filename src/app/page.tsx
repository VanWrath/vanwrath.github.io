import Image from 'next/image';
import ProfilePic from '../../images/kyle_photo.jpg';
import styles from './page.module.css';
import NavbarMain from './Components/Navbar/NavbarMain';
import HeroSection from './Components/HeroSection';
import ProjectCardWeb from './Components/ProjectCards/ProjectCardWeb';
import ProjectCardMobile from './Components/ProjectCards/ProjectCardMobile';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer';
import { useScroll, useTransform, motion } from 'framer-motion';
import { GoogleAnalytics } from '@next/third-parties/google'

//image imports
import HobbyShopImage from './images/hobby-shop-screenshot.png';
import FundraiserImage from './images/Fundraiser-website-screenshot.png';
import DrinkingGameImage from './images/Mobile Game images/home-ss.png';
import ProjectCardImage from './Components/ProjectCards/ProjectCardImage';
import InventoryAppImage from './images/Inventory-app-ss.jpg';

export default function Home() {
	return (
		<>
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
			<main className="bg-base-200">
				<NavbarMain />
				<div className="container mx-auto">
					<div id="about" className="m-4">
						<HeroSection />
					</div>

					<div id="projects" className="bg-base-200">
						<h1 className="text-center text-5xl font-bold pt-20">Projects</h1>
						<div className="lg:grid lg:grid-cols-2 ">
							<ProjectCardWeb
								src={FundraiserImage.src}
								alt="project screenshot"
								title="Fundraiser Website"
								showButton={true}
								body="Leveraging the power and flexibility of React, I crafted a simple, yet intuitive and dynamic platform aimed at empowering users to raise funds for their causes effortlessly. With a sleek and modern user interface, the website offers seamless navigation and interaction, ensuring a delightful user experience. From creating personalized fundraising campaigns to securely processing donations, every aspect of the website is meticulously designed and implemented with the user's needs in mind. Through this project, I honed my skills in React development, UI/UX design, and project management, underscoring my commitment to building impactful digital solutions."
								url="https://vanwrath.github.io/flexible-fundraising-single-web-page/"
							/>

							<ProjectCardWeb
								src={HobbyShopImage.src}
								alt="project screenshot"
								title="Hobby Shop"
								showButton={true}
								body="This dynamic full-stack web application showcasing an array of products sourced from a database. Crafted with React, Bootstrap, Node.js, and MongoDB, this platform ensures a seamless and responsive user experience, promising both versatility and functionality."
								url="https://vanwrath.github.io/shop-web/"
							/>

							<ProjectCardMobile
								src={DrinkingGameImage.src}
								alt="project screenshot"
								title="Drinking Game App"
								showButton={false}
								body="Elevate any social gathering with this engaging and portable game crafted using React Native. Designed for versatility, it promises endless fun and entertainment on the go."
							/>

							<ProjectCardMobile
								src={InventoryAppImage.src}
								alt="project screenshot"
								title="Inventory App"
								showButton={false}
								body="This React Native Collection Organizer App offers a seamless and intuitive solution for enthusiasts and collectors alike. Harnessing the power of React Native, this mobile platform provides users with a versatile toolset to effortlessly catalog and organize their prized possessions."
							/>
						</div>
					</div>

					<div id="contact" className="">
						<ContactSection />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
