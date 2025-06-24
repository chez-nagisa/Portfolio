'use client'

import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaJsSquare,
	FaReact,
	FaNodeJs
} from 'react-icons/fa';

import {
	SiTypescript,
	SiFigma,
	SiC
} from 'react-icons/si';


import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Code, Palette, Database } from 'lucide-react';

const Portfolio = () => {
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'skills', 'projects', 'values', 'contact'];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
					setActiveSection(section);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};

	const skillsData = [
		{ name: 'HTML', icon: <FaHtml5 className="w-6 h-6" /> },
		{ name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" /> },
		{ name: 'Sass', icon: <FaSass className="w-6 h-6" /> },
		{ name: 'JavaScript', icon: <FaJsSquare className="w-6 h-6" /> },
		{ name: 'React', icon: <FaReact className="w-6 h-6" /> },
		{ name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
		{ name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
		{ name: 'Figma', icon: <SiFigma className="w-6 h-6" /> },
		{ name: 'C', icon: <SiC className="w-6 h-6" /> }
	];

	return (
		<div className="min-h-screen bg-cream text-black">
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 bg-cream bg-opacity-95 backdrop-blur-sm">
				<div className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						<div className="font-bold text-xl font-garamond text-navy">
							Nagisa Hara
						</div>
						<div className="hidden md:flex space-x-8">
							{['Home', 'About', 'Skills', 'Projects', 'Values', 'Contact'].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item.toLowerCase())}
									className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 font-garamond text-navy ${activeSection === item.toLowerCase() ? 'opacity-100' : 'opacity-60'
										}`}
								>
									{item}
								</button>
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="min-h-screen flex items-center justify-center px-6">
				<div className="text-center max-w-4xl mx-auto">
					<h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight font-playfair text-navy">
						Hello, I'm Nagisa.
					</h1>
					<p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-80 font-garamond text-navy">
						Thank you for visiting my website!
					</p>
					<button
						onClick={() => scrollToSection('about')}
						className="px-8 py-3 border-2 border-navy text-navy hover:bg-navy hover:bg-opacity-10 transition-all duration-300 font-medium font-garamond"
					>
						Learn More About Me
					</button>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-light mb-16 text-center font-playfair text-navy">
						About Me
					</h2>

					{/* 写真＋文章の2カラム */}
					<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
						{/* 左：プロフィール写真 */}
						<div className="flex justify-center">
							<img
								src="/my_pic.jpg" // publicフォルダ内に画像を置いた場合のパス
								alt="Profile"
								className="rounded-lg w-64 h-64 object-cover shadow-lg"
							/>
						</div>

						{/* 右：自己紹介文 */}
						<div>
							<p className="text-lg leading-relaxed font-garamond text-navy">
								I am majoring in French Studies at Sophia University while studying engineering independently and learning at 42 Tokyo. I aim to become a global web creator, capable of working and contributing internationally.
							</p>
						</div>
					</div>

					{/* What I Can Do */}
					<div className="rounded-lg p-8 bg-beige">
						<h3 className="text-2xl font-medium mb-4 font-playfair text-navy">
							What I Can Do
						</h3>
						<ul className="space-y-3 font-garamond text-navy">
							<li>• Build static websites using HTML, CSS, and JavaScript</li>
							<li>• Currently learning React and Node.js for interactive applications</li>
							<li>• Study computer science fundamentals with C language at 42 Tokyo</li>
							<li>• Work actively in terminal and manage projects using Git and GitHub</li>
							<li>• Build clean, accessible websites with passion for problem-solving</li>
						</ul>
					</div>
				</div>
			</section>


			{/* Skills Section */}
			<section id="skills" className="py-20 px-6 bg-beige">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-light mb-16 text-center font-playfair text-navy">
						Skills
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
						{skillsData.map((skill, index) => (
							<div
								key={index}
								className="flex flex-col items-center p-6 rounded-lg bg-cream transition-transform duration-300 hover:scale-105"
							>
								<div className="mb-4 text-navy">
									{skill.icon}
								</div>
								<span className="text-sm font-medium text-center font-garamond text-navy">
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="projects" className="py-20 px-6 bg-cream">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-light mb-16 text-center font-playfair text-navy">
						Projects
					</h2>

					<div className="grid md:grid-cols-2 gap-8 items-center">
						<img
							src="/project_42.png"
							alt="42 Projects"
							className="rounded-lg shadow-md object-cover w-full h-64 md:order-1"
						/>

						<div className="md:order-2">
							<h3 className="text-2xl font-medium font-playfair text-navy mb-2">42 projects</h3>
							<p className="text-navy font-garamond mb-4">
								C projects from the 42 curriculum.
							</p>
							<hr className="border-navy mb-3" />
							<div className="flex flex-wrap gap-3 text-sm font-garamond text-navy mb-4">
								<span>C</span>
							</div>
							<div className="flex gap-4">
								<a href="https://github.com/chez-nagisa?tab=repositories" target="_blank" rel="noopener noreferrer">
									<Github className="w-5 h-5 text-navy hover:opacity-70 transition" />
								</a>
							</div>

						</div>
					</div>

					<div className="space-y-12">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<img
								src="/project_cafe.jpg"
								alt="Café Website"
								className="rounded-lg shadow-md object-cover w-full h-64 md:order-2"
							/>

							<div className="md:order-1">
								<h3 className="text-2xl font-medium font-playfair text-navy mb-2">Café Website</h3>
								<p className="text-navy font-garamond mb-4">
									Cooking is another passion of mine, and I actually run my own café! Here is its website.
								</p>
								<hr className="border-navy mb-3" />
								<div className="flex flex-wrap gap-3 text-sm font-garamond text-navy mb-4">
									<span>HTML</span>
									<span>CSS</span>
									<span>JavaScript</span>
								</div>
								<div className="flex gap-4">
									<a href="https://github.com/chez-nagisa/ChezNagisa-website" target="_blank" rel="noopener noreferrer">
										<Github className="w-5 h-5 text-navy hover:opacity-70 transition" />
									</a>
									<a href="https://chez-nagisa.github.io/ChezNagisa-website/" target="_blank" rel="noopener noreferrer">
										<ExternalLink className="w-5 h-5 text-navy hover:opacity-70 transition" />
									</a>
								</div>

							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-center">
							<img
								src="/project_portfolio.png"
								alt="Portfolio Website"
								className="rounded-lg shadow-md object-cover w-full h-64 md:order-1"
							/>
							<div className="md:order-2">
								<h3 className="text-2xl font-medium font-playfair text-navy mb-2">Portfolio</h3>
								<p className="text-navy font-garamond mb-4">
									This portfolio website showcasing my projects and skills.
								</p>
								<hr className="border-navy mb-3" />
								<div className="flex flex-wrap gap-3 text-sm font-garamond text-navy mb-4">
									<span>Next.js</span>
									<span>React</span>
									<span>TailwindCSS</span>
								</div>
								<div className="flex gap-4">
									<a href="https://github.com/yourname/cafe-site" target="_blank" rel="noopener noreferrer">
										<Github className="w-5 h-5 text-navy hover:opacity-70 transition" />
									</a>
									<a href="https://yourcafe.com" target="_blank" rel="noopener noreferrer">
										<ExternalLink className="w-5 h-5 text-navy hover:opacity-70 transition" />
									</a>
								</div>

							</div>
						</div>


					</div>
				</div>
			</section>


			{/* Values Section */}
			<section id="values" className="py-20 px-6 bg-beige">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-light mb-16 text-center font-playfair text-navy">
						My Values
					</h2>
					<div className="grid md:grid-cols-2 gap-12">
						<div className="rounded-lg p-8 bg-cream">
							<p className="text-lg leading-relaxed font-garamond text-navy">
								I value sincere and attentive work, treating each client with care and respect.
							</p>
						</div>
						<div className="rounded-lg p-8 bg-cream">
							<p className="text-lg leading-relaxed font-garamond text-navy">
								I strive to foster open-minded communication that embraces diversity and cross-cultural perspectives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-6">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-light mb-8 font-playfair text-navy">
						Contact
					</h2>
					<p className="text-xl mb-4 leading-relaxed font-garamond text-navy">
						I'm open to any projects and collaborations.
					</p>
					<p className="text-lg mb-12 opacity-80 font-garamond text-navy">
						Feel free to contact me in English, Japanese or French.
					</p>

					<div className="flex justify-center space-x-8">
						<a
							href="mailto:nagisahara.dev@example.com"
							className="p-4 rounded-full bg-beige hover:bg-opacity-70 transition-all duration-300"
						>
							<Mail className="w-6 h-6 text-navy" />
						</a>
						<a
							href="https://github.com/chez-nagisa"
							className="p-4 rounded-full bg-beige hover:bg-opacity-70 transition-all duration-300"
						>
							<Github className="w-6 h-6 text-navy" />
						</a>
						<a
							href="https://linkedin.com/in/nagisa-hara"
							className="p-4 rounded-full bg-beige hover:bg-opacity-70 transition-all duration-300"
						>
							<Linkedin className="w-6 h-6 text-navy" />
						</a>
						<a
							href="https://www.instagram.com/chez_nagisa/"
							className="p-4 rounded-full bg-beige hover:bg-opacity-70 transition-all duration-300"
						>
							<Instagram className="w-6 h-6 text-navy" />
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-6 text-center bg-navy">
				<p className="opacity-80 font-garamond text-cream">
					© 2025 Nagisa Hara
				</p>
			</footer>
		</div>
	);
};

export default function Page() {
	return <Portfolio />;
}
