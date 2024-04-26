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
import {ThirdUnitBigText} from  './ThirdUnitBigText.js'
import {ImagesTask} from '../Tasks/ImagesTask.js'

import video31 from '../../videos/video 3.1.mp4'
import video32 from '../../videos/video 3.2.mp4'
import u3s11 from '../../videos/u3s11.mkv'
import u3s12 from '../../videos/u3s12.mkv'
import u3s13 from '../../videos/u3s13.mkv'
import u3s14 from '../../videos/u3s14.mkv'
import u3s15 from '../../videos/u3s15.mkv'
import u3s16 from '../../videos/u3s16.mov'

import speaking from '../../img/speaking3.png'

export const ThirdUnit = () => {
    return(
        <Unit unitTitle={"Improving Power Point Presentations"} unitNum={3} names = {['Task 1','Task 2','Task 3','Task 4',"Video 3.1",'Speaking 1','Task 5','Task 6','Video 3.2','Speaking 2']}
            tasks= {
                [
                    <Task 
                        title='Reading - 1' 
                        helpText={'Read the text and choose the correct option as a title for each paragraph A - I.\nThere is one extra paragraph which you do not need to use.'} 
                        type={
                            <CompareTextTask startNum = {0}
                                helpText={''} 
                                useLettersInCheck={true}  
                                baseText={["                                                                      Improving Power Point Presentations",'',"\nThe de facto software for most meetings is computer-based presentation software, most commonly Microsoft Power Point. PowerPoint is a powerful tool to assist in communicating ideas and results to an audience. But how can one use this software more effectively and more efficiently?\n\nThe first step in creating a presentation is to decide what the main points are that you wish to communicate and just what you want your audience to remember. The next step is to decide what data you will need to show to support those points. The last step is to create the presentation. Below are some points for consideration as you prepare for scientific presentations."]}
                                collage={true} 
                                afterText ="Great presentations don’t happen by accident. They require careful planning and preparation. Certainly, the most important element of a successful presentation is the content itself, including how it is organized. As we improve our use of presentation software, the quality of our scientific meetings will also improve."
                                answers={[null, 'Too much information on a slide','Hard to read fonts','Color','Overusing bullet lists','Animations','Slide transitions','Pointing tools','Equipment used for presentation']}
                                rightAnswers={['Animations','Pointing tools','Too much information on a slide', null ,'Hard to read fonts','Color','Slide transitions','Overusing bullet lists','Equipment used for presentation']} 
                                headings={[
                                    'A. Animated graphic images might be fun for some projects, but in a scientific meeting presentation they tend to draw attention to themselves and obscure the message.',
                                    'B. Laser pointers are handy for directing attention to items on a slide. Don’t wave a pointer at an object very quickly because it will make it hard for the audience to clearly know what is being emphasized.',
                                    'C. Avoid slides cluttered with too much, or irrelevant information. A title along with three to four rows of information is usually sufficient.',
                                    'D. To the extent possible, you also want to know your room layout ahead of time so you can plan how you will move about during your presentation. Consider, for example, using a remote-controlled mouse that enables you to advance your slides without having to be tied to the computer keyboard, thus helping you interact more naturally with your audience.',
                                    'E. Stick to fonts that are likely to be found on any computer, such as Arial or Times New Roman. Use bold fonts for emphasis, not for general text. Limit the use of decorative fonts, which are hard to read when projected. Try to limit yourself to two to three fonts during a presentation.',
                                    'F. Use the Color/Grayscale button on PowerPoint’s main toolbar to preview a slide in gray tones to see if there’s enough contrast without color. Avoid using photos as a background for text except perhaps for title slides.',
                                    'G. We suggest using a single subtle transition effect between slides throughout the presentation. Sound effects with transitions tend to distract from the information being presented.',
                                    'H. Using only slide after slide of bullet lists will cause your audience to lose interest. When you use bullets, don’t put too much text in them; a single word or two is sufficient to be a cue for the audience and the presenter. Try mixing bullet lists with graphics, charts, or other types of slides.',
                                    'I. Arrive at the room early to leave enough time for the moderator to load your presentation onto the computer and to make sure it works properly. Even better, contact moderators ahead of time and provide them with a USB flash drive or perhaps e-mail the presentation to ensure it will function properly on their equipment.'
                                        ]}
                            />
                        } 
                    />,
                    <Task 
                        helpText = {''}
                        title = 'Vocabulary - 1'
                        type = {[
                            <InlineCompareTask helpText = 'Match the words from the text with their definitions. There is one extra definition which you don’t need to use.' startNum={0}
                                answers = {
                                    [             
                                        'a printed symbol, such as a square or circle, that appears before important things on a list, used in order to emphasize each thing',
                                        'information in a form that can be processed by and stored in a computer system',
                                        'the subject matter, especially the ideas, of a book, speech etc.',
                                        'the manager of a public discussion who makes certain that it happens without problems and follows the rules',
                                        'a strip of icons across the top of most Windows applications, used to provide quick access to certain important features',
                                        'a set of letters, numbers and other symbols in a particular style',
                                        'the set of systems in the form of programs which is stored on disk and controls the operation of a computer',
                                        'the main idea that a speaker is trying to communicate',
                                        'a way of presenting information, usually by putting it into vertical rows and boxes on a sheet of paper, so it can be easily understood',
                                        'a picture or photograph, especially one shown on a computer or television screen',
                                        'a small piece of equipment that you connect to a computer or other piece of electronic equipment to copy and store information'
                                    ]
                                }

                                rightAnswers = {
                                    [           
                                        'the set of systems in the form of programs which is stored on disk and controls the operation of a computer',  
                                        'a picture or photograph, especially one shown on a computer or television screen',
                                        'the main idea that a speaker is trying to communicate',
                                        'a set of letters, numbers and other symbols in a particular style',
                                        'a strip of icons across the top of most Windows applications, used to provide quick access to certain important features',
                                        'a printed symbol, such as a square or circle, that appears before important things on a list, used in order to emphasize each thing',
                                        'a way of presenting information, usually by putting it into vertical rows and boxes on a sheet of paper, so it can be easily understood',
                                        'the manager of a public discussion who makes certain that it happens without problems and follows the rules',
                                        'a small piece of equipment that you connect to a computer or other piece of electronic equipment to copy and store information',
                                        'the subject matter, especially the ideas, of a book, speech etc.',
                                    ]
                                }
                                toCompare={
                                    [
                                        '1. Software','2. Image','3. Message','4. Font','5. Toolbar','6. Bullet list','7. Chart','8. Moderator','9. Flash drive','10. Content'
                                    ]
                                }
                            />,
                            <InputCheckTask startNum = {0}
                                type={'words'} 
                                useAB={true} 
                                helpText={'Complete the sentences with the words from the box. You will need one word for each pair of sentences, but think if you need a singular or a plural form in each case. There are more words in the box than you need to use.'} 
                                baseText={['software','image','message','font','toolbar','bullet list','chart','moderator','flash drive','content']}  
                                text ={['a) The {inputs[0]} allowed each side two minutes to sum up at the end of the televised debate.\n'+
                                    'b) In panel discussions commonly held at academic conferences, the {inputs[1]} usually introduces the participants and solicits questions from the audience.\n',
                                    'a) You can rotate {inputs[2]}, resize it, zoom in, zoom out, or adjust its colour.\n'
                                    +'b) The new scanner delivers exceptional {inputs[3]} quality and reliability.\n'
                                    ,'a) These folders can be on the local drive, on an external device such as a {inputs[4]}, or on a network share from another computer.\n'
                                    +'b) The capability to back up files to a {inputs[5]} was introduced in this release.\n',
                                    'a) The {inputs[6]} shows a top-down communication model.\n'
                                    +"b) The appendices contain letters and {inputs[7]} with important data that not only support the book's arguments, but also open new ways for future investigations.\n",
                                    'a) We need to send a clear {inputs[8]} that pollution will not be tolerated.\n'+
                                    'b) Speakers demonstrate skill by tailoring their {inputs[9]} specifically enough.\n',
                                    'a) Avoid creating a {inputs[10]} in which one or more items consist of a very long sentence or more than one sentence; if this is the case, it’s better to use traditional sentence form.\n'+
                                    'b) As keeping a reader’s attention becomes more and more challenging, {inputs[11]} enable the reader to quickly scan information in a condensed format.\n',
                                    'a) Early {inputs[12]} was written for specific computers and sold with the hardware it ran on.\n'+
                                    'b) {inputs[13]} can be found on vendor websites or application service provider websites.\n',
                                    'a) {inputs[14]} are the backbone of all the visual content we consume every day, yet they often go unnoticed.\n'+
                                    'b) Knowing the importance of making study materials accessible and appropriate to target individuals, we used large {inputs[15]} for leaflets and posters to make them easier to read.'
                                    ]} 
                                values={['moderator','moderator','image','image','flash drive','flash drive','chart','charts','message','messages','bullet list','bullet lists','software','software','fonts','fonts'
                            ]}/>
                        ]} 
                    />,
                    <Task
                        helpText={'Find in the text below one more synonym for each group of the words 1-10.'}
                        title={'Vocabulary - 2'}
                        type={
                            <InputCheckTask helpText={''} startNum={0}
                                type={'text'} 
                                baseText={[<ThirdUnitBigText/>]}
                                hasNumStart
                                text={
                                    [
                                        'strong, potent, robust, {inputs[0]}',
                                        'instrument, device, implement, {inputs[1]}',
                                        'public, attendees, spectators, {inputs[2]}',
                                        'effectively, productively, proficiently, {inputs[3]}',
                                        'unrelated, inapplicable, inappropriate,  {inputs[4]}',
                                        'enough, adequate, satisfactory, {inputs[5]}',
                                        'to confuse, to mislead, to disorient, {inputs[6]}',           
                                        'to draw one’s attention from, to take the mind off, to sidetrack, {inputs[7]}',
                                        'convenient, helpful, useful, {inputs[8]}',
                                        'to underline, to highlight, to stress, {inputs[9]}',
                                    ]
                                }
                                values={['powerful',
                                'tool',
                                'audience',
                                'efficiently',
                                'irrelevant',
                                'sufficient',
                                ['to obscure','obscure'],                       
                                ['to distract','to distract from','distract','distract from'],
                                'handy',
                                ['to emphasize','emphasize']
                                ]}
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
                            baseText={[<ThirdUnitBigText/>]}
                            text={['компьютерное ПО для презентаций - {inputs[0]}',
                                'сообщать идеи и результаты слушателям - {inputs[1]}',
                                'использовать это программное обеспечение более эффективно и продуктивно - {inputs[2]}',
                                'некоторые пункты/аспекты для рассмотрения, когда вы готовитесь к научным презентациям - {inputs[3]}',
                                'слайды, переполненные избыточной или не относящейся к делу информацией - {inputs[4]}',
                                'трудные для чтения шрифты - {inputs[5]}',
                                'использовать жирный шрифт для выделения / акцентирования - {inputs[6]}',
                                'ограничивать использование декоративных шрифтов - {inputs[7]}',
                                'предварительно просматривать слайд в серых тонах, чтобы увидеть наличие достаточного контраста цветов - {inputs[8]}',
                                'чрезмерное использование маркированных списков - {inputs[9]}',
                                'сочетать маркированные списки с графическими средствами, таблицами или другими типами слайдов - {inputs[10]}',
                                'анимированные графические изображения - {inputs[11]}',
                                'использовать единообразный ненавязчивый эффект перехода между слайдами на протяжении всей презентации - {inputs[12]}',
                                'направлять внимание на пункты/вопросы на слайде - {inputs[13]}',
                                'загрузить презентацию на компьютер и убедиться, что она работает должным образом - {inputs[14]}',
                                'связаться с модераторами заранее - {inputs[15]}',
                                'заранее знать планировку помещения  - {inputs[16]}',
                                'листать слайды без необходимости быть привязанным к компьютерной клавиатуре - {inputs[17]}',
                                'требовать тщательного планирования и подготовки - {inputs[18]}',
                                'самый важный элемент успешной презентации - {inputs[19]}',
                                
                                ]} 
                            values={[
                                    'computer-based presentation software',
                                    ['communicate ideas and results to an audience','to communicate ideas and results to an audience'],
                                    ['to use this software more effectively and more efficiently','use this software more effectively and more efficiently'],
                                    'some points for consideration as you prepare for scientific presentations',
                                    'slides cluttered with too much, or irrelevant information',
                                    'hard to read fonts',
                                    ['to use bold fonts for emphasis','use bold fonts for emphasis'],
                                    ['to limit the use of decorative fonts','limit the use of decorative fonts'],
                                    ['to preview a slide in gray tones to see if there is enough contrast without colour','preview a slide in gray tones to see if there is enough contrast without colour'],
                                    'overusing bullet lists',
                                    ['to mix bullet lists with graphics, charts, or other types of slides','mix bullet lists with graphics, charts, or other types of slides'],
                                    'animated graphic images',
                                    ['to use a single subtle transition effect between slides throughout the presentation','use a single subtle transition effect between slides throughout the presentation'],
                                    ['to direct attention to items on a slide','direct attention to items on a slide'],
                                    ['to load your presentation onto the computer and to make sure it works properly','load your presentation onto the computer and to make sure it works properly'],
                                    ['to contact moderators ahead of time','contact moderators ahead of time'],
                                    ['to know your room layout ahead of time','know your room layout ahead of time'],
                                    ['to advance your slides without having to be tied to the computer keyboard','advance your slides without having to be tied to the computer keyboard'],
                                    ['to require careful planning and preparation','require careful planning and preparation'],
                                    'the most important element of a successful presentation'
                                    ]}/>
                            }
                        />,
                        <Task 
                            helpText = ''
                            title='Video - 3.1'
                            type={
                                [
                                    <TrueFalseTask helpText='As you watch the video mark (T) the points discussed in the video and mark (F) the points not discussed in the video.'
                                    video={video31}
                                    youtubeSrc="https://www.youtube.com/embed/d5dBGppo-iA?si=CqWheDarFRoO_jJ2"
                                    textTitle={''}
                                    startNum={0}
                                    statements={
                                        [
                                            '• Too much information on a slide',
                                            '• Hard to read fonts',
                                            '• Colour',
                                            '• Overusing bullet lists',
                                            '• Animations',
                                            '• Slide transitions',
                                            '• Pointing tools',
                                            '• Equipment used for presentation'
                                        ]
                                    }

                                    answers = {
                                        [
                                            [true,false],[true,false],[true,false],[true,false],[true,false],[false,true],[false,true],[false,true],
                                        ]
                                    }
                                    />,
                                    <InputCheckTask startNum = {0}
                                        useNums = {true}
                                        contType = 'none'
                                        type={'words'}
                                        useInputLength
                                        video={" "}
                                        baseText={['Slide transitions',
                                        'Too much information on a slide',
                                        'Colour',
                                        'Overusing bullet lists',
                                        'Spelling mistakes',
                                        'Animations',
                                        'Choosing fonts',
                                        'Too many slides',
                                        'Too much text on a slide',
                                        'Pointing tools']}
                                        helpText={'Watch the video again and put the discussed points from the box in the correct order. There are more points in the box than you need to use. Be ready to discuss the main issues in CLASS.'}
                                        text={['{inputs[0]}\n\n{inputs[1]}\n\n{inputs[2]}\n\n{inputs[3]}\n\n{inputs[4]}\n\n{inputs[5]}\n\n{inputs[6]}\n\n{inputs[7]}\n\n']}
                                        values={['Too much text on a slide','Spelling mistakes','Overusing bullet lists','Colour','Too many slides','Too much information on a slide','Animations','Choosing fonts']}/>
                                ]
                            }
                        />,
                        <Task 
                        title={'Speaking - 1'}
                        helpText = {'Look at the real students presentations (A-F). Be ready to discuss in CLASS the following points:'}
                        type={[
                            <ImagesTask
                                images={[u3s11,u3s12,u3s13,u3s14,u3s15,u3s16]}
                                youtubeLinks={[
                                    "https://www.youtube.com/embed/6b5yduxPS4o?si=JrKXJ8CUUHfR1CN5",
                                    "https://www.youtube.com/embed/iPi-jJr7kwQ?si=FO33wroffRGKQp3q" ,
                                    "https://www.youtube.com/embed/Vmtq9xy-i_I?si=LMGVs4kudGCoHRCF",
                                    "https://www.youtube.com/embed/4fdeUk8858I?si=Ng-aK3kuMtQqZQRs" ,
                                    "https://www.youtube.com/embed/2ziCdwU4cTA?si=bo-lwRJyQ13forNc" ,
                                    "https://www.youtube.com/embed/TJ-0uPlS6XA?si=swfLxImJKC2zsfcf",
                                    
                                ]}
                                useLetters
                                helpText={''}
                                text={['• Does each slide show have a clear visual message? Is it possible to reconstruct the verbal part of each slide in presentations?','• What are the strong sides of each slide show? And what could or should be improved? Why?','• Have you got an experience of making presentations on the similar topics in different years of your study?']}
                            />
                                ]
                            }                                           
                        />,
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
                                text={['If you are going in for PowerPoint {inputs[0]} presentations, remember you’ll need to set it all up. At best you simply slip a CD or {inputs[1]} into an existing machine, and your show is on the screen in seconds. But there may not be a computer, or a projector, or a {inputs[2]}, or a mouse, or any power! If you are using PowerPoint for your presentation, it is good insurance to print three-slides-per-page or six-slides-per-page {inputs[3]} as well, so that you can at least use the materials you’ve prepared if you can’t get your show on the screen on the day. Following a belt and \n{inputs[4]} approach makes a lot of sense, which means being careful - taking double measures to avoid risk and to achieve a desired result. Check out whether there will be any technical {inputs[5]} on the day. They can take a lot of the worry out of the technical side of your presentation when you are using {inputs[6]} media.']}
                                baseText={['handouts','expensive','complex','remote control','braces','support','slide show','USB flash drive','transparencies','moderator']}
                                values={['slide show','USB flash drive','remote control','handouts','braces','support','complex']}/>
                                ]
                            }                                           
                        />,
                        <Task 
                            title={'Vocabulary - 5'}
                            helpText={'For questions 1-10, read the text below. Use the word given in capitals in the box to form a word that fits in the gap in each line.'}
                            type={
                                [
                                <InputCheckTask startNum = {0} textTitle = {"Designing slides for your presentation"} useNums={true}
                                baseText={['CLARIFY','VISION','SURE','MINIMIZE','CONTINUE','PATTERN','READ','CONSISTENT','LINE','PERSONALISE']}
                                helpText=''
                                text={['Good presentation design should complement what you are communicating, highlighting key points and data that support what you are saying. There are several key elements to designing a good set of slides. {inputs[0]} is certainly important. Remember that your {inputs[1]} aids should support your message, not distract from it. Focus on communicating just one key message per screen. Limit the use of animations to {inputs[2]} they have impact. Keep text to a {inputs[3]}; your audience can’t read lots of text and listen to you at the same time. If you want to have your audience read a key quotation or piece of text, stop talking and give them a moment to do so before {inputs[4]} Choose a simple colour scheme and stick to it. Avoid using {inputs[5]} backgrounds. Consider the contrast of your colours; you need to ensure that the content on your slide is easily {inputs[6]}. If in doubt, a pale off-white background with dark text works well. Pick two good fonts and use them {inputs[7]} throughout your presentation. To emphasise a word, use bold, rather than {inputs[8]} or italicising it. Consider the context of your presentation when choosing your fonts. Fonts have {inputs[9]}; make sure that the fonts you choose convey the appropriate tone for your audience and purpose.']}
                                contType='none'
                                type = 'line'
                                values = {['CLARITY','VISUAL','ENSURE','MINIMUM','CONTINUING','PATTERNED','READABLE','CONSISTENTLY','UNDERLINING',['PERSONALITIES','PERSONALITY']]}
                                />
                                ]
                            }
                        />,
                        <Task
                            helpText={'Watch the video and complete the videoscript below. You might need to use from one to three words to fill in the gaps 1-10.'}
                            title={'Video - 3.2'}
                            type={
                                <InputCheckTask helpText={''} startNum={0}
                                    type={'text'} 
                                    contType='none'
                                    useNums
                                    video={video32}
                                    youtubeSrc="https://www.youtube.com/embed/77g7WxQr5og?si=kZwWP9SxYUINpWYp" 
                                    textTitle="Creative Presentation Ideas"
                                    text={
                                        [
                                            'The first on our list is simple and, quite frankly, it makes your life easier. Have you ever heard: “Less is more”? Well, being minimal is just there. You find just the right amount of visuals and information to get your point across without overdoing it. Look at these slides here. They look clean; they make you {inputs[0]}. Too much information or visuals everywhere can create {inputs[1]}. The trick – not being boring you must find the right {inputs[2]} between simple yet intriguing. Now, one rule that {inputs[3]} is having one standard transition between slides. I get it. You want to be creative and have fun when creating your slides but do your audience a {inputs[4]} and have all of your slides transition {inputs[5]} just like we have here. Whatever you do, don’t have one transition moving {inputs[6]}, the next backwards, the next faded in. You get the point. By having one {inputs[7]} transition style you create a flow that will be easy for your {inputs[8]} to adjust to. And why keep it to just your slides? Once you’re comfortable, try adding horizontal transitions through text and visual elements as well - for added appeal. When your presentation starts to become flooded with information, a good idea is to throw in a slide of a related quote. It helps break up your presentation giving your viewers a breather of sorts. Think of it as a {inputs[9]}. Just make sure that the quote fits in with the rest of your presentation. It’s supposed to be a breather not a range confusing your onlookers.'
                                        ]
                                    }
                                    values={['feel at ease','the opposite effect','balance','people often break','favour','horizontally','upwards','unified','viewers','commercial on TV']}
                                />
                            }
                        />,
                        <Task
                            title={'Speaking in personal context'}
                            helpText={'Be ready to speak in CLASS about your own experience of creating visual aids for your presentation. Use the questions as the guidelines for your talk.'}
                            type={
                                <TextAndImageShow
                                image={speaking}
                                text={
                                    [
                                        '• What computer-based presentation software have you used? Which of those do you prefer? Why?',
                                        '• Which recommendations from the text in Task 3 and Video 3.1 do you find most challenging to follow? And which of them should be an absolute must? Why?',
                                        '• Do you find your skills at creating presentation slides efficient? Why? Why not?',
                                        '• In which subjects do you have to create presentations as part of your assignments in this semester? How much time does it usually take you?',
                                        '• Speak about your experience of public speaking in real life, e.g. at a conference? How did you feel about it? Are you planning to do so in the future?'
                                    ]
                                }/>
                            }
                        />,
                        
                ]
            }
        />
    )
}