import '../css/Home.css'
export const Home = () => {
    return(
        <div className="page">
            <h1>Учебный онлайн ресурс</h1>
            <p className='home-text'>
                Министерство образования и науки Российсикой Федерации
            </p>
            <p className='home-text'>
                Федеральное государственное автономное образовательное<br/> учреждение высшего образования
            </p>
            <p className='home-text'>
                «ЮЖНЫЙ ФЕДЕРАЛЬНЫЙ УНИВЕРСИТЕТ»
            </p>
            <h1 className="teacher-name">
                Е.И. Грушко
            </h1>
            <h1 className="page-title">
                Английский язык для научной коммуникации
            </h1>
            <h1 className="page-title">   
                English for Science Communication
            </h1>
            <p className='low-text'>
            Учебное пособие по английскому языку<br />
            для бакалавров 3-4 курсов, магистров
             и аспирантов университетов 
            </p>
        </div>
    )
}