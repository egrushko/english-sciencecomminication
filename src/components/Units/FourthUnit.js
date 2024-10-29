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
import {FourthUnitBigText} from './FourthUnitBigText';
import u4t5 from "../../pdf/u4t5.pdf"
import v42 from "../../img/v42.png"
import s4 from "../../img/s4.png"

export const FourthUnit = () => {
    return(
        <Unit unitNum={4} unitTitle={"Why Don’t the Mathematicians Learn to Speak?"} names = {['Task 1','Task 2','Task 3','Task 4','Video 4.1','Task 5','Task 6','Video 4.2','Speaking']}
            tasks= {[<Task helpText = {'Read the text and choose the best version to complete each statement (1-5).'} title = {'Reading - 1'}
                        type ={[ <InlineCompareTask helpText = '' selectEWidth={630} startNum={0}
                            baseText={[<FourthUnitBigText/>]}
                            answers = {
                                [             
                                    ['to test students’ knowledge','to educate the audience in the new fields','to network with colleagues','all the statements above'],
                                    ['the speaker is not competent enough','the speaker has little idea about the audience’s knowledge in the subject',
                                    'the speaker is not well prepared for the lecture','all the statements above'],
                                    ['knows all the terminology in the field','remembers the meaning of all the symbols',
                                    'hopes to learn something from the speaker','all the statements above'],
                                    ['discussion of some examples','elimination of most details','including only key calculations','discussion of some examples, elimination of most details and only key calculations'],
                                    ['the speaker made his lecture into a memorable event',
                                    'he was quite knowledgeable and interested in topology and geometry','the speaker was talking on the subject relevant for his purposes',
                                    'all the statements above']
                                ]
                            }

                            rightAnswers = {
                                [
                                    'to educate the audience in the new fields',
                                    'the speaker has little idea about the audience’s knowledge in the subject',
                                    'hopes to learn something from the speaker',
                                    'discussion of some examples, elimination of most details and only key calculations',
                                    'the speaker made his lecture into a memorable event',
                                ]
                            }

                            toCompare={
                                [
                                    '1. The purpose of the colloquia in mathematics department is',
                                    '2. Sometimes the audience leaves the lecture disappointed because',
                                    '3. According to the author the real audience',
                                    '4. According to the author the necessary conditions for success are',
                                    '5. The author remembers the lecture by Heinz Hopf because'
                                ]
                            }/>
                            ]}
                    />,
                    <Task helpText = {''} title = {'Vocabulary - 1'}
                        type ={[ <InlineCompareTask selectEWidth={950} helpText = 'Match the words from the text with their definitions. There is one extra definition which you don’t need to use.' startNum={0}
                            answers = {
                                [             
                                    'system of specialized words and expressions used in a particular science, profession, activity etc',
                                    'studies that are done at a university after one has received one’s first degree',
                                    'all the teaching staff of a university or college, or of one department (in American English)',
                                    'one of the sections in an organization such as a government, business, or university',
                                    'university course taken by a student for receiving a Bachelor’s Degree',
                                    'a letter, sign, or figure which expresses a sound, operation, number, chemical substance etc',
                                    'a formal academic seminar or conference',
                                    'an area of knowledge or study, especially one that you study at school, college, or university',
                                    'a set of reasons that show that something is true or untrue, right or wrong etc',
                                    'the branch of mathematics concerned with generalization of the concepts of continuity, limit, etc',
                                    'the process of finding an amount or number using mathematics'
                                ]
                            }

                            rightAnswers = {
                                [
                                    'a formal academic seminar or conference',
                                    'one of the sections in an organization such as a government, business, or university',
                                    'all the teaching staff of a university or college, or of one department (in American English)',
                                    'an area of knowledge or study, especially one that you study at school, college, or university',
                                    'system of specialized words and expressions used in a particular science, profession, activity etc',
                                    'a letter, sign, or figure which expresses a sound, operation, number, chemical substance etc',
                                    'a set of reasons that show that something is true or untrue, right or wrong etc',
                                    'the process of finding an amount or number using mathematics',
                                    'studies that are done at a university after one has received one’s first degree',
                                    'the branch of mathematics concerned with generalization of the concepts of continuity, limit, etc'
                                ]
                            }

                            toCompare={
                                [
                                    '1. Colloquium',
                                    '2. Department',
                                    '3. Faculty',
                                    '4. Subject',
                                    '5. Terminology',
                                    '6. Symbol',
                                    '7. Argument',
                                    '8. Calculation',
                                    '9. Graduate study',
                                    '10. Topology'
                                ]
                            }/>,
                            <InputCheckTask startNum = {0}
                                type={'words'} 
                                useAB={true} 
                                helpText={'Complete the sentences with the words from the box. You will need one word for each pair of sentences, but think if you need a singular or a plural form in each case. There are more words in the box than you need to use.'}
                                text={[
                                    ['a) University {inputs[0]} are generally judged by their research quality.\n','b) He is a lecturer in the {inputs[1]} of psychology at Trinity College, Dublin.'],
                                    ['a) In recent years there have been many conferences, {inputs[2]} and other fora on the subject.','\nb) One of the contributors to that {inputs[3]} was a university professor who has been teaching computer science for decades.'],
                                    ['a) A drop in enrollment will affect students, {inputs[4]}, and administrators.','\nb) The {inputs[5]} agreed on a change in the requirements.'],
                                    ['a) It was an interesting programme, which gave the facts without using too much scientific {inputs[6]}.',"\nb) Plus, there's a lot of medical {inputs[7]} to get your head around."],
                                    ['a) My favourite {inputs[8]} is math.','\nb) The college offers a wide range of {inputs[9]}.'],
                                    ['a) It is better to convince by {inputs[10]} than seduce by example.','\nb) The chapters are carefully researched, and provide an engaging combination of substantial empirical detail with insightful {inputs[11]}.'],
                                    ['a) The question of which manifolds have piecewise-linear triangulations has led to much research in {inputs[12]}.','\nb) Infinitely long sentences arise in areas of mathematics including {inputs[13]} and model theory.'],
                                    ['a) Computers can perform {inputs[14]} very quickly.','\nb) We used different methods of {inputs[15]}, but we both got the same result.']
                                ]}
                                baseText={['colloquium','department','faculty','subject','terminology','symbol','argument','calculation','graduate study','topology']}
                                values={['departments','department',['colloquiums','colloquia'],'colloquium','faculty','faculty','terminology','terminology','subject','subjects','argument','arguments','topology',
                                    'topology','calculations','calculation']}/>
                            ]}
                    />,
                    <Task
                        helpText={'Find in the text below one more synonym for each group of the words 1-10.'}
                        title={'Vocabulary - 2'}
                        type={
                            <InputCheckTask helpText={''} startNum={0}
                                type={'text'} 
                                hasNumStart
                                baseText={[<FourthUnitBigText/>]}
                                text={
                                    [
                                        'chance, possibility, time, {inputs[0]}',
                                        'achievement, advancement, progress, {inputs[1]}',
                                        'to teach, to educate, to inform, {inputs[2]}',
                                        'well-informed, educated, in the know, {inputs[3]}',
                                        'not real, hypothetical, non-existent, {inputs[4]}',
                                        'complex, difficult, sophisticated, {inputs[5]}',
                                        'unintelligible, indecipherable, difficult for understanding, {inputs[6]}',
                                        'to speak, to report, to inform, {inputs[7]}',
                                        'lack of information, lack of knowledge, unawareness,  {inputs[8]}',
                                        'event, experience, moment, {inputs[9]}'
                                    ]
                                }
                                values={['opportunity','development',['to enlighten','enlighten'],'knowledgeable','imaginary','complicated','incomprehensible',['communicate','to communicate'], 'ignorance','occasion']}
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
                            baseText={[<FourthUnitBigText/>]}
                            text={['еженедельный коллоквиум на кафедре математики - {inputs[0]}',
                                'возможность для преподавательского состава и студентов - {inputs[1]}',
                                'узнавать о достижениях в математике, выходящих за пределы собственной сферы знаний - {inputs[2]}',
                                'добиваться успехов в обучении / просвещении слушателей - {inputs[3]}',
                                'в высшей степени знающий и любящий свой предмет - {inputs[4]}',
                                'обращаться не к реальным слушателям в аудитории, а к воображаемым - {inputs[5]}',
                                'знать всю терминологию в области - {inputs[6]}',
                                'помнить значение всех символов, вводимых лектором / докладчиком - {inputs[7]}',
                                'с легкостью следить за сложными аргументами и вычислениями на доске - {inputs[8]}',
                                'иметь общее математическое образование - {inputs[9]}',
                                'два года магистратуры по алгебре, анализу, геометрии и топологии - {inputs[10]}',
                                'конкретная отрасль математики - {inputs[11]}',
                                'не имеющий отношения к проблеме - {inputs[12]}',
                                'успешно общаться с реальными слушателями - {inputs[13]}',
                                'обсуждение некоторых примеров - {inputs[14]}',
                                'немного объяснения того, как эта задача возникает из классической математики - {inputs[15]}',
                                'избежание всех, кроме ключевых вычислений - {inputs[16]}',
                                'безжалостное исключение большинства деталей - {inputs[17]}',
                                'тензорное поле, комплексное многообразие - {inputs[18]}',
                                'интересное и восхитительное событие - {inputs[19]}'

                                ]} 
                            values={[
                                    'the weekly colloquium in mathematics department ',
                                    'an opportunity for faculty and students',
                                    ['to learn about developments in mathematics outside of their own area','learn about developments in mathematics outside of their own area'],
                                    ['succeed in enlightening the audience','to succeed in enlightening the audience'],
                                    'extremely knowledgeable and enthusiastic about their subject',
                                    ['not to address the real audience in the room, but an imaginary audience','not address the real audience in the room, but an imaginary audience'],
                                    ['know all the terminology in the field','to know all the terminology in the field'],
                                    ['remember the meaning of all the symbols introduced by the speaker','to remember the meaning of all the symbols introduced by the speaker'],
                                    ['follow complicated arguments and calculations on the board with ease','to follow complicated arguments and calculations on the board with ease'],
                                    ['to have a general mathematical education','have a general mathematical education'],
                                    'two years of graduate study in algebra, analysis, geometry, and topology',
                                    ['particular branch of mathematics','the particular branch of mathematics'],
                                    'irrelevant to the problem',
                                    ['communicate successfully with the real audience','to communicate successfully with the real audience'],
                                    'discussion of some examples',
                                    'some explanation of how the problem arises from the classical body of mathematics',
                                    'avoidance of all but a few key calculations',
                                    'ruthless elimination of most details',
                                    ['tensor field, complex manifold','a tensor field, a complex manifold'],
                                    'an exciting and delightful occasion'
                                    ]}/>
                }/>,
                <Task
                            helpText={'Watch the video and complete the notes below. You might need to use from one to four words to fill in the gaps 1-8.'}
                            title={'Video - 4.1'}
                            type={
                                <InputCheckTask helpText={''} startNum={0}
                                    type={'text'} 
                                    contType='none'
                                    useNums
                                    video={[""]}
                                    youtubeSrc="https://www.youtube.com/embed/rZ5rqq9oigM?si=83XT7Qe1fGWWUBHr" 
                                    textTitle="Presenting and public speaking tips"
                                    toBold={["Focus on the audience.","Delete all excess text from your slides.","Keep it simple.","Rehearse."]}
                                    text={
                                        [
                                            '#1 - Focus on the audience. Have clear purposes about your impact on the audience. Decide on what you want them to {inputs[0]} after your presentation.\n'+
                                            '#2 - Delete all excess text from your slides. Don’t waste your listeners’ time by putting {inputs[1]} on your slides. They are not going to read them but will most likely start {inputs[2]}. Don’t use slides as your {inputs[3]}. If you want to effectively get your message across use powerful {inputs[4]} instead.\n'+
                                            '#3 - Keep it simple. Include only relevant and essential material in your presentation. Learn to {inputs[5]} which doesn’t suit your purposes. Also avoid complicated and sophisticated language. Rather use {inputs[6]} to make your talk clear and understandable.\n'+
                                            '#4 - Rehearse. You need to get serious about rehearsing if you’d like to succeed as a presenter. If you don’t prepare, then {inputs[7]}.'
                                        ]
                                    }
                                    values={['think, feel and do','loads of bullet points',['daydreaming','day-dreaming'],['notes', 'speaker notes'],'images and pictures',['cut out material', 'cut out content'],'simple wording','prepare to fail']}
                                />
                            }
                        />,
                <Task 
                    title={'Vocabulary - 5'}
                    helpText = {'Complete the text below with the words from the box. There are more words in the box than you need to use.'}
                    type={[
                        <InputCheckTask 
                            startNum = {0}
                            useNums = {true}
                            contType = 'none'
                            type={'words'}
                            justText={true}
                            helpText={''}
                            links={[["link",u4t5]]}
                            toBold={["Because","On the one hand","on the other hand","Illustrated by, for example","as seen in","most important","note that","remember that","first","second","also","furthermore","moreover","therefore","finally","But","however"]}
                            text={['Signposts serve as guiding markers for the audience, helping them navigate through the speech’s content and structure with ease. The lecturer may help students to {inputs[0]} and record the main points by writing {inputs[1]} and key words on a board, by repetition, a change of voice, a meaningful {inputs[2]}, or by using such phrases as: most important, note that, and remember that, to {inputs[3]} things that you may wish to record. Words such as first, second, also, furthermore, moreover, therefore, and finally, indicate {inputs[4]} in an argument. But and however indicate a qualification. Because indicates a {inputs[5]}. On the one hand and on the other hand indicate a {inputs[6]}. Illustrated by, for example, and as seen in, indicate an {inputs[7]}. All these words, although students may not record them, help them to make good notes and to follow the speaker’s message effectively.\nClick on the link to see the list of signposts which you might want to use in your own presentation.']}
                            baseText={['pause','reason','select','stages','comparison','headings','contrast','graphs','example','emphasize']}
                            values={['select','headings','pause','emphasize','stages','reason','contrast', 'example']}/>
                        ] 
                }/>,
                <Task 
                            title={'Vocabulary - 6'}
                            helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line.'}
                            type={
                                [
                                    <InputCheckTask 
                                        startNum = {0}
                                        useNums = {true}
                                        contType = 'none'
                                        type={'line'}
                                        justText={true}
                                        helpText={''}
                                        text={['Eye contact: This helps to regulate the flow of communication. It signals interest in others and increases the speaker`s \n{inputs[0]} . Speakers who make eye contact, open the flow of communication and convey interest,\nconcern and {inputs[1]} .\nFacial Expressions: Smiling is a {inputs[2]} cue that transmits friendliness and liking. So, if you smile frequently you will be perceived as more likable, friendly, warm, and {inputs[3]} . Smiling is often contagious, and others will react {inputs[4]} . They will be more comfortable around you and will want to listen to you more.\nGestures: If you fail to gesture while speaking, you may be perceived as {inputs[5]} and stiff. A lively speaking style captures attention and makes the material more interesting and {inputs[6]} understanding.\nPosture and body orientation: You communicate numerous messages by the way you talk and move. Standing erect and leaning forward communicates that you are approachable, receptive, and friendly. Speaking with your back turned or looking at the floor or ceiling should be avoided as it communicates {inputs[7]}.\nVoice: One of the major {inputs[8]} of speakers is that they speak in a monotone voice. Listeners perceive this type of speaker as boring and dull. People report that they learn less and lose interest more quickly when listening to those who have not learned to {inputs[9]} their voices.']}
                                        //Наличие этой строки почему-то ломают ввод текста        
                                        // toBold={["Eye contact","Facial Expressions","Gestures","Posture and body orientation","Voice"]}
                                        baseText={['CREDIBLE','WARM','POWER','APPROACH','FAVOUR','BORE','FACILITY','INTERESTING','CRITICAL','MODULATION']}
                                        values = {['CREDIBILITY','WARMTH','POWERFUL','APPROACHABLE','FAVOURABLY','BORING','FACILITATES','DISINTEREST','CRITICISMS','MODULATE']}
                                    />
                                ]
                                
                            }
                        />,
                <Task
                        helpText={'Watch the video, take notes to answer the questions and to complete the chart below. Be ready to discuss this information IN CLASS.'}
                        title={'Video - 4.2'}
                        type={
                            <VideoShow
                                justText
                                image = {v42}
                                text={['How does the information about the importance of nonverbal communication presented in this video compare with the one presented in Task 6:','       • What is similar?','       • What is different?']}
                                video={""} 
                                youtubeSrc="https://www.youtube.com/embed/XGT-cEKYPsU?si=s_fj03LmLQRdyMwl" 
                            />
                        }
                    />,
                    <Task
                    title={'Speaking in personal context'}
                    helpText={'Be ready to speak in CLASS about your own experience of public speaking. Use the questions as the guidelines for your talk.'}
                    type={
                        <TextAndImageShow
                        image = {s4}
                        text={
                            [
                                '• When was the last time that you had to make a presentation and speak before your fellow students at the university? What was the subject of the presentation? Was it in Russian or in English? How did you feel about it?',
                                '• Have you ever been a speaker at a real-life event but not just presenting your home assignment in the classroom? What kind of event was that? Was it a successful and enjoyable experience for you? Why?',
                                '• Which recommendations about body language and nonverbal communication do you find most challenging to follow? And which of them should be an absolute must? Why?',
                                '• Do you find your public speaking skills efficient? Why? Why not?',
                                '• Are you planning to do public speaking in the future? What kind of occasion might that be?'
                            ]
                        }/>
                    }
                />

            ]}
        />
    )
}