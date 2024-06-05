import './Landing.css'

import React from "react";


const Landing = () => {
	return (
        <body>
        <header class="header">
      
    </header>

    <main class="main">
        <div class="container">
            <div class="hero">
                <h1>The World's<br></br> 
                <span class='word'>Best Creators</span>
                <br></br> Are on Behance</h1>
                <p>A comprehensive platform to help hirers and creators navigate the creative world from discovering inspiration, to connecting with one another</p>
               
            </div>
        </div>
    </main>
    <div class="container">
           
           <nav class="nav">
               <ul>
                   <li><button className='newbtn1' >Hire a Freelancer</button></li>
                   <li><button className='newbtn2' >Try Behance Pro</button></li>
               </ul>
           </nav>
       </div>
    </body>
       
	);
};
export default Landing;
