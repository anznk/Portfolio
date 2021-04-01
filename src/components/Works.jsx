import React, {useState} from "react";
import worksData from '../data/works.json'
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import '../styles/Works.scss';

const Works =()=> {
	const value = worksData.work;
	const [MainWork, setMainWork] = useState({
		PjImg:"/img/portfolio.png",
		PjName:"My Portfolio",
		PjDetail:"This is my portfolio project with React.js.",
		Development:"React.js/ HTML5/ SCSS/ Firebase/ GoogleAnalytics/ GitHub",
		Website:"",
		GitHub:""
	})
	const changeValue = (value) => {
		setMainWork({    
			PjImg:value.imgPath,
			PjName: value.name,
			PjDetail: value.text,
			Development: value.development,
			Website: value.website,
			GitHub: value.github
		})
	}
	const params = {
		direction: 'vertical',
		autoplay: {
			delay: 2200
		},
		loop: true,  
		slidesPerView:3,
    spaceBetween: 20
  }
	
	return (
		<section className="sec-Works" id="works">
			<div className="title-sec">
				<h2>Works</h2>
			</div>
			{/* <div className='foo' data-delighter> */}
			<div className="show_pc wrap-works">
				<div className="main-works">
					<img src={MainWork.PjImg} alt={MainWork.PjName} />
					<div className="title">{MainWork.PjName}</div>
					<div className="line">
					<p className="caption1">overview</p>
					</div>
					<div className="detail">{MainWork.PjDetail}</div>
					<div className="line">
					<p className="caption2">used language</p>
					</div>
					<div className="development">{MainWork.Development}</div>
					<div className="button-area">
						<a href={MainWork.Website} className="btn">Website</a>
						<a href={MainWork.GitHub} className="btn">Github</a>
					</div>
				</div>
				<div className="sub-works">
					<Swiper {...params}>
						{value && value.map( work => (
							<div key={work.name} className="skill-item" onClick={() => changeValue(work)}>
								<img src={work.imgPath}  alt={work.name} />
							</div>
						))}
					</Swiper>
				</div>
			</div>
			<div className="show_sp wrap-works">
				<ul className="list_works">
					{value && value.map( work => (
						<li key={work.name} className="skill-item">
							<img src={work.imgPath}  alt={work.name} />
							<div className="title">{work.name}</div>
							<div className="button-area">
								<a href={work.website} className="btn">Website</a>
								<a href={work.gitHub} className="btn">Github</a>
							</div>
						</li>
					))}
				</ul>
			</div>	
			{/* </div>  */}

    </section>

	)
}

export default Works


