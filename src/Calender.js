import React from "react";
import "./Status.css"
import Header from "./Header";
const  Calender= ()=>{
  return(
	
    <>
	<div className="calender-1">
	<div className="app-header">
          <Header/>
          <div className="app-header-right">
            <button className="mode-switch" title="Switch Theme">
              <svg className="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <button className="add-btn" title="Add New Project">
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <button className="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </button>
            <button className="profile-btn">
              <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1685272110/samples/people/boy-snow-hoodie.jpg" />
              <span>Pranshu Yadav</span>
            </button>
          </div>
          <button className="messages-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </button>
        </div>
  
<div class="gallery">
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386190/referal/WhatsApp_Image_2023-08-07_at_10.56.11_AM_rmidlx.jpg" alt="Portrait by Jessica Felicio" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386190/referal/WhatsApp_Image_2023-08-07_at_10.56.10_AM_2_fxoo5o.jpg" alt="Portrait by Oladimeji Odunsi" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

		<a href="" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386190/referal/WhatsApp_Image_2023-08-07_at_10.56.10_AM_1_qtevvv.jpg" alt="Portrait by Alex Perez" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@hikiapp" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386190/referal/WhatsApp_Image_2023-08-07_at_10.56.10_AM_j2ltvf.jpg" alt="Portrait by Hikiapp" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Hikiapp</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386189/referal/WhatsApp_Image_2023-08-07_at_10.56.09_AM_d6ujwn.jpg" alt="Portrait by Ivana Cajina" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@j_erhunse" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386189/referal/WhatsApp_Image_2023-08-07_at_10.56.12_AM_bwutjt.jpg" alt="Portrait by Jeffery Erhunse" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Jeffery Erhunse</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386188/referal/WhatsApp_Image_2023-08-07_at_10.56.11_AM_1_denz64.jpg" alt="Portrait by Mari Lezhava" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691427183/referal/zhk4vlWqyGibYmilld4sRVZVo_krbkmv.png" alt="Portrait by Dima DallAcqua" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691386188/referal/WhatsApp_Image_2023-08-07_at_10.56.11_AM_2_seirby.jpg" alt="Portrait by Amir Geshani" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@nixcreative" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691427183/referal/WhatsApp_Image_2023-08-07_at_7.43.55_PM_tdmlqa.jpg" alt="Portrait by Tyler Nix" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Tyler Nix</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691427184/referal/WhatsApp_Image_2023-08-07_at_7.43.53_PM_tdnc38.jpg" alt="Portrait by Dima DallAcqua" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
		
		
		<a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1691427184/referal/WhatsApp_Image_2023-08-07_at_7.43.53_PM_tdnc38.jpg" alt="Portrait by Dima DallAcqua" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
		
		
	</div>
</div>
	</div>
	 
    </>
  )
}
export default Calender