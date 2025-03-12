import '../Styles/about.css'

export const AboutDetail=({title, detail}:AboutDetailDTO)=>{
  return <div className='about-detail-container'>
    <div className='about-detail-title'>{title}:</div>
    <div className='about-detail'>{detail}</div>
  </div>
}

interface AboutDetailDTO{
  title:string;
  detail: string;
}