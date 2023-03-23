import './App.css';
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import {Units} from './components/Units'
import {About} from './components/About'
import {Task} from './components/Task'
import { InputCheckTask } from './components/InputCheckTask';
import {CompareTextTask} from './components/CompareTextTask';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import {Unit} from './components/Unit'
import {InlineCompareTask} from './components/InlineCompareTest'
function App() {

  return (
    <div className='App'>
      <NavBar/>
        <Routes>
          <Route exact path = '/' element={<Units/>}></Route>
          <Route path = '/about' element={<About/>}></Route>
          <Route path = '/unit1' element={<Unit tasks={[
          <Task title='Reading - 1' helpText={'Read the text and choose the correct option for each section (1-10) described in the paragraphs (A-K).\nThere is one extra paragraph which you do not need to use.'} 
          type={<CompareTextTask  baseText={"                                                                                   What is the structure of a scientific paper?\n \nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\n\n Typically,  scientific  papers  are comprised of the following parts: \n\n              1.Title                                                                 4.Introduction                                        8.Acknowledgments (optional)\n              2.Abstract                                                         5.Methods                                                9.References / Bibliography\n              3.Authors and affiliations                          6.Results                                                 10.Appendix / Appendices (optional)\n                                                                                            7.Discussion \n\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \n\nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader."}
          collage={true} answers={['Title','Abstract','Authors and affiliations','Introduction','Methods','Results','Discussion','Acnowledgments','References/Bibliography','Appendix / Appendices','Distractor']}
                rightAnswers={['Title','','Abstract','Intoduction','Methods','Results','Discussion','Acnowledgments','References/Bibliography','Appendix / Appendices','Distractor']} 
                headings={[
            'A. This  section  contains  the  data  collected  during experimentation. It is the heart of a scientific paper. In  this  section,  much  of  the  important  information may  be  in  the  form  of  tables  and  graphs.  When reading  this  section,  do  not  readily  accept  the author’s  statements  about  the  findings.  Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.',
            'B. You   will   find background  information  and  a  statement  of  the author’s  hypothesis  in  this  section.  It  usually describes the theoretical background, indicates why the  work  is  important,  states  a  specific research  question,  and  poses  a  specific hypothesis to be tested.',
            'C. Authors  often  use  this  section  to describe  what  their  work  suggests and how it relates to other studies. In this  section,  authors  can  anticipate and address any possible objections to  their  work  and  suggest  areas  of improvement for future research.',
            'D. If it’s well-written it will help you to determine  if  a  paper  is  interesting  and relevant for your project.',
            'E. This section describes both specific techniques and the  overall  experimental  strategy  used  by  the scientists. Generally, it does not need to be read in detail.  Refer  to  this  section  if  you  have  a  specific question about the experimental design.',
            'F. This part contains information in greater detail than can be presented in the main body of the paper, but which  may  be  of interest to  a  few  people  working specifically in this field. ',
            'G. This  section  provides  the  sources  referred  to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.',
            'H. This part of the paper contains brief statements of the purpose,  methods,  results,  and  conclusions  of  a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper. ',
            'I. The format of a scientific paper has been defined by centuries  of  developing  tradition,  editorial practice, scientific ethics and the interaction with printing andpublishing services. ',
            'J. It tells you what people or institutions, in addition to the  authors,  contributed  to  the  work.  Reading  this section,  you  can  sometimes  see  what  sources provided financial support for the study.',
            'K. The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.'
                ]}
                toCompare={['Title','Abstract','Intoduction','Methods','Results','Discussion','Acnowledgments','References/Literature cited','Appendix']}/>} />,
          <Task title='Vocabulary - 1' helpText={'Match the words from the text on the left with their definitions on the right. There is one definition which you don’t need to use.'} 
          type={<InlineCompareTask
                rightAnswers={['the size, shape etc. in which something, especially a book or a journal is produced',
                'one of the parts of a book, paper, website, etc. that deals with a particular subject',
                'the words written as a title at the top of a piece of writing, or at the top of each part of it',
                'information, especially facts or numbers, collected to be examined and used to help decision-making',
                'something that tells a reader where the information came from that is used in a piece of writing',
                'a drawing, such as a curved line, which shows how different values are related to each other',
                'an often numbered drawing or diagram used in a book to explain something',
                'an idea which is suggested as a possible way of explaining facts, proving an argu-ment etc.',
                'a method of doing something that needs skill',
                'a large amount of information stored in a computer system in such a way that it can be easily looked at'
                ]} 
                answers={['an often numbered drawing or diagram used in a book to explain something',
                'a shortened form of a statement speech etc',
                'a method of doing something that needs skill',
                'the words written as a title at the top of a piece of writing, or at the top of each part of it',
                'something that tells a reader where the information came from that is used in a piece of writing',
                'the size, shape etc. in which something, especially a book or a journal is produced',
                'an idea which is suggested as a possible way of explaining facts, proving an argument etc.',
                'a drawing, such as a curved line, which shows how different values are related to each other',
                'one of the parts of a book, paper, website, etc. that deals with a particular subject',
                'a large amount of information stored in a computer system in such a way that it can be easily looked at',
                'information, especially facts or numbers, collected to be examined and used to help decision-making']}
                toCompare={['Format','Section','Heading','Data','Reference','Graph','Figure','Hypothesis','Technique','Database']}/>} />,

                <Task title='Vocabulary - 2' helpText={'Complete the sentences with the words from the box. You will need one word for each pair of sentences, but think if you need a singular or a plural form in each case.'
                +'There are more words in the box than you need to use.'} 
                type={<InputCheckTask type={'words'}
                baseText={['format','section','heading','data','reference','graph','figure','hypothesis','technique','database']}  
                text ={['a) A detailed search included multiple electronic {inputs[0]}, bibliographies of found papers and review articles.\n'+
                'b) Full-text-searching techniques became common in online {inputs[1]} in the 1990s.',
                'a) The {inputs[2]} is organised in the following way.\n'
                +'b) The concluding {inputs[3]} summarizes the arguments'
                ,'a) First, he developed a novel approach to the historical analysis of land values that utilized primary {inputs[4]} and mapping techniques. \n'
                +'b) The firm blends qualitative research, secondary {inputs[5]} analysis, survey-based research, econometrics, and advanced analytics (modelling, simulation, and optimization) to solve the most difficult marketing problems.',
                'a) If we compare these results with the experimental observations in {inputs[6]} 12 and 13, we see that there is qualitative agreement.\n'
                +'b) Please see {inputs[7]} 8 and 9.',
                'a) He drew a {inputs[8]} on the whiteboard.\n'+
                'b) The {inputs[9]} shows quite clearly the impact of the recession on sales figures.',
                'a) A fundamental requirement of a {inputs[10]} is that it can be tested against reality, and can then be supported or rejected.\n'+
                'b) Consumption of sugary drinks daily results in obesity. This is an example of a simple {inputs[11]]}',
                'a) All {inputs[12]} should be brought together at the end of the paper in alphabetical order of authors.\n'+
                'b) It provides extensive {inputs[13]} as well as a list of relevant web-sites for further reading',
                'a) This new {inputs[14]} of artificially growing cells copies what actually happens in nature.\n'+
                'b) We have developed a new {inputs[15]} for detecting errors in the manufacturing process.'
                ]} values={['databases','databases','section','section','data','data','figures','figures','graph','graph','hypothesis','hypothesis','references','references','technique','technique']}/>} />,
                
                <Task title='Vocabulary - 3' helpText={'Find in the text below one more synonym for each group of the words (1-10)'} 
                type={<InputCheckTask type={'text'} baseText={'                                                                                   What is the structure of a scientific paper?\n \nAll scientific papers have the same general format. They  are  divided  into  distinct  sections  and  each section  contains  a  specific  type  of  information.  The number and the headings of sections may vary among journals,  but  for  the  most  part  a basic  structure  is  maintained.\n\n Typically,  scientific  papers  are comprised of the following parts: \n\n              1.Title                                                                 4.Introduction                                        8.Acknowledgments (optional)\n              2.Abstract                                                         5.Methods                                                9.References / Bibliography\n              3.Authors and affiliations                          6.Results                                                 10.Appendix / Appendices (optional)\n                                                                                            7.Discussion \n\nBecause  scientific  papers  are  organized  in  this  way, readers  know  what  to  expect  from  each  part  of  the paper,  and  they  can  quickly  locate  a  specific  type  of information. \n\nLet’s examine the content in each section of a scientific paper, and discuss why each section may be useful to you as a reader.'+
              'A. This section contains the data collected during experimentation. It is the heart of a scientific paper. In this section, much of the important information may be in the form of tables and graphs. When reading this section, do not readily accept the author’s statements about the findings. Rather, carefully analyze the raw data in tables and figures to draw your own conclusions.\n\n'+
              'B. You will find background information and a statement of the author’s hypothesis in this section. It usually describes the theoretical background, indicates why the work is important, states a specific research question, and poses a specific hypothesis to be tested.\n\n'+
              'C. Authors often use this section to describe what their work suggests and how it relates to other studies. In this section, authors can anticipate and address any possible objections to their work and suggest areas of improvement for future research.\n\n'+
              'D. If it’s well-written it will help you to determine if a paper is interesting and relevant for your project.\n\n'+
              'E. This section describes both specific techniques and the overall experimental strategy used by the scientists. Generally, it does not need to be read in detail. Refer to this section if you have a specific question about the experimental design.\n\n'+    
              'F. This part contains information in greater detail than can be presented in the main body of the paper, but which may be of interest to a few people working specifically in this field.\n\n'+  
              'G. This section provides the sources referred to throughout the paper. It is also helpful for generating a list of background reading on the topic under study.\n\n'+
              'H. This part of the paper contains brief statements of the purpose, methods, results, and conclusions of a study. It is often included in article databases, and is usually free to a large audience. Thus it may be the most widely read portion of a scientific paper.\n\n'+
              'I. The format of a scientific paper has been defined by centuries of developing tradition, editorial practice, scientific ethics and the interaction with printing and publishing services.\n\n'+
              'J. It tells you what people or institutions, in addition to the authors, contributed to the work. Reading this section, you can sometimes see what sources provided financial support for the study.\n\n'+             
              'K. The author’s profile and institutional address is a compulsory requirement of scientific publications indexed in such international citation indices as Scopus and Web of Science.\n\n'}
                text ={[
                  'different, individual, separate, {inputs[0]}',
                  'to contain, to include, to consist of, {inputs[1]}',
                  'nonobligatory, not required, noncompulsory,{inputs[2]}',
                  'particular, distinct, special,{inputs[3]}'
                ,'to study, to examine, to investigate,{inputs[4]}',
                'to expect, to predict, to foresee,{inputs[5]}',
                'to define, to identify, to find out, to specify,{inputs[6]}',
                'readers, listeners, attendees, {inputs[7]}',
                'section, part, segment,{inputs[8]}',
                'to help in sth, to have a hand in sth, to provide support for sth, {inputs[9]}']} values={['one','two','three','four','five','six','seven','eight','one','two','three','four','five','six','seven','eight']}/>} />,]}/>}>
          
          </Route>
          <Route path = '/unit2' element={<About/>}></Route>
          <Route path = '/unit3' element={<About/>}></Route>
          <Route path = '/unit4' element={<About/>}></Route>
          <Route path = '/unit5' element={<About/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
