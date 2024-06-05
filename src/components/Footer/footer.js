import './footer.css'

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				
			</h1>
			<FooterContainer>
                <div className='footerHeading'>
                    Behance
                </div>
				<Row>
					
					<Column>
						<Heading>Built For Creatives</Heading>
						<FooterLink href="#">
                        Try Behance Pro


						</FooterLink>
						<FooterLink href="#">
                        Find Inspiration


						</FooterLink>
						<FooterLink href="#">
						Get Hired

						</FooterLink>
						<FooterLink href="#">
							
                        Sell Creative Assets

						</FooterLink>
                        <FooterLink href="#">
							
                        <FooterLink href="#">
							
                            Sell Creative Assets
    
                            </FooterLink>

						</FooterLink>
					</Column>
					<Column>
						<Heading>Find Talent</Heading>
						<FooterLink href="#">
							Post a Job
						</FooterLink>
						<FooterLink href="#">
							All Featured Freelance Designers
						</FooterLink>
						<FooterLink href="#">
							Graphic Designers
						</FooterLink>
						<FooterLink href="#">
							Photographers
						</FooterLink>
                        <FooterLink href="#">
							Video Editors
						</FooterLink>
                        <FooterLink href="#">
							Web Designers
						</FooterLink>
                        <FooterLink href="#">
							Illustrators
						</FooterLink>
					</Column>
                    <Column>
						<Heading>Behance</Heading>
						<FooterLink href="#">
							About Behance
						</FooterLink>
						<FooterLink href="#">
							Adobe Portfolio
						</FooterLink>
						<FooterLink href="#">
							Download the App
						</FooterLink>
						<FooterLink href="#">
							Blog
						</FooterLink>
                        <FooterLink href="#">
							Careers
						</FooterLink>
                        <FooterLink href="#">
							Help Center
						</FooterLink>
                        <FooterLink href="#">
							Contact Us
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social</Heading>
						<FooterLink href="#">
							Instagram
						</FooterLink>
						<FooterLink href="#">
							Twitter
						</FooterLink>
						<FooterLink href="#">
							Pinterest
						</FooterLink>
						<FooterLink href="#">
							Facebook
						</FooterLink>
                        <FooterLink href="#">
							Linkedin
						</FooterLink>
                        
					</Column>
				</Row>
			</FooterContainer>





            <hr className='footerLine'/>

			<div className='footerBranding'>
                <div className='branding1'>
                    <p>ADOBE</p>
					<p>&copy; 2024 Adobe Inc. All rights reserved.</p>
                </div>
				<div className='branding2'>
					<p>English</p>
					<p>TOU</p>
					<p>Privacy</p>
					<p>Community</p>
					<p>Cookie Preference</p>
					<p>Do not sell or share my personal information</p>
				</div>
			</div>
		
			
		</Box>
	);
};
export default Footer;
