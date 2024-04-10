import { useState,useEffect } from 'react';
import p710 from "../pdf/p10.pdf"
import p511 from "../pdf/p11.pdf"
import p12 from "../pdf/p12.pdf"
import p14 from "../pdf/p14.pdf"
import p15 from "../pdf/p15.pdf"
import p13 from "../pdf/p17.pdf"
import u1t1p1 from '../pdf/u1t1p1.pdf'
import u1t1p2 from '../pdf/u1t1p2.pdf'
import u1t1p3 from '../pdf/u1t1p3.pdf'
import u1t1p4 from '../pdf/u1t1p4.pdf'
import p1 from "../pdf/paper1.pdf"
import p2 from "../pdf/paper2.pdf"
import p3 from "../pdf/paper3.pdf"
import p4 from "../pdf/paper4.pdf"
import p6 from "../pdf/u1r3p3.pdf"
import p8 from "../pdf/u1r3p5.pdf"
import p9 from "../pdf/p9.pdf"
import p20 from '../pdf/p13.pdf'
import p21 from '../pdf/p21.pdf'
import p22 from '../pdf/p22.pdf'
import p23 from '../pdf/p23.pdf'
import p24 from '../pdf/p24.pdf'
import p25 from '../pdf/p25.pdf'
import p26 from '../pdf/p26.pdf'
import p27 from '../pdf/p27.pdf'
import p28 from '../pdf/p28.pdf'
import p29 from '../pdf/p29.pdf'
import p30 from '../pdf/p30.pdf'
import instraction from '../videos/translate-instraction.mkv'
import { Video } from './TasksUtils/Video';

