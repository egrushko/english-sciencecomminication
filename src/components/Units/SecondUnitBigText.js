import '../../css/SecondUnitBigText.css'
import table from '../../img/unit2table.png'

export const SecondUnitBigText = () => {
    return(
        <div className={'flex-column'}>
            <h3 className={'text-title'}>How to read a scientific paper?</h3>
            <p>Whenever you pick up any scientific paper, it’s worthwhile breaking your reading of the paper into three steps.</p>
            <h3 className={'text-title-little'}>Step 1: An overview</h3>
            <p>
            Start by ‘skimming’ the paper. What journal published the paper? Who wrote it? How many sections are there in the article?
            What are their headings? Take a look at the references. Do the authors cite other papers you know? Books you are familiar with?
            What fields are represented in the citations? Finally, read the abstract. A well-written abstract should clearly reveal the type of
            paper you are reading. Let’s have a look at some types of scientific papers you are most likely to encounter in the table.
            </p>
            <img src={table}/>
            <h3 className={'text-title-little'}>Step 2: Read for understanding</h3>
            <p>
            The most important thing to remember when reading science is to read actively. This can be an exhausting experience! 
            Don’t be surprised if reading a 2-3 page paper takes you 3-4 hours. If you are reading a mathematical paper and working through each proof,
            it can take even longer. It is useful to read with a pen in hand. Jot notes, underline key phrases, note words you do not know, etc. 
            It is likely that there will be many words in an article that you do not know. You need to decipher the meaning of these words. You can work from context,
            or you may need to look the words up. Depending on the field of the paper, a specialized dictionary may be necessary. Many such dictionaries are now available online.
            </p>
            <h3 className={'text-title-little'}>Step 3: Reflect</h3>
            <p>
            Up till now you have been working to understand what the author is saying. Once you have understood the paper, it is time to assess 
            it and to determine the level of the relevance of the paper to your research interests. As with almost every field of human endeavor, 
            practice makes perfect. The more you read scientific literature and the greater the effort you make to read actively, the easier the process will become. Keep reading!
            </p>
        </div>
    )
}