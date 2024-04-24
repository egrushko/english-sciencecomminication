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
import {TrueFalseTask} from '../Tasks/TrueFalseTask';
import {SecondUnitBigText} from './SecondUnitBigText';
import video21 from '../../videos/video 2.1.mp4'
import video22 from '../../videos/video2.2.mp4'
import speaking from '../../img/speaking2.png'
import table from '../../img/table2.1.png'
import p9 from '../../pdf/p9.pdf'
import p10 from '../../pdf/p10.pdf'
import p11 from '../../pdf/p11.pdf'
import p12 from '../../pdf/p12.pdf'
import p13 from '../../pdf/p13.pdf'
import p14 from '../../pdf/p14.pdf'
import p15 from '../../pdf/p15.pdf'
import p17 from '../../pdf/p17.pdf'

export const SecondUnit = () =>{

    return(
        <Unit unitTitle={"How to read a scientific paper?"} unitNum={2} names = {['Task 1','Task 2','Task 3','Task 4','Task 5','Task 6','Task 7','Task 8','Video 2.1','Video 2.2','Speaking']}
        tasks={[
            <Task 
                helpText = 'Read the text and mark True or False the statements 1- 10 below.'
                title='Reading - 1'
                type={
                    [
                        <TrueFalseTask helpText=''
                        text={<SecondUnitBigText/>}
                        textTitle={''}
                        useNums
                        startNum={0}
                        statements={
                            [
                                'If you want to make your reading of the scientific paper more efficient, break the process into stages.',
                                'Skimming the research paper is recommended to start with reading the ABSTRACT.',
                                'On stage one you should focus on reading and understanding the INTRODUCTION section of the paper.',
                                'An ABSTRACT helps a reader to define the type of the paper they are reading.',
                                'In Applied Mathematics papers the authors either try to use or to develop mathematical tools for different applied problems.',
                                'Pure mathematics papers and theoretical papers might have some similar features.',
                                'Review articles make the best choice if you want to get up-to-date on current trends in the field of your research interest.',
                                'Detailed technical description of the problem is one of the distinguishing features of expository articles.',
                                'Working through theorems and proofs in mathematical papers is less time-consuming than reading other types of scientific papers.',
                                'Active reading means taking notes, highlighting key phrases and figuring out the meaning of new words.'
                            ]
                        }

                        answers = {
                            [
                                [true,false],[false,true],[false,true],[true,false],[true,false],[true,false],[true,false],[false,true],[false,true],[true,false]
                            ]
                        }
                        />
                    ]
                }
            />,
            <Task 
                helpText = ''
                title = 'Vocabulary - 1'
                type = {[
                    <InlineCompareTask helpText = 'Match the words from the text with their definitions. There is one extra definition which you don’t need to use.' startNum={0}
                        answers = {
                            [             
                                'a computer program that carries out a step-by-step representation of the actions of something in the real world',
                                'a usually short account of something which gives a general picture but no details',
                                'a written or printed copy of words that have been spoken',
                                'a few sentences that give the main ideas in an article or a scientific paper',
                                'something that tells a reader where the information came from that is used in a piece of writing',
                                'words or lines taken from a book or a speech',
                                'a scientific test that is done in order to study what happens and to gain knowledge',
                                'a report in a newspaper or magazine, or on the Internet in which somebody gives their opinion of a book, play, film etc.',
                                '(especially in mathematics) a formal statement that can be shown to be true by logic',
                                'the calculations that show how the solution to a mathematical problem or equation was reached',
                                'knowledge or skill which comes from practice in an activity or doing something for a long time, rather than from books'
                            ]
                        }

                        rightAnswers = {
                            [
                                'a usually short account of something which gives a general picture but no details',
                                'words or lines taken from a book or a speech',
                                'a few sentences that give the main ideas in an article or a scientific paper',
                                '(especially in mathematics) a formal statement that can be shown to be true by logic',
                                'the calculations that show how the solution to a mathematical problem or equation was reached',
                                'a scientific test that is done in order to study what happens and to gain knowledge',
                                'a computer program that carries out a step-by-step representation of the actions of something in the real world',
                                'a report in a newspaper or magazine, or on the Internet in which somebody gives their opinion of a book, play, film etc.',
                                'a written or printed copy of words that have been spoken',
                                'knowledge or skill which comes from practice in an activity or doing something for a long time, rather than from books'
                            ]
                        }

                        toCompare={
                            [
                                '1. Overview','2. Citation','3. Abstract (n)','4. Theorem','5. Proof','6. Experiment','7. Simulation','8. Review','9. Transcript','10. Experience'
                            ]
                        }
                    />,
                    <InputCheckTask startNum = {0}
                      type={'words'} 
                      useAB={true} 
                      helpText={'Complete the sentences with the words from the box. You will need one word for each pair of sentences, but think if you need a singular or a plural form in each case. There are more words in the box than you need to use.'}
                      text={["a) There is a section at the end of the magazine that includes {inputs[0]} of recent articles/books.\nb) Each four-part volume contains around 700 {inputs[1]}reporting research in some 200 journals from around the world.","a) Although the survey methodology is useful in providing a broad {inputs[2]}, further in-depth study of some of the findings would be useful.\nb) This section attempts to give a more balanced {inputs[3]} of the status of the disease in the region.","a) The best way to learn is by {inputs[4]} - by doing things.\nb) As we gained {inputs[5]} of interpreting the data we were able to work faster.","a) {inputs[6]} 4.1 can be proven using a standard logical relations argument, but the proof is beyond the scope of this article.\nb) We are now ready to state and prove our main {inputs[7]}.","a) Don't forget to try out the equipment before setting up the {inputs[8]}.\nb) For the {inputs[9]}to be valid, it is essential to record the data accurately.","a) All references to published texts and {inputs[10]} of manuscripts have been updated from the original edition, and new references have been added.\nb) The book is not burdened by excessive reference {inputs[11]}, it is very readable and suited to a wide-ranging audience.","a) Plausibility arguments using heuristic devices such as pictures and analogies preceded strict mathematical {inputs[12]}.\nb) The course will cover the reading and writing of mathematical {inputs[13]}.","a) If we can make mistakes in a {inputs[14]} that keep you from making mistakes in the real world, that definitely saves lives.\nb) The theoretical results are supported by numerical {inputs[15]} which have been compared with the experimental results."]}
                      baseText={['overview','citation','abstract','theorem','proof','experiment','simulation','review','transcript','experience']}
                      values={['abstracts','abstracts','overview','overview','experience','experience','theorem','theorem','experiment','experiment','citations','citations',
                        ['proof','proofs'],'proofs','simulation','simulations']}/>
                ]}
            />,
            <Task
                helpText={'Find in the text below one more synonym for each group of the words 1-10.'}
                title={'Vocabulary - 2'}
                type={
                    <InputCheckTask helpText={''} startNum={0}
                        type={'text'} 
                        hasNumStart
                        baseText={[<SecondUnitBigText/>]}
                        text={
                            [
                                'to look through, to scan, to browse, {inputs[0]}',
                                'acquainted with, informed of, aware of, {inputs[1]}',
                                'to meet, to face, to come upon, {inputs[2]}',
                                'to identify, to characterize, to specify, to determine, {inputs[3]}',
                                'core, heart, nucleus, {inputs[4]}',
                                'original, initial, authentic, {inputs[5]}',
                                'explanatory, interpretive, descriptive, {inputs[6]}',
                                'to decode, to translate, to interpret, {inputs[7]}',
                                'connection, significance, appropriateness, applicability, {inputs[8]}',
                                'effort, attempt, try, {inputs[9]}'
                            ]
                        }
                        values={[['to skim','skim'],'familiar with',['to encounter','encounter'],['to distinguish','distinguish'],'essence','primary','expository',['to decipher','decipher'],'relevance',['endeavor','endeavour']]}
                    />
                }
            />,
            <Task 
                title='Vocabulary - 3' 
                helpText={'Skim the text and find the English equivalents for the Russian collocations 1-20. '} 
                type={
                    <InputCheckTask startNum = {0}
                    type={'text'} 
                    helpText={''} 
                    hasNumStart
                    baseText={[<SecondUnitBigText/>]}
                    text={['бегло просмотреть статью - {inputs[0]}',
                           'посмотреть список литературы - {inputs[1]}',
                           'представлены в цитатах - {inputs[2]}',
                           'прочитать аннотацию - {inputs[3]}',
                           'типы научных статей, которые с большой вероятностью вам попадутся - {inputs[4]}',
                           'сообщать о результатах экспериментального исследования - {inputs[5]}',
                           'написанный в стилистике «теорема-доказательство» - {inputs[6]}',
                           'создавать математические инструменты, которые важны для анализа многочисленных прикладных задач / проблем - {inputs[7]}',
                           'опираться на компьютерное имитационное моделирование - {inputs[8]}',
                           'формулировать / выдвигать гипотезу для описания наблюдаемых данных - {inputs[9]}',
                           'предоставлять обширный, иногда детальный обзор или краткое изложение работ в данной области - {inputs[10]}',
                           'полное отсутствие технических деталей и отсутствие ссылок на исходную литературу / первоисточники - {inputs[11]}',
                           'включать расшифровку стенограммы выступлений - {inputs[12]}',
                           'изнурительное испытание/опыт - {inputs[13]}',
                           'читать математическую статью и прорабатывать каждое доказательство - {inputs[14]}',
                           'читать с карандашом в руках - {inputs[15]}',
                           'расшифровать значение этих слов - {inputs[16]}',
                           'может понадобиться специализированный словарь - {inputs[17]}',
                           'определить уровень значимости статьи для ваших научных интересов - {inputs[18]}',
                           'почти каждая область человеческой деятельности - {inputs[19]}'
                        ]} 
                    values={[
                            ['to skim the paper','skim the paper'],
                            ['take a look at the references','to take a look at the references'],
                            ['be represented in the citations','represented in the citations','are represented in the citations'],
                            ['to read the abstract ','read the abstract '],
                            'types of scientific papers you are most likely to encounter',
                            ['report on the results of experimental studies','to report on the results of experimental studies'],
                            'written in a theorem-proof style',
                            ['to develop mathematical tools that are important in analyzing multiple applied problems','develop mathematical tools that are important in analyzing multiple applied problems'],
                            ['to rely on computer simulations','rely on computer simulations'],
                            ['to set forth hypothesis to describe observed data','set forth hypothesis to describe observed data'],
                            ['to provide a broad sometimes detailed overview or summary of work in a given area','provide a broad sometimes detailed overview or summary of work in a given area','to provide a broad, sometimes detailed, overview or summary of work in a given area','provide a broad, sometimes detailed, overview or summary of work in a given area','to provide a broad sometimes detailed, overview or summary of work in a given area','provide a broad sometimes detailed, overview or summary of work in a given area','to provide a broad, sometimes detailed overview or summary of work in a given area','provide a broad, sometimes detailed overview or summary of work in a given area'],
                            'total lack of technical detail and lack of reference to the primary literature',
                            ['include transcripts of talks','to include transcripts of talks'],
                            'an exhausting experience',
                            ['to read a mathematical paper and work through each proof','read a mathematical paper and work through each proof'],
                            ['to read with a pen in hand','read with a pen in hand'],
                            ['to decipher the meaning of these words','decipher the meaning of these words'],
                            'a specialized dictionary may be necessary',
                            ['to determine the level of the relevance of the paper to your research interests','determine the level of the relevance of the paper to your research interests'],
                            'almost every field of human endeavor'      
                            ]}/>
                }/>,
              <Task 
              title={'Vocabulary - 4'}
              helpText = {'Complete the text below with the words from the box. There are more words in the box than you need to use.'}
              type={[
                  <InputCheckTask startNum = {0}
                      useNums = {true}
                      contType = 'none'
                      type={'words'}
                      justText={true}
                      helpText={''}
                      text={['If you walk into a bookstore, you are not {inputs[0]} to find Newton’s Principia, anything by Marcus Aurelius, or even any of Einstein’s popular works. If you make your way to the shelf with magazines you’ll find Time, but not Nature, and Scientific American, but not Science. Why? One clue lies in the {inputs[1]} of the skills required to read Newton, Marcus Aurelius, or Einstein, to read Nature or Science, skills that are not generally needed to read Newsweek, Time, or People. These skills are not to be found in the particular knowledge of the scientific {inputs[2]} but rather are to be found in the general skills of reading possessed by any educated person. Unfortunately, these skills are not often taught in high schools and \n{inputs[3]}. It is perfectly possible, even typical, to reach {inputs[4]} school or beyond and still be lacking many of the basic skills necessary for reading the {inputs[5]} literature in almost every field of knowledge. Surveying the text (title, author, date, etc) and skimming and scanning are {inputs[6]} academic reading skills for you and for native English speakers too who also need to develop these skills.']}
                      baseText={['graduate','certainly','colleges','likely','essential','primary','number','specialist','nature','active']}
                      values={['likely','nature','specialist','colleges','graduate','primary','essential']}/>]
                }/>,
               
              <Task
            title={'Reading - 2'}
            helpText={'Skim parts from different types of scientific papers A-G. Click on the link at the end of each part to see the full version\n(all sections) of the research papers. After careful analysis decide which of them are:'}
            type={
                <ColumnInlineCompare startNum = {0}
                helpText=''
                useMultiple
                papers={[p10,p12,p13,p14,p9,p15,p11,p17]}
                paperIndex = {['11','14','20','18','13','19','15','17']}
                rightAnswers={['C','G',['A','F'],'D','E',['B','H']]}
                answers={['A','B','C','D','E','F','G','H']}
                toCompare={['1. Experimental',
                    '2. Pure Mathematics',
                    '3. Applied Mathematics',
                    '4. Theoretical',
                    '5. Review',
                    '6. Expository'
                ]}
                baseText={[
                    ['Interdisciplinary Programming Language Design','M. Coblenz, J. Aldrich, B. A. Myers, J. Sunshine','Approaches for programming language design used commonly in the research community today center around theoretical and performance-oriented evaluation. Recently, researchers have been considering more approaches to language design, including the use of quantitative and qualitative user studies that examine how different designs might affect programmers. In this paper, we argue for an interdisciplinary approach that incorporates many different methods in the creation and evaluation of programming languages. We argue that the addition of user-oriented design techniques can be helpful at many different stages in the programming language design process.'],
                    ['A Sideways Look at Hilbert’s Twenty-three Problems of 1900','Ivor Grattan-Guinness','As the nineteenth century drew to its close, David Hilbert (1862–1943), then regarded as a leading mathematician of his generation, presented a list of twenty-three problems, which he urged upon the attention of his contemporaries. They have entered the folklore of professional mathematicians; even a partial solution of one of them has given its author(s) much prestige. Two compendia have reviewed progress to the date of their publication: in the former Soviet Union, where study of the problems has been a speciality, and in the United States. In addition, individual problems have been examined in various other books and special articles. Now, at the centenary of the lecture, it is opportune to compare the range of Hilbert’s problems against the panoply then evident in mathematics. '],
                    ['Conditional Wasserstein Generative Adversarial Networks','Cameron Fabbri','Deep neural networks have been shown to be powerful function approximators, achieving great success across many tasks. While much of the focus has been towards discriminative tasks, recent advances in generative models have brought a surge of research towards this area. Generative Adversarial Networks (GANs) have been able to model complex data distributions such as the set of natural images. While effective, they have been shown to be very hard to train in practice. This work demonstrates how an improvement to the GAN framework can be used in a conditional manner, able to restrict their generation according to some alternate information, such as a class label. Additionally, we explore this learned latent space in an informed manner, showing smooth translations between images and attributes.'],
                    ['What can topology tell us about the neural code? ','Carina Curto','Neuroscience is undergoing a period of rapid experimental progress and expansion. New mathematical tools, previously unknown in the neuroscience community, are now being used to tackle fundamental questions and analyze emerging data sets. Consistent with this trend, the last decade has seen an uptick in the use of topological ideas and methods in neuroscience. In this paper I will survey recent applications of topology in neuroscience and explain why topology is an especially natural tool for understanding neural codes.'],
                    ['Generative Adversarial Networks: An Overview','Antonia Creswell, Tom White, Vincent Dumoulin, Kai Arulkumaran, Biswa Senguptay and Anil A Bharath','Generative adversarial networks (GANs) provide a way to learn deep representations without extensively annotated training data. They achieve this through deriving backpropagation signals through a competitive process involving a pair of networks. The representations that can be learned by GANs may be used in a variety of applications, including image synthesis, semantic image editing, style transfer, image super-resolution and classification. The aim of this review paper is to provide an overview of GANs for the signal processing community, drawing on familiar analogies and concepts where possible. In addition to identifying different methods for training and constructing GANs, we also point to remaining challenges in their theory and application.'],
                    ['Finite Element Homogenization Models of Bulk Mixed Piezocomposites with Granular Elastic Inclusions in ACELAN Package','A.B. Kudimova, D.K. Nadolin, A.V. Nasedkin, P.A. Oganesyan, A.N. Soloviev','The paper presents the methods for solving the homogenization problems for two-phase piezoelectric composites, which are implemented in ACELAN-COMPOS finite element package, developed by the authors. The considered composites consist of piezoelectric skeleton and elastic inclusions. The effective moduli method is used to determine the effective properties of the composite. In this method, the static electroelasticity problems with special boundary conditions are set for a representative volume of the composite. These problems are solved numerically using the finite element method. The developed algorithm for generating representative volumes for the composites with granular inclusions is described in detail. The work of the algorithm is illustrated by an example of a composite made of PZT-4 piezoceramic with inclusions of α-corundum.'],
                    ['Global efficiency of graphs','B.Ek, C. VerSchneider, D. A. Narayan','The distance d(i, j) between any two vertices i and j in a graph is the number of edges in a shortest path between i and j. If there is no path connecting i and j, then d(i, j) = ∞. In 2001, Latora and Marchiori introduced the measure of efficiency between vertices in a graph (Latora and Marchiori, 2001). The efficiency between two vertices i and j is defined to be ∈(i,j) = 1/d(i,j)  for all i ≠ j. The global efficiency of a graph is the average efficiency over all i ≠ j. The concept of global efficiency has been applied to optimization of transportation systems and brain connectivity. In this paper we determine the global efficiency for complete multipartite graphs K(m,n), star and subdivided star graphs, and the Cartesian Products K(n)*P(n)^m,K(n)*C(n)^m,K(m)*K(n) and P(m)*P(n).'],
                    ['Graph Theory in the Information Age','Fan Chung','In the past decade, graph theory has gone through a remarkable shift and a profound transformation. The change is in large part due to the humongous amount of information that we are confronted with. A main way to sort through massive data sets is to build and examine the network formed by interrelations. For example, Google’s successful Web search algorithms are based on the WWW graph, which contains all Web pages as vertices and hyperlinks as edges. There are all sorts of information networks, such as biological networks built from biological databases and social networks formed by email, phone calls, instant messaging, etc., as well as various types of physical networks. Of particular interest to mathematicians is the collaboration graph, which is based on the data from Mathematical Reviews. In the collaboration graph, every mathematician is a vertex, and two mathematicians who wrote a joint paper are connected by an edge.']
                ]}
              />}/>,
              <Task title='Signposting'
              helpText={'Scan the ABSTRACT sections from different types of scientific papers on the right. Find and copy into a separate document all the sentences with signposting phrases 1-20. Make machine translation of these sentences into Russian and IN CLASS be ready to comment on the quality of the translation and your possible editing.'}
                type={
                    <TwoColumnsTextShow
                    leftText={[
                        '1. Recently, researchers have been considering more approaches to …',
                        '2. In this paper, we argue for an interdisciplinary approach that incorporates many different methods in … ',
                        '3. We argue that … ',
                        '4. In addition, individual problems have been examined in various …',
                        '5. This work demonstrates how … can be used in … ',
                        '6. Additionally, we explore …',
                        '7. New mathematical tools are now being used to tackle fundamental questions and analyze emerging … ',
                        '8. In this paper I will survey recent applications of topology in … ',
                        '9. … may be used in a variety of applications, Including … ',
                        '10. The aim of this review paper is to provide an overview of … ',
                        '11. In addition to identifying different methods for … we also point to remaining challenges in their theory and application.',
                        '12. The paper presents the methods for solving …',
                        '13. These problems are solved numerically using … ',
                        '14. The developed algorithm for … is described in detail.',
                        '15. The work of the algorithm is illustrated by an example of …',
                        '16. The concept of … has been applied to optimization of …',
                        '17. In this paper we determine … ',
                        '18. In the past decade, … has gone through a remarkable shift and a profound transformation.',
                        '19. The change is in large part due to …',
                        '20. Of particular interest to mathematicians is …'
                    ]}
                    helpText={''}
                    papersOne={[p10,p12,p13,p14,p9,p15,p11,p17]}
                    paperIndexOne = {['11','14','20','18','13','19','15','17']}
                    rightText=''
                    noHeadersText={[
                        ['Interdisciplinary Programming Language Design','M. Coblenz, J. Aldrich, B. A. Myers, J. Sunshine','Approaches for programming language design used commonly in the research community today center around theoretical and performance-oriented evaluation. Recently, researchers have been considering more approaches to language design, including the use of quantitative and qualitative user studies that examine how different designs might affect programmers. In this paper, we argue for an interdisciplinary approach that incorporates many different methods in the creation and evaluation of programming languages. We argue that the addition of user-oriented design techniques can be helpful at many different stages in the programming language design process.'],
                    ['A Sideways Look at Hilbert’s Twenty-three Problems of 1900','Ivor Grattan-Guinness','As the nineteenth century drew to its close, David Hilbert (1862–1943), then regarded as a leading mathematician of his generation, presented a list of twenty-three problems, which he urged upon the attention of his contemporaries. They have entered the folklore of professional mathematicians; even a partial solution of one of them has given its author(s) much prestige. Two compendia have reviewed progress to the date of their publication: in the former Soviet Union, where study of the problems has been a speciality, and in the United States. In addition, individual problems have been examined in various other books and special articles. Now, at the centenary of the lecture, it is opportune to compare the range of Hilbert’s problems against the panoply then evident in mathematics. '],
                    ['Conditional Wasserstein Generative Adversarial Networks','Cameron Fabbri','Deep neural networks have been shown to be powerful function approximators, achieving great success across many tasks. While much of the focus has been towards discriminative tasks, recent advances in generative models have brought a surge of research towards this area. Generative Adversarial Networks (GANs) have been able to model complex data distributions such as the set of natural images. While effective, they have been shown to be very hard to train in practice. This work demonstrates how an improvement to the GAN framework can be used in a conditional manner, able to restrict their generation according to some alternate information, such as a class label. Additionally, we explore this learned latent space in an informed manner, showing smooth translations between images and attributes.'],
                    ['What can topology tell us about the neural code? ','Carina Curto','Neuroscience is undergoing a period of rapid experimental progress and expansion. New mathematical tools, previously unknown in the neuroscience community, are now being used to tackle fundamental questions and analyze emerging data sets. Consistent with this trend, the last decade has seen an uptick in the use of topological ideas and methods in neuroscience. In this paper I will survey recent applications of topology in neuroscience and explain why topology is an especially natural tool for understanding neural codes.'],
                    ['Generative Adversarial Networks: An Overview','Antonia Creswell, Tom White, Vincent Dumoulin, Kai Arulkumaran, Biswa Senguptay and Anil A Bharath','Generative adversarial networks (GANs) provide a way to learn deep representations without extensively annotated training data. They achieve this through deriving backpropagation signals through a competitive process involving a pair of networks. The representations that can be learned by GANs may be used in a variety of applications, including image synthesis, semantic image editing, style transfer, image super-resolution and classification. The aim of this review paper is to provide an overview of GANs for the signal processing community, drawing on familiar analogies and concepts where possible. In addition to identifying different methods for training and constructing GANs, we also point to remaining challenges in their theory and application.'],
                    ['Finite Element Homogenization Models of Bulk Mixed Piezocomposites with Granular Elastic Inclusions in ACELAN Package','A.B. Kudimova, D.K. Nadolin, A.V. Nasedkin, P.A. Oganesyan, A.N. Soloviev','The paper presents the methods for solving the homogenization problems for two-phase piezoelectric composites, which are implemented in ACELAN-COMPOS finite element package, developed by the authors. The considered composites consist of piezoelectric skeleton and elastic inclusions. The effective moduli method is used to determine the effective properties of the composite. In this method, the static electroelasticity problems with special boundary conditions are set for a representative volume of the composite. These problems are solved numerically using the finite element method. The developed algorithm for generating representative volumes for the composites with granular inclusions is described in detail. The work of the algorithm is illustrated by an example of a composite made of PZT-4 piezoceramic with inclusions of α-corundum.'],
                    ['Global efficiency of graphs','B.Ek, C. VerSchneider, D. A. Narayan','The distance d(i, j) between any two vertices i and j in a graph is the number of edges in a shortest path between i and j. If there is no path connecting i and j, then d(i, j) = ∞. In 2001, Latora and Marchiori introduced the measure of efficiency between vertices in a graph (Latora and Marchiori, 2001). The efficiency between two vertices i and j is defined to be ∈(i,j) = 1/d(i,j)  for all i ≠ j. The global efficiency of a graph is the average efficiency over all i ≠ j. The concept of global efficiency has been applied to optimization of transportation systems and brain connectivity. In this paper we determine the global efficiency for complete multipartite graphs K(m,n), star and subdivided star graphs, and the Cartesian Products K(n)*P(n)^m,K(n)*C(n)^m,K(m)*K(n) and P(m)*P(n).'],
                    ['Graph Theory in the Information Age','Fan Chung','In the past decade, graph theory has gone through a remarkable shift and a profound transformation. The change is in large part due to the humongous amount of information that we are confronted with. A main way to sort through massive data sets is to build and examine the network formed by interrelations. For example, Google’s successful Web search algorithms are based on the WWW graph, which contains all Web pages as vertices and hyperlinks as edges. There are all sorts of information networks, such as biological networks built from biological databases and social networks formed by email, phone calls, instant messaging, etc., as well as various types of physical networks. Of particular interest to mathematicians is the collaboration graph, which is based on the data from Mathematical Reviews. In the collaboration graph, every mathematician is a vertex, and two mathematicians who wrote a joint paper are connected by an edge.']
                ]}
                />
                }
              />,
              <Task 
            title={'Vocabulary - 5'}
            helpText={''}
            type={
                [
                  <InputCheckTask startNum = {0} textTitle = {"Can Machine Translation Replace Human Translation?"} useNums={true}
                  baseText={['ELIMINATION','PROMISE','AUTOMATE','GENEROUS','INVEST','ACCURATELY','DIFFER','USEFUL','NEURON','ANALYSIS']}
                  helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line.'}
                  text={['In the world of digitization and artificial intelligence , there is always a race to {inputs[0]} human role in as many areas as possible. Translation is one area where the prospects do look {inputs[1]} {inputs[2]} translation may take the place of professional translation sooner or later. Many technology companies worldwide are investing {inputs[3]}  in machine translation. These {inputs[4]}  and recent advancements in deep learning have yielded major improvements in translation quality. According to Google, switching to deep learning produced a 60% increase in translation {inputs[5]}  compared to the phrase-based approach previously used in Google Translate. Today, Google and Microsoft can translate over 100 {inputs[6]}  languages and are approaching human-level accuracy for many of them. The same is true for Yandex Translate. As soon as the {inputs[7]}  enters text to translate, Yandex Translate sends this text to both systems: the {inputs[8]}  network and the statistical translator. The results obtained from both systems are evaluated by an algorithm based on the CatBoost machine learning method. The algorithm {inputs[9]}  dozens of factors, from sentence length to syntax. The two translations are compared across all factors, and the best one is shown to the user. However, while machine translation has made lots of progress, it’s still not perfect. ']}
                  contType='none'
                  type = 'line'
                  values = {['ELIMINATE','PROMISING',['AUTOMATED','AUTOMATIC'],'GENEROUSLY','INVESTMENTS','ACCURACY','DIFFERENT','USER','NEURAL',['ANALYSES','ANALYZES']]}
                  extraTextContent={
                    <div className='px-[1.5vw] leading-[2vw] text-[1.5vw] mt-1'>You might want <a href='/#/about?activeTab=0'>to watch the video guide</a> on how to use machine translation instruments available now more effectively and more efficiently.</div>}
                  />
                ]
              }
              />,
              <Task
                helpText={'Watch the video, take notes to answer the questions and to complete the chart below. Be ready to discuss this information\nIN CLASS.'}
                title={'Video - 2.1'}
                type={
                    <VideoShow
                        justText
                        image = {table}
                        text={['• What is the first step in choosing the right reading strategy?','• What reading approaches can students use as part of their university reading habits?']}
                        video={video21} 
                    />
                }
            />,
            <Task
                helpText={'Watch the video. Complete the information about the structure and language of the material you might read. You might need to use from one to three words to fill in the gaps 1-10.'}
                title={'Video - 2.2'}
                type={
                    <InputCheckTask helpText={''} startNum={0}
                        type={'text'} 
                        contType='none'
                        useNums
                        video={video22}
                        text={
                            [
                                'What do you think? Do you need to read journal articles, textbooks and {inputs[0]} the same way? True or False? Well, both answers are right – why? Because it depends on your purpose which will help {inputs[1]}. You have always read for content. Try now to also read looking at the structure. How has the author constructed {inputs[2]} work? Look at the subheadings, {inputs[3]}, tables. Then read looking at the language used. Try making a glossary of the new or {inputs[4]} words. What {inputs[5]} or verbs are commonly used? The structure and language that you {inputs[6]} can also be used in your assignments. Finally, what are the main {inputs[7]} when starting your reading? Be clear about your purpose and what you are {inputs[8]}. Choose the best strategy of skimming, scanning or close reading and then you will be more efficient with your reading and find more {inputs[9]} information. Happy reading!'
                            ]
                        }
                        values={[['web sites','websites'],'identify your approach','their','diagrams','discipline specific','sentence starters','note down','things to remember','trying to achieve','relevant']}
                    />
                }
            />,
            <Task
            title={'Speaking in personal context'}
            helpText={'Be ready to speak in CLASS about your own experience of doing academic reading. Use the questions as the guidelines for your talk.'}
            type={
                <TextAndImageShow
                image = {speaking}
                text={
                    [
                        '• How much weekly reading do you have to do for your university studies in this semester?',
                        '• What kind of sources and resources do you usually read from?',
                        '• Speak about your experience of using publications for doing your course paper in the third year of study. Which research papers have you already used or are going to use for doing your Bachelor’s or Master’s thesis? Have you faced any challenges?',
                        '• Do you find your academic reading skills efficient? Why? Why not?'
                    ]
                }/>
            }
          />
        ]}/>
    )
}