export const About = ()=>{
    const [ind,setInd] = useState(0);
    useEffect(() => {
        var parsed = JSON.parse(window.localStorage.getItem('indA'));
        setInd(parsed?parsed:0);
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('indA', ind);
      }, [ind]);

    function handleButtonClick(index) {
        window.scrollTo(0, 0)
        setInd(index);
    }
    return(
        <>
        <div className='unit-buttons'>
            <button className={ind===0?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(0)}>This online course</button>
            <button className={ind===1?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(1)}>The author</button>
            <button className={ind===2?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(2)}>References</button>
        </div>
        <div className="page">
            <div className={ind===0?'unit-task-active':'unit-task-unactive'}>
                <p>
                Учебный курс “English for Science Communication” реализован в форме Web-сайта и предназначен для бакалавров 3–4 курсов, 
                магистрантов и аспирантов университетов. Его целью является формирование иноязычной коммуникативной компетенции в сфере 
                учебной и научной деятельности студентов, что предполагает успешное овладение английским языком как средством их дальнейшего 
                профессионального развития.
                </p>
                <p>
                Предлагаемый курс ориентирован на создание условий для приобретения студентами опыта работы с научными статьями на английском языке, 
                а также, возможно, написания собственных научных статей на старших курсах бакалавриата, в магистратуре и аспирантуре. 
                Также работа с материалами двух разделов данного курса (Unit 3 & Unit 4) нацелена на развитие и совершенствование навыков публичного 
                выступления в сфере профессиональной и научной коммуникации.
                </p>
                <p className="page-table">
                <br/>
                Данное учебное пособие включает 4 раздела:
                <ol>
                    <ul><p className="page-title">Unit 1 | What is the structure of a scientific paper?</p></ul>
                    <ul><p className="page-title">Unit 2 | How to read a scientific paper?</p></ul>
                    <ul><p className="page-title">Unit 3 | Improving Power Point Presentations</p></ul>
                    <ul><p className="page-title">Unit 4 | Why Don’t the Mathematicians Learn to Speak?</p></ul> 
                </ol>
                </p>
                <p className='mb-3'>
                    Каждый раздел содержит материалы для развития навыков чтения, аудирования и говорения, 
                    а также различные упражнения, направленные на введение, отработку и закрепление ключевой лексики по тематике раздела. 
                    Развитие навыков аудирования строится на основе работы с тематическими видео, что является существенным преимуществом, 
                    поскольку создает полезное и облегчающее понимание визуальное подкрепление для вербального контента.
                </p>
                <p className='mb-3'>
                    В разделе  <b>About</b> также содержится краткая информация об авторе и ссылки (References) на видео и научные статьи, используемые в курсе. 
                </p>
                <p className='mb-3'>
                    В <b>References</b> особый интерес могут представлять гиперссылки на статьи в <b>Research papers in Humanities 
                    (for analysis and comparison with research papers in Sciences)</b>, которые могут использоваться для сравнения 
                    и анализа различий в стилистике и структуре научных статей в естественнонаучных и гуманитарных областях исследований.
                </p>
                <p className='mb-3'>
                Для пользователей, аффилированных с ЮФУ определенную ценность,
                 могут представлять ссылки на статьи в <b>Research papers in Q1 scientific journals published by Southern Federal University (SFedU) researchers</b>.   
                </p>
                <p>
                Кроме того, ниже приложен краткий видео-гайд по работе с некоторыми популярными сервисами для перевода 
                и перефразирования текста с русского на английский языки. Изучение данных программных пакетов может оказаться 
                полезным как для выполнения заданий данного онлайн курса, так и, возможно, во время будущей научной работы.
                </p>
                <br/>
                <p>A short video guide on working with machine translation tools:</p>
                <br/>
            <Video vid={instraction} className="about-video"/>
            </div>
            <div className={ind===1?'unit-task-active':'unit-task-unactive'}>
            <p className="about-title">
                Грушко Елена Ивановна
            </p>
            <br/>
            <p>
                Старший преподаватель кафедры английского языка естественных факультетов ИФЖиМКК ЮФУ. 
            </p>
            <p className='mt-3'>
                Работает в университете с 1991 г., в должности старшего преподавателя с 1996 г.
            </p>
            <h1 className="about-title mt-2">
                Преподаваемые дисциплины:
            </h1>
            <ol>
                <ul>• английский язык для общих коммуникативных целей для межфакультетских групп 1–2 го курсов бакалавриата ЮФУ</ul>
                <ul>• английский язык для общих академических целей для бакалавров 3-го курса и специальных целей для магистрантов естественно-научных направлений подготовки</ul>
            </ol>
            <h1 className="about-title">
                Научные интересы:
            </h1>
            
            <p>
                методика обучения английскому языку студентов неязыковых специальностей; 
                ИКТ в обучении английскому языку (смешанное обучение (Blended Learning), 
                перевернутый класс (Flipped Classroom), цифровой рассказ (Digital Storytelling)); 
                социолингвистика и прикладная лингвистика (English as a Lingua Franca)
            </p>
            <h1 className="about-title mt-2">
                Профессиональные достижения:
            </h1>
            <ol>
                <ul>
                • Кембриджский сертификат Certificate of Proficiency in English (СРЕ) с 2010 года
                </ul>
                <ul>• Стажировки в Великобритании и Нидерландах</ul>
                <ul>• 10 научных и 15 учебно-методических публикаций</ul>
                <ul>• Выступление с докладом BLENDED LEARNING COURSE DESIGN FOR THE PARTICULAR ESAP CONTEXT 
                    на 7 Международной конференции «Учитель, ученик, учебник» - 23 ноября 2013 года, МГУ, Москва.</ul>
                <ul>• Выступление с докладом “ ONLINE ESAP MATERIALS CREATED IN COLLABORATION WITH STUDENTS – VIABLE AND VALUABLE” 
                    на международном форуме E-merging Forum 5 в секции «Образовательные технологии» - 13 марта 2015 года, г. Москва.</ul>
                <ul>• В ноябре 2020 г прошла онлайн курс TEACHING ENGLISH ONLINE на платформе FutureLearn и получила сертификат от 
                    CAMBRIDGE ASSESSMENT ENGLISH</ul>
            </ol>
            </div>
            <div className={ind===2?'unit-task-active':'unit-task-unactive'}>
            <p className="about-title">
                Video links
            </p>
            <ol>
                <ul><a className='link' href="https://www.youtube.com/watch?v=BAS9I4tFgV8">The Structure of Scientific Research Papers                       </a></ul>
                <ul><a className='link' href="https://www.youtube.com/watch?v=M3aZNaPY88Y">Efficient reading strategies</a></ul>
                <ul><a className='link' href="https://www.youtube.com/watch?v=MjcO2ExtHso">Life After Death by PowerPoint (Corporate Comedy Video) </a></ul>
                <ul><a className='link' href="https://www.youtube.com/watch?v=BuB7IhWZnJs">31 Creative Presentation Ideas to Delight Your Audience </a></ul>
                <ul><a className='link' href="https://www.youtube.com/watch?v=TmbQFWBvTtY">Body Language for Presentations  </a></ul>
                <ul><a className='link' href="https://www.youtube.com/watch?v=Q5WT2vweFRY">Presenting and Public Speaking Tips - how to improve skills & confidence  </a></ul>
                <ul><a className='link' href="https://youtu.be/m1961RJLWgI?si=3H0vumXGOo4SeDnZ">Краткий видео-гайд по работе со средствами машинного перевода  </a></ul>
            </ol>

            <p className="about-title">
                Research papers
            </p>
            <ol>
                <ul><a className='link' href={u1t1p1} target='_blank' rel='noopener noreferrer'>[1]</a> Zhenpeng Zhou, Xiaocheng Li, and Richard N. Zare Optimizing Chemical Reactions with Deep Reinforcement Learning, ACS Central Science 2017 3 (12), 1337-1344 DOI: 10.1021/acscentsci.7b00492</ul>
                <ul><a className='link' href={u1t1p2} target='_blank' rel='noopener noreferrer'>[2]</a> Linda J. Graham a, Sonia L.J. White, Kathy Cologon, Robert C. Pianta, Do teachers’ years of experience make a difference in the quality of teaching? Teaching and Teacher Education 96 (2020) 103190</ul>
                <ul><a className='link' href={u1t1p3} target='_blank' rel='noopener noreferrer'>[3]</a> Trevor Thomas Stewart, Timothy A. Jansky, Novice teachers and embracing struggle: Dialogue and reflection in professional development, Teaching and Teacher Education: Leadership and Professional Development Volume 1, December 2022, 100002</ul>
                <ul><a className='link' href={u1t1p4} target='_blank' rel='noopener noreferrer'>[4]</a> Joshua S. Walker, Neither Burgher nor Barin: An Imagological and Intercultural Reading of Andrey Stoltz in Ivan Goncharov’s Oblomov (1859), 2013 №2 Slověne</ul>
                <ul><a className='link' href={p1} target='_blank' rel='noopener noreferrer'>[5]</a> W. Pazner, N. Trask, P.J. Atzberger, Stochastic Discontinuous Galerkin Methods (SDGM) based on fluctuation-dissipation balance, Results in Applied Mathematics, Volume 4, 2019, 100068, ISSN 2590-0374, https://doi.org/10.1016/j.rinam.2019.100068. </ul>
                <ul><a className='link' href={p2} target='_blank' rel='noopener noreferrer'> [6]</a> R. Picelli, S. Townsend, C. Brampton, J. Norato, H.A. Kim, Stress-based shape and topology optimization with the level set method, Computer Methods in Applied Mechanics and Engineering, Volume 329, 2018, Pages 1-23, ISSN 0045-7825, https://doi.org/10.1016/j.cma.2017.09.001. </ul>
                <ul><a className='link' href={p3} target='_blank' rel='noopener noreferrer'> [7]</a> Torrey Trust, Daniel G. Krutka, Jeffrey Paul Carpenter, “Together we are better”: Professional learning networks for teachers, Computers & Education, Volume 102, 2016, Pages 15-34, ISSN 0360-1315, https://doi.org/10.1016/j.compedu.2016.06.007. </ul>
                <ul><a className='link' href={p4} target='_blank' rel='noopener noreferrer'> [8]</a> Laura Rebollo-Neira, Daniel Whitehouse, Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction, Array, Volumes 1-2, 2019, 100001, ISSN 2590-0056, https://doi.org/10.1016/j.array.2019.100001. </ul>
                <ul><a className='link' href={p511} target='_blank' rel='noopener noreferrer'> [9]</a> Bryan Ek, Caitlin VerSchneider, Darren A. Narayan, Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics, Volume 12, Issue 1, 2015, Pages 1-13, ISSN 0972-8600, https://doi.org/10.1016/j.akcej.2015.06.001. </ul>
                <ul><a className='link' href={p6} target='_blank' rel='noopener noreferrer'> [10]</a> Walt Scacchi, Free/Open Source Software Development: Recent Research Results and Methods, Editor(s): Marvin V. Zelkowitz, Advances in Computers, Elsevier, Volume 69, 2007, Pages 243-295, ISSN 0065-2458, ISBN 9780123737458, https://doi.org/10.1016/S0065-2458(06)69005-0. </ul>
                <ul><a className='link' href={p710} target='_blank' rel='noopener noreferrer'> [11],[14]</a> Michael Coblenz, Jonathan Aldrich, Brad A. Myers, and Joshua Sunshine, Interdisciplinary programming language design. In Proceedings of the 2018 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2018). ACM, New York, NY, USA, 133-146, https://doi.org/10.1145/3276954.3276965. </ul>
                <ul><a className='link' href={p8} target='_blank' rel='noopener noreferrer'> [12]</a> Konrad Werys, Iulius Dragonu, Qiang Zhang, Iulia Popescu, Evan Hann, Henrike Puchta, Agata Kubik, Dogan Polat, Cody Wu, Niall O. Moon, Ahmet Barutcu, Vanessa M. Ferreira, Stefan K. Piechnik, Total Mapping Toolbox (TOMATO): An open source library for cardiac magnetic resonance parametric mapping, SoftwareX, Volume 11, 2020, 100369, ISSN 2352-7110, https://doi.org/10.1016/j.softx.2019.100369 </ul>
                <ul><a className='link' href={p9} target='_blank' rel='noopener noreferrer'> [13]</a> Antonia Creswell, Tom White, Vincent Dumoulin, Kai Arulkumaran, Biswa Sengupta Generative Adversarial Networks: An Overview </ul>
                <ul><a className='link' href={p511} target='_blank' rel='noopener noreferrer'> [15]</a> Bryan Ek, Caitlin VerSchneider, Darren A. Narayan Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics 12 (2015) 1–13 </ul>
                <ul><a className='link' href={p12} target='_blank' rel='noopener noreferrer'> [16]</a> Ivor Grattan-Guinness A Sideways Look at Hilbert’s Twenty-three Problems of 1900, Notices of the AMS, volume 47, number 7, August 2000 </ul>
                <ul><a className='link' href={p13} target='_blank' rel='noopener noreferrer'> [17]</a>Fan Chung Graph Theory in the Information Age </ul>
                <ul><a className='link' href={p14} target='_blank' rel='noopener noreferrer'> [18]</a> Carina Curto What can topology tell us about the neural code? Bulletin (New Series) of the American Mathematical Society Volume 54, Number 1, January 2017, Pages 63–78 http://dx.doi.org/10.1090/bull/1554 </ul>
                <ul><a className='link' href={p15} target='_blank' rel='noopener noreferrer'> [19]</a> A.B. Kudimova, D.K. Nadolin, A.V. Nasedkin, P.A. Oganesyan, A.N. Soloviev Finite element homogenization models of bulk mixed piezocomposites with granular elastic inclusions in ACELAN package, Materials Physics and Mechanics 37 (2018) 25-3 3http://dx.doi.org/10.18720/MPM.3712018_4</ul>
                <ul><a className='link' href={p20} target='_blank' rel='noopener noreferrer'> [20]</a> Cameron Fabbri, Conditional Wasserstein Generative Adversarial Networks, University of Minnesota Computer Science and Engineering fabbr013@umn.edu</ul>
            </ol>
            <p className="about-title">
                Research papers in Humanities (for analysis and comparison with research papers in Sciences)
            </p>

            <ol>
                <ul><a className='link' href={p21} target='_blank' rel='noopener noreferrer'>[21]</a> Dmitrii Sidorov, Post-Imperial Third Romes: Resurrections of a Russian Orthodox Geopolitical Metaphor, Geopolitics, 11:317–347, 2006 Copyright © Taylor & Francis Group, LLC ISSN: 1465-0045 print / 1557-3028 online DOI: 10.1080/14650040600598585</ul>
                <ul><a className='link' href={p22} target='_blank' rel='noopener noreferrer'>[22]</a> С. Г. Тер-Минасова, Преподавание иностранных языков в современной России: прошлое, настоящее и будущее, “Young Scientist” #15 (95). August 2015 - Традиции и инновации в преподавании иностранных языков в контексте современной образовательной парадигмы, Материалы международной научно-практической конференции <b>(Review paper)</b></ul>
                <ul><a className='link' href={p23} target='_blank' rel='noopener noreferrer'>[23]</a> А. Л. Назаренко, ВИДИТ «ТО, ЧТО ВРЕМЕНЕМ ЗАКРЫТО» К ЮБИЛЕЮ СВЕТЛАНЫ ГРИГОРЬЕВНЫ ТЕР-МИНАСОВОЙ, Вестн. Моск. ун-та. Сер. 19. Лингвистика и межкультурная коммуникация. 2018. № 3 <b>(Expository paper)</b></ul>
                <ul><a className='link' href={p24} target='_blank' rel='noopener noreferrer'>[24]</a> Richard Hester, Jonathan Hobson, Demelza Jones, “If we’re wrong, take us to court”: An analysis of special police services (SPS) arrangements for the policing of football in England and Wales, International Journal of Law, Crime and Justice 76 (2024) 100649</ul>
                <ul><a className='link' href={p25} target='_blank' rel='noopener noreferrer'>[25]</a> Alexander E. Evstratov, Igor Yu. Guchenkov, THE LIMITATIONS OF ARTIFICIAL INTELLIGENCE (LEGAL PROBLEMS), Law Enforcement Review 2020, vol. 4, no. 2, pp. 13–19</ul>
                <ul><a className='link' href={p26} target='_blank' rel='noopener noreferrer'>[26]</a> Mark Louis, Angelina Anne Fernandez, Nazura Abdul Manap, Shamini Kandasamy, Lee Sin Yee, ARTIFICIAL INTELLIGENCE: IS IT A THREAT OR AN OPPORTUNITY BASED ON ITS LEGAL PERSONALITY AND CRIMINAL LIABILITY?  Journal of Information System and Technology Management, Volume 6 Issue 20 (March 2021) PP. 01-09 DOI: 10.35631/JISTM.620001</ul>
            </ol>

            <p className="about-title">
                Research papers in Q1 scientific journals published by Southern Federal University (SFedU) researchers.
            </p>

            <ol>
                
                <ul><a className='link' href={p27} target='_blank' rel='noopener noreferrer'>[27]</a> R. Nedin, A.Vatulyan, Inverse problem of non-homogeneous residual stress identification in thin plates, International Journal of Solids and Structures 50 (2013)2107–2114</ul>
                <ul><a className='link' href={p28} target='_blank' rel='noopener noreferrer'>[28]</a> A. A. Guda, S. A. Guda, A. Martini, A. N. Kravtsova, A. Algasov, A. Bugaev, S. P. Kubrin, L. V. Guda, P. Šot, J. A. van Bokhoven, C. Copéret and A. V. Soldatov, Understanding X-ray absorption spectra by means of descriptors and machine learning a</ul>
                <ul><a className='link' href={p29} target='_blank' rel='noopener noreferrer'>[29]</a> Victor A. Chaplygin, Vishnu D. Rajput, Saglara S. Mandzhieva, Tatiana M. Minkina, Dina G. Nevidomskaya, Olga G. Nazarenko, Valery P. Kalinitchenko, Ritu Singh, Aleksey Yu Maksimov, and Victoria A. Popova, Comparison of Heavy Metal Content in Artemisia austriaca in Various Impact Zones, ACS Omega 2020, 5, 23393−23400</ul>
                <ul><a className='link' href={p30} target='_blank' rel='noopener noreferrer'>[30]</a> A.A.Batalshchikov, S.M.Grudsky, I.S.Malisheva, S.S.Mihalkovich, E.Ramírez de Arellano, V.A.Stukopin, Asymptotics of eigenvalues of large symmetric Toeplitz matrices with smooth simple-loop symbols,  Linear Algebra and its Applications 580(2019)292–335 <b>(Pure Mathematics paper)</b></ul>
            </ol>

            <p className="about-title">
                Illustrations
            </p>
            <ol>
                <ul><a className='link' href="https://undraw.co/search">from Open-source illustrations</a></ul>
            </ol>
            </div>
        </div>
        </>
    )
}