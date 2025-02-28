import {Unit} from '../Unit'
import {Task} from '../Task'
import {InlineCompareTask} from '../Tasks/InlineCompareTest'
import { TwoColumnsCompareTask } from '../Tasks/TwoColumnsCompareTask';
import {ColumnInlineCompare} from '../Tasks/ColumnInlineCompare';
import { InputCheckTask } from '../Tasks/input-check-task';
import {CompareTextTask} from '../Tasks/CompareTextTask';
import {TwoColumnInputTask} from '../Tasks/TwoColumnInputTask'
import {TwoColumnsTextShow} from '../Tasks/TwoColumnsTextShow'
import {VideoShow} from '../Tasks/VideoShow'
import {TextAndImageShow} from '../Tasks/TextAndImageShow'
import video1img from '../../img/video1.1.png' 
import video1 from '../../videos/video1.1.mp4'
import video2 from '../../videos/video 1.2.mp4'
import u1r3p1 from '../../pdf/u1r3p1.pdf'
import u1r3p2 from '../../pdf/u1r3p2.pdf'
import u1r3p3 from '../../pdf/u1r3p3.pdf'
import u1r3p4 from '../../pdf/u1r3p4.pdf'
import u1r3p5 from '../../pdf/u1r3p5.pdf'
import u1t1p1 from '../../pdf/u1t1p1.pdf'
import u1t1p2 from '../../pdf/u1t1p2.pdf'
import u1t1p3 from '../../pdf/u1t1p3.pdf'
import u1t1p4 from '../../pdf/u1t1p4.pdf'
import paper1 from '../../pdf/paper1.pdf'
import paper2 from '../../pdf/paper2.pdf'
import paper3 from '../../pdf/paper3.pdf'
import paper4 from '../../pdf/paper4.pdf'
import speaking from '../../img/speaking1.png'
export const FirstUnit = () =>{
    return(
        <>
        <Unit unitTitle={"What is the structure of a scientific paper?"} unitNum={1} names = {['Task 1','Task 2','Task 3','Task 4','Video 1.1','Task 5','Task 6','Video 1.2','Task 7','Task 8','Task 9','Speaking']} tasks={[
        <Task 
          title='Reading - 1' 
          helpText={'Read the text and choose the correct option for each section 1-10 described in the paragraphs A - K.\nThere is one extra paragraph which you do not need to use.'} 
          type={
          <CompareTextTask startNum = {0}
          helpText={''} 
          useLettersInCheck={true} 
          papers={[u1t1p1,u1t1p2,u1t1p3, u1t1p4]}  
          baseText={["                                                                      What is the structure of a scientific paper?","\nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\nTypically,  scientific  papers  are comprised of the following parts: \n\n              1. Title                                                                 4. Introduction                                        8. Acknowledgments (optional)\n              2. Abstract                                                         5. Methods                                                9. References / Bibliography\n              3. Authors and affiliations                          6. Results                                                 10. Appendix / Appendices (optional)\n                                                                                             7. Discussion \n\nLook at some research papers and the sections that they include.","\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader."]}
          collage={true} 
          answers={[null,'Title','Abstract','Authors and affiliations','Introduction','Methods','Results','Discussion','Acknowledgments','References','Appendix / Appendices']}
          rightAnswers={['Results','Introduction','Discussion','Title','Methods','Appendix / Appendices','References','Abstract',null,'Acknowledgments','Authors and affiliations']} 
                headings={[
            'A. This  section  contains  the  data  collected  during experimentation. It is the heart of a scientific paper. In  this  section,  much  of  the  important  information may  be  in  the  form  of  tables  and  graphs.  When reading  this  section,  do  not  readily  accept  the author’s  statements  about  the  findings.  Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.',
            'B. You   will   find background  information  and  a  statement  of  the author’s  hypothesis  in  this  section.  It  usually describes the theoretical background, indicates why the  work  is  important,  states  a  specific research  question,  and  poses  a  specific hypothesis to be tested.',
            'C. Authors  often  use  this  section  to describe  what  their  work  suggests and how it relates to other studies. In this  section,  authors  can  anticipate and address any possible objections to  their  work  and  suggest  areas  of improvement for future research.',
            'D. If it’s well-written it will help you to determine  if  a  paper  is  interesting  and relevant for your project.',
            'E. This section describes both specific techniques and the  overall  experimental  strategy  used  by  the scientists. Generally, it does not need to be read in detail.  Refer  to  this  section  if  you  have  a  specific question about the experimental design.',
            'F. This part contains information in greater detail than can be presented in the main body of the paper, but which  may  be  of interest to  a  few  people  working specifically in this field. ',
            'G. This  section  provides  the  sources  referred  to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.',
            'H. This part of the paper contains brief statements of the purpose,  methods,  results,  and  conclusions  of  a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper. ',
            'I. The format of a scientific paper has been defined by centuries  of  developing  tradition,  editorial practice, scientific ethics and the interaction with printing and publishing services. ',
            'J. It tells you what people or institutions, in addition to the  authors,  contributed  to  the  work.  Reading  this section,  you  can  sometimes  see  what  sources provided financial support for the study.',
            'K. The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.'
                ]}/>} />,
        <Task 
          title='Vocabulary - 1' 
          helpText=''
          type={[
            <InlineCompareTask startNum = {0}
            helpText={'Match the words from the text with their definitions. There is one extra definition which you don’t need to use.'} 
            rightAnswers={['the size, shape etc. in which something, especially a book or a journal is produced',
                'one of the parts of a book, paper, website, etc. that deals with a particular subject',
                'the words written as a title at the top of a piece of writing, or at the top of each part of it',
                'information, especially facts or numbers, collected to be examined and used to help decision-making',
                'something that tells a reader where the information came from that is used in a piece of writing',
                'a drawing, such as a curved line, which shows how different values are related to each other',
                'an often numbered drawing or diagram used in a book to explain something',
                'an idea which is suggested as a possible way of explaining facts, proving an argument etc.',
                'a method of doing something that needs skill',
                'a large amount of information stored in a computer system in such a way that it can be easily looked at'
                ]} 
            answers={['an often numbered drawing or diagram used in a book to explain something',
                'a shortened form of a statement, speech etc',
                'a method of doing something that needs skill',
                'the words written as a title at the top of a piece of writing, or at the top of each part of it',
                'something that tells a reader where the information came from that is used in a piece of writing',
                'the size, shape etc. in which something, especially a book or a journal is produced',
                'an idea which is suggested as a possible way of explaining facts, proving an argument etc.',
                'a drawing, such as a curved line, which shows how different values are related to each other',
                'one of the parts of a book, paper, website, etc. that deals with a particular subject',
                "a large amount of information stored in a computer system in such a way that it can be easily looked at",
                'information, especially facts or numbers, collected to be examined and used to help decision-making']}
            toCompare={['1. Format','2. Section','3. Heading','4. Data','5. Reference','6. Graph','7. Figure','8. Hypothesis','9. Technique','10. Database']}/>,
            <InputCheckTask startNum = {0}
            type={'words'} 
            useAB={true} 
            helpText={'Complete the sentences with the words from the box. You will need one word for each pair of sentences, but think if you need a singular or a plural form in each case.'
                +' There are more words in the box than you need to use.'} 
            baseText={['format','section','heading','data','reference','graph','figure','hypothesis','technique','database']}  
            text ={['a) A detailed search included multiple electronic {inputs[0]}, bibliographies of found papers and review articles.\n'+
                'b) Full-text-searching techniques became common in online {inputs[1]} in the 1990s.',
                'a) The {inputs[2]} is organised in the following way.\n'
                +'b) The concluding {inputs[3]} summarizes the arguments.'
                ,'a) First, he developed a novel approach to the historical analysis of land values that utilized primary {inputs[4]} and mapping techniques. \n'
                +'b) The firm blends qualitative research, secondary {inputs[5]} analysis, survey-based research, econometrics, and advanced analytics (modelling, simulation, and optimization) to solve the most difficult marketing problems.',
                'a) If we compare these results with the experimental observations in {inputs[6]} 12 and 13, we see that there is qualitative agreement.\n'
                +'b) Please see {inputs[7]} 8 and 9.',
                'a) He drew a {inputs[8]} on the whiteboard.\n'+
                'b) The {inputs[9]} shows quite clearly the impact of the recession on sales figures.',
                'a) A fundamental requirement of a {inputs[10]} is that it can be tested against reality, and can then be supported or rejected.\n'+
                'b) Consumption of sugary drinks daily results in obesity. This is an example of a simple {inputs[11]}.',
                'a) All {inputs[12]} should be brought together at the end of the paper in alphabetical order of authors.\n'+
                'b) It provides extensive {inputs[13]} as well as a list of relevant web-sites for further reading.',
                'a) This new {inputs[14]} of artificially growing cells copies what actually happens in nature.\n'+
                'b) We have developed a new {inputs[15]} for detecting errors in the manufacturing process.'
                ]} 
            values={['databases','databases','section','section','data','data','figures','figures','graph','graph','hypothesis','hypothesis','references','references','technique','technique']}/>]} />, 
        <Task 
            title='Vocabulary - 2' 
            helpText={'Find in the text below one more synonym for each group of the words 1-10.'} 
            type={
                <InputCheckTask startNum = {0}
                type={'text'}  
                helpText={''} 
                hasNumStart
                baseText={["                                                              What is the structure of a scientific paper?","\nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\nTypically,  scientific  papers  are comprised of the following parts: \n\n              1. Title                                                                 4. Introduction                                        8. Acknowledgments (optional)\n              2. Abstract                                                         5. Methods                                                9. References / Bibliography\n              3. Authors and affiliations                          6. Results                                                 10. Appendix / Appendices (optional)\n                                                                                             7. Discussion \n\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader."+
                    '\n\nA. This section contains the data collected during experimentation. It is the heart of a scientific paper. In this section, much of the important information may be in the form of tables and graphs. When reading this section, do not readily accept the author’s statements about the findings. Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.\n\n'+
                    'B. You will find background information and a statement of the author’s hypothesis in this section. It usually describes the theoretical background, indicates why the work is important, states a specific research question, and poses a specific hypothesis to be tested.\n\n'+
                    'C. Authors often use this section to describe what their work suggests and how it relates to other studies. In this section, authors can anticipate and address any possible objections to their work and suggest areas of improvement for future research.\n\n'+
                    'D. If it’s well-written it will help you to determine if a paper is interesting and relevant for your project.\n\n'+
                    'E. This section describes both specific techniques and the overall experimental strategy used by the scientists. Generally, it does not need to be read in detail. Refer to this section if you have a specific question about the experimental design.\n\n'+    
                    'F. This part contains information in greater detail than can be presented in the main body of the paper, but which may be of interest to a few people working specifically in this field.\n\n'+  
                    'G. This section provides the sources referred to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.\n\n'+
                    'H. This part of the paper contains brief statements of the purpose, methods, results, and conclusions of a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper.\n\n'+
                    'I. The format of a scientific paper has been defined by centuries of developing tradition, editorial practice, scientific ethics and the interaction with printing and publishing services.\n\n'+
                    'J. It tells you what people or institutions, in addition to the authors, contributed to the work. Reading this section, you can sometimes see what sources provided financial support for the study.\n\n'+             
                    'K. The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.\n\n']}
                text ={[
                    'different, individual, separate, {inputs[0]}',
                    'to contain, to include, to consist of, {inputs[1]}',
                    'nonobligatory, not required, noncompulsory, {inputs[2]}',
                    'particular, distinct, special, {inputs[3]}'
                    ,'to study, to examine, to investigate, {inputs[4]}',
                    'to expect, to predict, to foresee, {inputs[5]}',
                    'to define, to identify, to find out, to specify, {inputs[6]}',
                    'readers, listeners, attendees, {inputs[7]}',
                    'section, part, segment, {inputs[8]}',
                    'to help in sth, to have a hand in sth, to provide support for sth, {inputs[9]}']} values={['distinct',['to be comprised of','are comprised of',"be comprised of"],'optional','specific',['to analyze','analyze'],['to anticipate','anticipate'],['to determine','determine'],'audience','portion',['to contribute to','contribute to','contributed to', 'to contribute to sth', 'contribute to sth']]}/>} />,
        <Task 
            title='Vocabulary - 3' 
            helpText={'Skim the text and find the English equivalents for the Russian collocations 1-20.'} 
            type={
                <InputCheckTask startNum = {0}
                type={'text'} 
                helpText={''} 
                hasNumStart
                baseText={["                                                              What is the structure of a scientific paper?","\nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\nTypically,  scientific  papers  are comprised of the following parts: \n\n              1. Title                                                                 4. Introduction                                        8. Acknowledgments (optional)\n              2. Abstract                                                         5. Methods                                                9. References / Bibliography\n              3. Authors and affiliations                          6. Results                                                 10. Appendix / Appendices (optional)\n                                                                                             7. Discussion \n\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader."+
                    '\n\nA. This section contains the data collected during experimentation. It is the heart of a scientific paper. In this section, much of the important information may be in the form of tables and graphs. When reading this section, do not readily accept the author’s statements about the findings. Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.\n\n'+
                    'B. You will find background information and a statement of the author’s hypothesis in this section. It usually describes the theoretical background, indicates why the work is important, states a specific research question, and poses a specific hypothesis to be tested.\n\n'+
                    'C. Authors often use this section to describe what their work suggests and how it relates to other studies. In this section, authors can anticipate and address any possible objections to their work and suggest areas of improvement for future research.\n\n'+
                    'D. If it’s well-written it will help you to determine if a paper is interesting and relevant for your project.\n\n'+
                    'E. This section describes both specific techniques and the overall experimental strategy used by the scientists. Generally, it does not need to be read in detail. Refer to this section if you have a specific question about the experimental design.\n\n'+    
                    'F. This part contains information in greater detail than can be presented in the main body of the paper, but which may be of interest to a few people working specifically in this field.\n\n'+  
                    'G. This section provides the sources referred to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.\n\n'+
                    'H. This part of the paper contains brief statements of the purpose, methods, results, and conclusions of a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper.\n\n'+
                    'I. The format of a scientific paper has been defined by centuries of developing tradition, editorial practice, scientific ethics and the interaction with printing and publishing services.\n\n'+
                    'J. It tells you what people or institutions, in addition to the authors, contributed to the work. Reading this section, you can sometimes see what sources provided financial support for the study.\n\n'+             
                    'K. The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.\n\n']}
                text={[' научные статьи - {inputs[0]}\n',
                    ' одинаковый общий формат - {inputs[1]}\n',
                    ' названия разделов - {inputs[2]}\n',
                    ' быстро находить конкретную информацию - {inputs[3]}\n',
                    ' содержать данные, полученные в процессе эксперимента - {inputs[4]}\n',
                    ' в форме таблиц и графиков/диаграмм - {inputs[5]}\n',
                    ' анализировать необработанные данные в таблицах и на рисунках - {inputs[6]}\n',
                    ' делать свои собственные выводы - {inputs[7]}\n',
                    ' описывать теоретическую основу - {inputs[8]}\n',
                    ' реагировать на возможные возражения - {inputs[9]}\n',
                    ' предлагать области для усовершенствования при дальнейшем исследовании - {inputs[10]}\n',
                    ' имеющий отношение к вашему проекту - {inputs[11]}\n',
                    ' описывать как специфические методы, так и общую экспериментальную стратегию - {inputs[12]}\n',
                    ' содержать более детальную информацию - {inputs[13]}\n',
                    ' представлять интерес только для людей, работающих непосредственно в данной области - {inputs[14]}\n',
                    ' содержать краткую формулировку цели, описание методов, результатов и выводов исследования - {inputs[15]}\n',
                    ' самый читаемый раздел научной статьи - {inputs[16]}\n',
                    ' предоставлять финансовую поддержку для исследования - {inputs[17]}\n',
                    ' обязательное требование научных публикаций - {inputs[18]}\n',
                    ' показатели /индексы цитируемости - {inputs[19]}']} 
                values={[
                    'scientific papers',['the same general format','same general format'],['the headings of sections','headings of sections'],
                    ['to quickly locate a specific type of information','quickly locate a specific type of information'],
                    ['to contain the data collected during experimentation','contain the data collected during experimentation'],
                    'in the form of tables and graphs',['to analyze the raw data in tables and figures','analyze the raw data in tables and figures'],
                    ['to draw your own conclusions','draw your own conclusions'],
                    ['to describe the theoretical background','describe the theoretical background'],
                    ['address any possible objections','to address any possible objections'],
                    ['to suggest areas of improvement for future research','suggest areas of improvement for future research'],
                    'relevant for your project',['to describe both specific techniques and the overall experimental strategy','describe both specific techniques and the overall experimental strategy'],
                    ['to contain information in greater detail','contain information in greater detail'],['to be of interest to a few people working specifically in this field','be of interest to a few people working specifically in this field'],
                    ['to contain brief statements of the purpose, methods, results and conclusions of a study','contain brief statements of the purpose, methods, results and conclusions of a study'],
                    'the most widely read portion of a scientific paper',['to provide financial support for the study','provide financial support for the study'],
                    ['a compulsory requirement of scientific publications','compulsory requirement of scientific publications'],'citation indices'
              ]}/>}/>,
        <Task 
            title='Video 1.1'
            helpText='Watch the video, take notes and be ready to discuss the questions below IN CLASS.'        
            type={
            <VideoShow 
                text={''}
                video={video1}  
                youtubeSrc="https://vkvideo.ru/video_ext.php?oid=410332351&id=456239024&hd=2&autoplay=1" 
                image={video1img}/>
        }/>,
        <Task
            title={'Reading - 2'}
            helpText={'Skim the ABSTRACTS of the papers 1-4 and match them with the REFERENCES sections of these papers A - F.'}
            type={
            <TwoColumnsCompareTask startNum = {0}
                helpText=''
                rightAnswers={['C','F','E','D']}
                answers={['A','B','C','D','E','F']}
                paperIndex={['6','5','8','7']}
                papers={[paper2,paper1,paper4,paper3]}
                toCompare={['1. Stress-based shape and topology optimization with the level set method',
                    '2. Stochastic Discontinuous Galerkin Methods based on fluctuation-dissipation balance ',
                    '3. Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction',
                    '4. “Together we are better” : Professional learning networks for teachers'
                ]}
              headings={['• Curless,  B.  (1999).  From  range  scans to   3D   models.   ACM   SIGGRAPH Computer Graphics, 33, 38–41.\n• Bazazian,  D.,  Casas,  J.  R.,  Ruiz-Hidalgo,  J. (2015).  Fast  and  robust  edge  extraction  in unorganized  point  clouds.  In:  International conference  on  digital  image  computing: Techniques and applications (DICTA) (pp. 1–8).\n• Kettner,  L.,  Näher,  S.,  Goodman,  J.  E.,  & O’Rourke,  J.  (2004).  Two  computational geometry  libraries:  LEDA  and  CGAL.  In Handbook  of  discrete  and  computational geometry (pp. 1435–1463). Chapman & Hall/CRC.',
                    '• Antoniades,   I.P.,   Samoladas,   I., Stamelos, I., Angelis, L., and Bleris, G.L., (2005).  Dynamic  Simulation  Models  of the Open Source Development Process, in S. Koch  (ed.),  Free/Open  Source  Software Development,    174-202,    Idea    Group Publishing, Hershey, PA.\n• Benkler, Y. (2006). The Wealth of Networks: How  Social  Production  Transforms  Markets and  Freedom,  Yale  University  Press,  New Haven, CT.\n• Bergquist, M. and Ljungberg, J., (2001). The power of gifts: organizing social relationships in open source communities, Info. Systems J., 11, 305-320.',
                    '• P.  Duysinx,  M.P.  Bendsøe,  Topology optimization of continuum structures with local stress constraints, Internat. J. Numer. Methods Engrg.43 (8) (1998) 1453–1478.\n• C.  Le,  J.  Norato,  T.  Bruns,  C.  Ha,  D. Tortorelli,  Stress-based  topology  optimization for  continua,  Struct.  Multidiscip.  Optim.  41 (2010) 605–620.\n• M.P.   Bendsoe,   O.   Sigmund,   Topology Optimization -Theory,   Methods   and Applications,   Springer   Verlag,   Berlin Heidelberg, 2003.',
                    '• Andrews, D., Nonnecke, B., & Preece, J. (2003).  Electronic  survey  methodology:  A case  study  in  reaching  hard-to-involve Internet  users.  International  Journal  of  Human-Computer Interaction, 16(2), 185e210.\n• Apple,  M.  W.  (2009).  Controlling  the  work  of teachers.  In  D.  J.  Flinders,  &  S.  J.  Thornton (Eds.),  The  curriculum  studies  reader  (pp. 327e335). New York, NY: Routledge.\n• Baltar,  F.,  &  Brunet,  I.  (2012).  Social  research 2.0:  Virtual  snowball  sampling  method  using Facebook.  Internet  Research,  22(1),  57e74. http://dx.doi.org/10.1108/ 10662241211199960.',
                    '• Gou J, Hou B, Ou W, Mao Q, Yang H, Liu  Y.  Several  robust  extensions  of collaborative   representation   for   image classification.  Neurocomputing  2018.  https://doi.org/10.1016/j.neucom.2018. 06.089.\n• Wright J, Ma Yi, Mairal J, Sapiro G, Huang TS, Yan S. Sparse representation for computer vision and pattern recognition. Proc of the IEEE 2010; 98:1031–44.\n• Gou J, Wang L, Yi Z, Lv J, Mao Q, Yuan Y-H. A  new  discriminative  collaborative  neighbor representation   method   for   robust   face recognition.  IEEE  Access 2018;6:74713–27. https://doi.org/10.1109/ACCESS.   2018.28835 27. 2018.',
                    '• Cialenco  I.  Statistical  inference  for SPDEs:  an  overview.  Stat  Inference  Stoch Process  Feb.  2018.https://doi.org/10.1007/s11203-018-9177-9.\n• Koski  T,  Loges  W.  Asymptotic  statistical inference for a stochastic heat flow problem. Stat Probab Lett July 1985; 3(4): 185e9.10.1016/0167-7152 (85)90015-x.\n• Lototsky  SV.  Statistical  inference  for  stochastic parabolic   equations:   a   spectral   approach. Publications  Matematiques  Jan.  2009;53:3e45. https://doi.org/10.5565/publmat_53109_01.',
                ]}
              baseText={[['Stress-based shape and topology optimization with the level set method','R.Picelli, S.Townsend, H.A.Kim,C.Brampton,J.Norato','This  paper  proposes  a  level  set  method  to  solve minimum  stress  and  stress-constrained  shape  and topology optimization problems. The method solves a sub-optimization  problem  every  iteration  to  obtain optimal  boundary  velocities.  A  p-norm  stress functional  is  used  to  aggregate  stresses  in  a  single constraint.  The  shape  sensitivity  function  is  derived and  a  computational  procedure  based  on  a  least squares interpolation approach is devised in order to compute  sensitivities  at  the  boundaries.  Adaptive constraint scaling is used to enforce exact control of stress limits. Numerical results show that the method is able to solve the problem efficiently for single and multiple load cases obtaining solutions with smooth boundaries.'],
                    ['Stochastic Discontinuous Galerkin Methods based on fluctuation-dissipation balance','W. Pazner, N. Trask, P.J. Atzberger','We introduce a general framework for approximating parabolic  Stochastic  Partial  Differential  Equations (SPDEs)  based  on  fluctuation-dissipation  balance. Using  this  approach  we  formulate  Stochastic Discontinuous Galerkin Methods (SDGM). We show how   methods   with   linear-time   computational complexity  can  be  developed for  handling  domains with  general  geometry  and  generating  stochastic terms,  handling  both  Dirichlet  and  Neumann boundary conditions. We demonstrate our approach on  example  systems  and  contrast  with  alternative approaches  using  direct  stochastic  discretizations based  on  random  fluxes.  We  show  how  our Fluctuation-Dissipation    Discretizations    (FDD) framework allows us to compensate for discrepancies in  dissipative  properties  between  the  continuous operators and their discretized versions. This allows us  to  handle  general  heterogeneous  discretizations, accurately  capturing  statistical  relations.  Our  FDD framework  provides  a  general  approach  for formulating   SDGM   discretizations   and   other numerical  methods  for  robust  approximation  of stochastic differential equations.'],
                    ['Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction','Laura Rebollo-Neira, Daniel Whitehouse','Sparse representation of 3D images is considered within the context of data reduction. The goal is to produce  high  quality  approximations  of  3D images using fewer elementary components than the  number  of  intensity  points  in  the  3D  array. This is achieved by means of a highly redundant dictionary  and  a  dedicated  pursuit  strategy especially designed for low memory requirements. The  benefit  of  the  proposed  framework  is illustrated  in  the  first  instance  by  demonstrating the  gain  in  dimensionality  reduction  obtained when  approximating  true  color  images  as  very thin  3D  arrays,  instead  of  performing  an independent  channel  by  channel  approximation. The  full  power  of  the  approach  is  further exemplified   by   producing   high   quality approximations  of  hyper-spectral  images  with  a reduction of up to 371 times the number of data points in the representation.'],
                    ['“Together we are better” : Professional learning networks for teachers','Torrey Trust, Daniel G. Krutka, Jeffrey Paul Carpenter','In  recent  years,  many  educators  have  turned  to professional learning networks (PLNs) to grow in their  craft  with  peers  who  are  more  accessible online  because  of  reduced  temporal  and  spatial constraints.  While  educators  have  cultivated PLNs,  there  is  a  dearth  of  research  about  the effects  of  PLNs.  This  manuscript  reports  the findings  of  a  qualitative  study  that  investigated PLN  experiences  through  the  analysis  of  survey data  from  732  P-12  teachers.  Data  analysis suggests that the anytime, anywhere availability of expansive PLNs, and their capacity to respond to educators’ diverse  interests  and  needs,  appear  to offer possibilities  for supporting  the  professional growth  of  whole  teachers.  These  findings  have implications for defining the present and future of teacher learning in a digital age.']]}
              />}/>,
        <Task
            title={'Reading - 3'}
            helpText={'Skim the ACKNOWLEDGMENTS sections from several research papers A - E. Decide which of them:'}
            type={
                <ColumnInlineCompare startNum = {0}
                useMultiple
                helpText=''
                papers={[u1r3p1,u1r3p2,u1r3p3,u1r3p5,u1r3p4]}
                paperIndex = {['8','9','10','12','11']}
                rightAnswers={[['A','E'],['C','D'],['B','C','D','E'],['C']]}
                answers={['A','B','C','D','E']}
                toCompare={['1. Inform about people who in addition to the authors contributed to the work   ',
                    '2. Inform about the contribution of institutions                                                                    ',
                    '3. Inform about the sources of financial support                                                                   ',
                    '4. Inform about all of them: people, institutions and sources of financial support'
                ]}
                baseText={["We are also indebted to P. Getreuer, for making available the waveletcdf97 MATLAB function that we have used for the transformation of each single channel image to the wavelet domain.",
                    "The authors are grateful for an anonymous referee, for valuable  comments and alerting us that the global efficiency measure is the Harary index divided by n/2. Research was supported by a National Science Foundation Research Experience for Undergraduates Site Award #1062128.",
                    "The research described in this chapter has been supported by grants #0083075, #0205679, #0205724, #0350754, and #0534771 from the U.S. National Science Foundation. No endorsement implied. Mark Ackerman at University of Michigan, Ann Arbor; Les Gasser at University of Illinois, UrbanaChampaign; John Noll at Santa Clara University; Margaret Elliott, Chris Jensen, and others at the UCI Institute for Software Research are collaborators on the research described here.",
                    "This research is supported by the British Heart Foundation (grant number PG/15/71/31731). SN, VMF and SKP acknowledge support from the Oxford NIHR Biomedical Research Centre and from the Oxford British Heart Foundation Centre of Research Excellence. VMF is supported by the British Heart Foundation. Part of the code is protected by the US patent US20120078084A1. There are two Tomato version available: TomatoOpenSource compiled with publicly available code and TomatoFull containing additionally private code used for  AmoebaPrivateNr2 fitting algorithm using Nelder– Mead algorithm based on Numerical Recipes. Due to Numerical Recipes licence limitations this code cannot be made publicly available.",
                    "We appreciate the insightful comments from James Noble, Mary Shaw, Richard Gabriel, the anonymous reviewers, and the participants of Dagstuhl Seminar 18061. This material is based upon work supported by the US Department of Defense, by NSF grants CNS1734138 and CNS-1423054, by NSA lablet contract H98230-14-C-0140, by the Software Engineering Institute, and by AFRL and DARPA under agreement #FA8750-16-2-0042. Michael Coblenz is supported by an IBM PhD fellowship. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the sponsors.",
                ]}
              />}/>,
              <Task 

            title='Video 1.2'
            helpText={'Watch the video to compare and contrast the information about different sections of a research paper with the description of the same sections in the text below.\nTake notes and be ready to briefly describe IN CLASS the mission of each section of a research paper.'}
            type={
            <VideoShow 
                video={video2} 
                videoSize={ {width: '720', height: '420'}}
                youtubeSrc="https://vkvideo.ru/video_ext.php?oid=410332351&id=456239025&hd=2&autoplay=1"  
                text={[
                    ["                                                           What is the structure of a scientific paper?","\nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\nTypically,  scientific  papers  are comprised of the following parts: \n\n              1. Title                                                                 4. Introduction                                        8. Acknowledgments (optional)\n              2. Abstract                                                         5. Methods                                                9. References / Bibliography\n              3. Authors and affiliations                          6. Results                                                 10. Appendix / Appendices (optional)\n                                                                                             7. Discussion\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader."],
                    ['Title','If it’s well-written it will help you to determine if a paper is interesting and relevant for your project.'],
                    ['Abstract','This part of the paper contains brief statements of the purpose, methods, results, and conclusions of a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper.'],
                    ['Authors and affiliations','The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.'],
                    ['Introduction','You will find background information and a statement of the author’s hypothesis in this section. It usually describes the theoretical background, indicates why the work is important, states a specific research question, and poses a specific hypothesis to be tested.'],
                    ['Methods','This section describes both specific techniques and the overall experimental strategy used by the scientists. Generally, it does not need to be read in detail. Refer to this section if you have a specific question about the experimental design.'],
                    ['Results','This section contains the data collected during experimentation. It is the heart of a scientific paper. In this section, much of the important information may be in the form of tables and graphs. When reading this section, do not readily accept the author’s statements about the findings. Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.'],
                    ['Discussion','Authors often use this section to describe what their work suggests and how it relates to other studies. In this section, authors can anticipate and address any possible objections to their work and suggest areas of improvement for future research.'],
                    ['Acknowledgments','It tells you what people or institutions, in addition to the authors, contributed to the work. Reading this section, you can sometimes see what sources provided financial support for the study.'],
                    ['References','This section provides the sources referred to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.'],
                    ['Appendix','This part contains information in greater detail than can be presented in the main body of the paper, but which may be of interest to a few people working specifically in this field.']
            ]}
                
            />
        }/>,
        <Task 
            title={'Vocabulary - 4'}
            helpText = {'Complete the texts below with the words from the boxes. There are more words in each box than you need to use.'}
            type={[
                <InputCheckTask startNum = {0}
                    useNums = {true}
                    contType = 'none'
                    type={'words'}
                    justText={true}
                    helpText={''}
                    text={['Leading scientists are identified as much by their {inputs[0]} to communicate ideas and results as by the {inputs[1]} of their research. Ideas and results that are not communicated effectively will not contribute to new {inputs[2]}, so it is important that scientists learn {inputs[3]} their communication skills. There are many types of scientific {inputs[4]}, the principal ones being journal papers and popular science articles, as well as oral and {inputs[5]} presentations. In each case, the ABC of science communication is that it should be {inputs[6]} and audience-adapted, brief and clear.']}
                    baseText={['to improve','poster','ability','communication','quality','opportunity','accurate','to create','facility','knowledge']}
                    values={['ability','quality','knowledge','to improve','communication','poster','accurate']}/>,
                <InputCheckTask startNum = {0}
                    useNums = {true}
                    contType = 'none'
                    justText={true}
                    type={'words'}
                    helpText={''}
                    text={['Peer reviewed journals are often used as a standard of {inputs[0]} research for many disciplines.\nMuch of {inputs[1]} relies on them for research purposes as well as teaching tools. Research papers in peer reviewed journals must meet specific standards set by {inputs[2]} as well as {inputs[3]} examination and possible revisions by "peers" or other researchers in the field. Peer reviewed journals are known for high standards of research and writing {inputs[4]}. Therefore, once an article is approved for {inputs[5]}, in most cases it can be considered a {inputs[6]} and reliable source of information.']}
                    baseText={['implement','publishers','credible','academia','scholarly','publication','reviewers','revisions','craft','undergo']}
                    values={['scholarly','academia','publishers','undergo','craft','publication','credible']}/>]
                
              }/>,
        <Task 
            title={'Vocabulary - 5'}
            helpText={''}
            type={
                [
                  <InputCheckTask startNum = {0} textTitle = {"Writing a scientific research paper"} useNums={true}
                  baseText={['KNOW','IMPLY','READ','COMPOSITION','REPUTATION','RESEARCH','INTRODUCE','REVIEW','ATTRACTION','ESSENTIAL']}
                  helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line. Note that the numbered words 1 – 10 in the box match the numbered gaps (1) – (10) in the text.'}
                  text={['Writing a scientific research paper requires more than ' 
                    +' {inputs[0]}  about your study. It means explaining the important methods, findings, and  {inputs[1]} of your study '
                    +'to other researchers and  {inputs[2]}.\nIt also means '
                    +' {inputs[3]} a paper at an academic level that will get your '
                    +'paper published in  {inputs[4]} journals. In order to do that, ' 
                    +'  {inputs[5]} need to understand what to include in their '
                    +'papers, where to put it, and how to convey the most important information in their research studies in the most effective way. The scientific research paper follows a specific order and structure, and the core parts that compose this structure are the  {inputs[6]} , Materials & Methods, Results, and Discussion '
                    +'sections, or IMRD. One of the most important components of a research paper is its TITLE. The title is the first thing viewers, even the journal editor and  {inputs[7]} , see when they come across '
                    +'a research paper. Not only should your title be  {inputs[8]} '
                    + 'but it should also capture the  {inputs[9]} of your research.'
                    ]}
                  contType='none'
                  type = 'line'
                  values = {['KNOWLEDGE','IMPLICATIONS','READERS','COMPOSING',['REPUTABLE','REPUTED'],'RESEARCHERS','INTRODUCTION',['REVIEWER','REVIEWERS'],'ATTRACTIVE','ESSENCE']}
                  />,
                  <InputCheckTask startNum = {0} textTitle={'Scientific journal rankings'} useNums={true}
                  baseText={['VARY','PROMINENT','SIGNIFY','ROUGH','PUBLISH','INFLUENCE','SUFFICE','IMAGINE','DATE','REVISE']}
                  helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line. Note that the numbered words 1 – 10 in the box match the numbered gaps (1) – (10) in the text.'}
                  text={['Journal rankings are formed according to {inputs[0]} indicators depending ' 
                    +'on the quality of the research material, citations, and {inputs[1]} in the '
                    +'subject area. One of the most {inputs[2]} metrics within the Scopus and '
                    +'Web of Science databases is the quartile. Journals are divided into '
                    +'four {inputs[3]} equal groups depending on the bibliometric indicators:' 
                    +'\nQ1 (first quartile) is the highest ranking; {inputs[4]} in such journal '
                    +'is considered a very significant achievement for scientists.'
                    +'\nQ2 (second quartile) - journals are not as highly ranked as Q1, but are '
                    +'nevertheless recognised as highly {inputs[5]} among researchers.'
                    + '\nQ3 (third quartile) - these are the most popular journals among academics '
                    +'as they have {inputs[6]} ranking for most scientific purposes.'
                    +'\nQ4 (fourth quartile) – publication in such journals also has a positive effect '
                    +'on the {inputs[7]} of the researcher. In most cases, these journals have only recently been included in the database. \n'
                    +'The ranking is {inputs[8]} every year after the regular '
                    +'{inputs[9]} of the metrics. The indicator is calculated for each subject '
                    +'category. Journals might have more than one quartile score. Journals of this '
                    +'type publish material from a variety of subjects.'
                    ]}
                    type='line'
                  contType='none'
                  values = {['VARIOUS','PROMINENCE','SIGNIFICANT','ROUGHLY','PUBLICATION','INFLUENTIAL','SUFFICIENT','IMAGE','UPDATED','REVISION']}
                  />
                ]
              }
              />,
              <Task title='Signposting'
              helpText={'Scan the ABSTRACT and ACKNOWLEDGMENTS sections from different research papers on the right. Find and copy into a separate document all the sentences with signposting phrases 1-20. Make machine translation of these sentences into Russian and IN CLASS be ready to comment on the quality of the translation and your possible editing.'}
                type={
                    <TwoColumnsTextShow
                    leftText={[
                        '1. This paper proposes a method to solve … ',
                        '2. Numerical results show that the method is able to solve the problem efficiently for … ',
                        '3. We introduce … ',
                        '4. Using this approach we formulate … ',
                        '5. We show how methods with … can be developed for … ',
                        '6. We demonstrate our approach on example systems and contrast with alternative approaches using … ',
                        '7. This allows us to … ',
                        '8. … is considered within the context of … ',
                        '9. The goal is to produce … ',
                        '10. This is achieved by means of … ',
                        '11. The benefit of the proposed framework is illustrated by demonstrating … ',
                        '12. The full power of the approach is further exemplified by … ',
                        '13. This manuscript reports the findings of a qualitative study that investigated … ',
                        '14. Data analysis suggests that …',
                        '15. These findings have implications for … ',
                        '16. The authors are grateful for an anonymous referee for valuable comments and … ',
                        '17. … are collaborators on the research described here. ',
                        '18. This research is supported by … ',
                        '19. We appreciate the insightful comments from the anonymous reviewers … ',
                        '20. This material is based upon work supported by …'
                    ]}
                    helpText={''}
                    paperIndexOne={['6','5','8','7']}
                    papersOne={[paper2,paper1,paper4,paper3]}
                    papersTwo={[u1r3p1,u1r3p2,u1r3p3,u1r3p5,u1r3p4]}
                    paperIndexTwo = {['8','9','10','12','11']}
                    rightText={["We are also indebted to P. Getreuer, for making available the waveletcdf97 MATLAB function that we have used for the transformation of each single channel image to the wavelet domain.",
                    "The authors are grateful for an anonymous referee, for valuable  comments and alerting us that the global efficiency measure is the Harary index divided by n/2. Research was supported by a National Science Foundation Research Experience for Undergraduates Site Award #1062128.",
                    "The research described in this chapter has been supported by grants #0083075, #0205679, #0205724, #0350754, and #0534771 from the U.S. National Science Foundation. No endorsement implied. Mark Ackerman at University of Michigan, Ann Arbor; Les Gasser at University of Illinois, UrbanaChampaign; John Noll at Santa Clara University; Margaret Elliott, Chris Jensen, and others at the UCI Institute for Software Research are collaborators on the research described here.",
                    "This research is supported by the British Heart Foundation (grant number PG/15/71/31731). SN, VMF and SKP acknowledge support from the Oxford NIHR Biomedical Research Centre and from the Oxford British Heart Foundation Centre of Research Excellence. VMF is supported by the British Heart Foundation. Part of the code is protected by the US patent US20120078084A1. There are two Tomato version available: TomatoOpenSource compiled with publicly available code and TomatoFull containing additionally private code used for  AmoebaPrivateNr2 fitting algorithm using Nelder– Mead algorithm based on Numerical Recipes. Due to Numerical Recipes licence limitations this code cannot be made publicly available.",
                    "We appreciate the insightful comments from James Noble, Mary Shaw, Richard Gabriel, the anonymous reviewers, and the participants of Dagstuhl Seminar 18061. This material is based upon work supported by the US Department of Defense, by NSF grants CNS1734138 and CNS-1423054, by NSA lablet contract H98230-14-C-0140, by the Software Engineering Institute, and by AFRL and DARPA under agreement #FA8750-16-2-0042. Michael Coblenz is supported by an IBM PhD fellowship. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the sponsors.",
                    ]}
                    noHeadersText={
                        [['Stress-based shape and topology optimization with the level set method','R.Picelli, S.Townsend, H.A.Kim,C.Brampton,J.Norato','This  paper  proposes  a  level  set  method  to  solve minimum  stress  and  stress-constrained  shape  and topology optimization problems. The method solves a sub-optimization  problem  every  iteration  to  obtain optimal  boundary  velocities.  A  p-norm  stress functional  is  used  to  aggregate  stresses  in  a  single constraint.  The  shape  sensitivity  function  is  derived and  a  computational  procedure  based  on  a  least squares interpolation approach is devised in order to compute  sensitivities  at  the  boundaries.  Adaptive constraint scaling is used to enforce exact control of stress limits. Numerical results show that the method is able to solve the problem efficiently for single and multiple load cases obtaining solutions with smooth boundaries.'],
                        ['Stochastic Discontinuous Galerkin Methods based on fluctuation-dissipation balance','W. Pazner, N. Trask, P.J. Atzberger','We introduce a general framework for approximating parabolic  Stochastic  Partial  Differential  Equations (SPDEs)  based  on  fluctuation-dissipation  balance. Using  this  approach  we  formulate  Stochastic Discontinuous Galerkin Methods (SDGM). We show how   methods   with   linear-time   computational complexity  can  be  developed for  handling  domains with  general  geometry  and  generating  stochastic terms,  handling  both  Dirichlet  and  Neumann boundary conditions. We demonstrate our approach on  example  systems  and  contrast  with  alternative approaches  using  direct  stochastic  discretizations based  on  random  fluxes.  We  show  how  our Fluctuation-Dissipation    Discretizations    (FDD) framework allows us to compensate for discrepancies in  dissipative  properties  between  the  continuous operators and their discretized versions. This allows us  to  handle  general  heterogeneous  discretizations, accurately  capturing  statistical  relations.  Our  FDD framework  provides  a  general  approach  for formulating   SDGM   discretizations   and   other numerical  methods  for  robust  approximation  of stochastic differential equations.'],
                        ['Sparse representation of 3D images for piecewise dimensionality reduction with high quality reconstruction','Laura Rebollo-Neira, Daniel Whitehouse','Sparse representation of 3D images is considered within the context of data reduction. The goal is to produce  high  quality  approximations  of  3D images using fewer elementary components than the  number  of  intensity  points  in  the  3D  array. This is achieved by means of a highly redundant dictionary  and  a  dedicated  pursuit  strategy especially designed for low memory requirements. The  benefit  of  the  proposed  framework  is illustrated  in  the  first  instance  by  demonstrating the  gain  in  dimensionality  reduction  obtained when  approximating  true  color  images  as  very thin  3D  arrays,  instead  of  performing  an independent  channel  by  channel  approximation. The  full  power  of  the  approach  is  further exemplified   by   producing   high   quality approximations  of  hyper-spectral  images  with  a reduction of up to 371 times the number of data points in the representation.'],
                        ['“Together we are better” : Professional learning networks for teachers','Torrey Trust, Daniel G. Krutka, Jeffrey Paul Carpenter','In  recent  years,  many  educators  have  turned  to professional learning networks (PLNs) to grow in their  craft  with  peers  who  are  more  accessible online  because  of  reduced  temporal  and  spatial constraints.  While  educators  have  cultivated PLNs,  there  is  a  dearth  of  research  about  the effects  of  PLNs.  This  manuscript  reports  the findings  of  a  qualitative  study  that  investigated PLN  experiences  through  the  analysis  of  survey data  from  732  P-12  teachers.  Data  analysis suggests that the anytime, anywhere availability of expansive PLNs, and their capacity to respond to educators’ diverse  interests  and  needs,  appear  to offer possibilities  for supporting  the  professional growth  of  whole  teachers.  These  findings  have implications for defining the present and future of teacher learning in a digital age.']]
                    }/>
                }
              />,
              <Task
                title={'Speaking in personal context'}
                helpText={'Find the research paper which has maximum relevance and value for the research project you are doing in this semester.\nIN CLASS, be ready to discuss the following:'}
                type={
                    <TextAndImageShow
                    image = {speaking}
                    text={
                        [
                            '• What is the ranking of the scientific journal (quartile) in which the research paper was published?',
                            '• Speak about its structure. Does it follow the standard format? If not, what is different?',
                            '• Which section contains the most relevant and valuable information for your academic and research purposes? Why?',
                            '• Select and highlight the essential terms (key words) in each section of the paper. Make sure you can translate them into your language.',
                            '• Highlight the signposting language in each section. Be ready to translate the sentences with signposts into your language.'
                        ]
                    }/>
                }
              />
              ]}/>
        </>
    )
}