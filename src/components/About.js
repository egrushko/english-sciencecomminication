import { useState,useEffect } from 'react';
import p710 from "../pdf/p10.pdf"
import p511 from "../pdf/p11.pdf"
import p12 from "../pdf/p12.pdf"
import p14 from "../pdf/p14.pdf"
import p15 from "../pdf/p15.pdf"
import p13 from "../pdf/p17.pdf"
import p1 from "../pdf/paper1.pdf"
import p2 from "../pdf/paper2.pdf"
import p3 from "../pdf/paper3.pdf"
import p4 from "../pdf/paper4.pdf"
import p6 from "../pdf/u1r3p3.pdf"
import p8 from "../pdf/u1r3p5.pdf"
import p9 from "../pdf/p9.pdf"
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
            <button className={ind===0?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(0)}>About this resource</button>
            <button className={ind===1?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(1)}>About the author</button>
            <button className={ind===2?'unit-button-active unit-button':'unit-button'} onClick={()=>handleButtonClick(2)}>References</button>
        </div>
        <div className="page">
            <div className={ind===0?'unit-task-active':'unit-task-unactive'}>
                <p>
                Данное учебное пособие реализовано в форме Web-сайта. 
                Учебное пособие “English for Science Communication” предназначено для бакалавров 3-4 курсов,
                магистров и аспирантов университетов. Его целью является формирование иноязычной коммуникативной
                компетенции в сфере учебной и научной деятельности студентов, что предполагает успешное овладение 
                английским языком как средством их дальнейшего профессионального развития.
                </p>
                <p>
                Предлагаемое учебное пособие ориентированно на создание условий для приобретения студентами опыта работы
                с научными статьями на английском языке, а также, возможно, написания собственных научных статей
                на старших курсах бакалавриата, в магистратуре и аспирантуре. Также работа с материалами 
                двух разделов пособия нацелена на развитие и совершенствование навыков публичного 
                выступления в сфере профессиональной и научной коммуникации.
                </p>
                <p className="page-table">
                Данное учебное пособие включает 4 раздела:
                <ol>
                    <ul><p className="page-title">Unit 1 | What is the structure of a scientific paper?</p></ul>
                    <ul><p className="page-title">Unit 2 | How to read a scientific paper?</p></ul>
                    <ul><p className="page-title">Unit 3 | Improving Power Point Presentations</p></ul>
                    <ul><p className="page-title">Unit 4 | Why Don’t the Mathematicians Learn to Speak?</p></ul> 
                </ol>
                </p>
                <p>
                Каждый раздел содержит материалы для развития навыков чтения, аудирования и говорения, а также различные упражнения, направленные на введение, отработку и закрепление ключевой лексики по тематике раздела. Развитие навыков аудирования строится на основе работы с тематическими видео, что является существенным преимуществом, поскольку создает полезное и облегчающее понимание визуальное подкрепление для вербального контента.
                </p>
                <p><br/>Среди прочих материалов ниже приложен краткий видео-гайд по работе с некоторыми популярными сервисами для перевода и перефразирования текста с русского на английский языки. Изучение данных программных пакетов может пригодиться как во время выполнения заданий, так и, возможно, во время будущей научной работы.</p>
                <br/>
                <Video vid={instraction}/>
            </div>
            <div className={ind===1?'unit-task-active':'unit-task-unactive'}>
            <p className="about-title">
                Грушко Елена Ивановна
            </p>
            <p>
            работает на кафедре английского языка естественных факультетов ЮФУ с 1991 г., в должности старшего преподавателя с 1996 г.
            </p>
            <h1 className="about-title">
                Преподаваемые дисциплины:
            </h1>
            <ol>
                <ul>• английский язык для бакалавров естественно-научных направлений подготовки</ul>
                <ul>• английский язык для профессиональных и научных целей (для магистров естественно-научных направлений подготовки )</ul>
            </ol>
            <h1 className="about-title">
                Научные интересы:
            </h1>
            <p>
            методика обучения английскому языку студентов неязыковых специальностей; ИКТ в обучении английскому языку (смешанное обучение, перевернутый класс, цифровой рассказ (Digital Storytelling)); социолингвистика и прикладная лингвистика (English as a Lingua Franca)
            </p>
            <h1 className="about-title">
                Профессиональные достижения:
            </h1>
            <ol>
                <ul>
                • Кембриджский сертификат Certificate of Proficiency in English (СРЕ) с 2010 года
                </ul>
                <ul>• Стажировки в Великобритании и Нидерландах</ul>
                <ul>• 10 научных и 15 учебно-методических публикаций</ul>
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
                <ul><a className='link' href={p1} target='_blank' rel='noopener noreferrer'>[1]</a> W. Pazner, N. Trask, P.J. Atzberger, Stochastic Discontinuous Galerkin Methods (SDGM) based on fluctuation-dissipation balance, Results in Applied Mathematics, Volume 4, 2019, 100068, ISSN 2590-0374, https://doi.org/10.1016/j.rinam.2019.100068. </ul>
                <ul><a className='link' href={p2} target='_blank' rel='noopener noreferrer'> [2]</a> R. Picelli, S. Townsend, C. Brampton, J. Norato, H.A. Kim, Stress-based shape and topology optimization with the level set method, Computer Methods in Applied Mechanics and Engineering, Volume 329, 2018, Pages 1-23, ISSN 0045-7825, https://doi.org/10.1016/j.cma.2017.09.001. </ul>
                <ul><a className='link' href={p3} target='_blank' rel='noopener noreferrer'> [3]</a> Torrey Trust, Daniel G. Krutka, Jeffrey Paul Carpenter, “Together we are better”: Professional learning networks for teachers, Computers & Education, Volume 102, 2016, Pages 15-34, ISSN 0360-1315, https://doi.org/10.1016/j.compedu.2016.06.007. </ul>
                <ul><a className='link' href={p4} target='_blank' rel='noopener noreferrer'> [4]</a> Laura Rebollo-Neira, Daniel Whitehouse, Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction, Array, Volumes 1-2, 2019, 100001, ISSN 2590-0056, https://doi.org/10.1016/j.array.2019.100001. </ul>
                <ul><a className='link' href={p511} target='_blank' rel='noopener noreferrer'> [5]</a> Bryan Ek, Caitlin VerSchneider, Darren A. Narayan, Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics, Volume 12, Issue 1, 2015, Pages 1-13, ISSN 0972-8600, https://doi.org/10.1016/j.akcej.2015.06.001. </ul>
                <ul><a className='link' href={p6} target='_blank' rel='noopener noreferrer'> [6]</a> Walt Scacchi, Free/Open Source Software Development: Recent Research Results and Methods, Editor(s): Marvin V. Zelkowitz, Advances in Computers, Elsevier, Volume 69, 2007, Pages 243-295, ISSN 0065-2458, ISBN 9780123737458, https://doi.org/10.1016/S0065-2458(06)69005-0. </ul>
                <ul><a className='link' href={p710} target='_blank' rel='noopener noreferrer'> [7],[10]</a> Michael Coblenz, Jonathan Aldrich, Brad A. Myers, and Joshua Sunshine, Interdisciplinary programming language design. In Proceedings of the 2018 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2018). ACM, New York, NY, USA, 133-146, https://doi.org/10.1145/3276954.3276965. </ul>
                <ul><a className='link' href={p8} target='_blank' rel='noopener noreferrer'> [8]</a> Konrad Werys, Iulius Dragonu, Qiang Zhang, Iulia Popescu, Evan Hann, Henrike Puchta, Agata Kubik, Dogan Polat, Cody Wu, Niall O. Moon, Ahmet Barutcu, Vanessa M. Ferreira, Stefan K. Piechnik, Total Mapping Toolbox (TOMATO): An open source library for cardiac magnetic resonance parametric mapping, SoftwareX, Volume 11, 2020, 100369, ISSN 2352-7110, https://doi.org/10.1016/j.softx.2019.100369 </ul>
                <ul><a className='link' href={p9} target='_blank' rel='noopener noreferrer'> [9]</a> Antonia Creswell, Tom White, Vincent Dumoulin, Kai Arulkumaran, Biswa Sengupta Generative Adversarial Networks: An Overview </ul>
                <ul><a className='link' href={p511} target='_blank' rel='noopener noreferrer'> [11]</a> Bryan Ek, Caitlin VerSchneider, Darren A. Narayan Global efficiency of graphs, AKCE International Journal of Graphs and Combinatorics 12 (2015) 1–13 </ul>
                <ul><a className='link' href={p12} target='_blank' rel='noopener noreferrer'> [12]</a> Ivor Grattan-Guinness A Sideways Look at Hilbert’s Twenty-three Problems of 1900, Notices of the AMS, volume 47, number 7, August 2000 </ul>
                <ul><a className='link' href={p13} target='_blank' rel='noopener noreferrer'> [13]</a>Fan Chung Graph Theory in the Information Age </ul>
                <ul><a className='link' href={p14} target='_blank' rel='noopener noreferrer'> [14]</a> Carina Curto What can topology tell us about the neural code? Bulletin (New Series) of the American Mathematical Society Volume 54, Number 1, January 2017, Pages 63–78 http://dx.doi.org/10.1090/bull/1554 </ul>
                <ul><a className='link' href={p15} target='_blank' rel='noopener noreferrer'> [15]</a> A.B. Kudimova, D.K. Nadolin, A.V. Nasedkin, P.A. Oganesyan, A.N. Soloviev Finite element homogenization models of bulk mixed piezocomposites with granular elastic inclusions in ACELAN package, Materials Physics and Mechanics 37 (2018) 25-3 3http://dx.doi.org/10.18720/MPM.3712018_4</ul>

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