import logoImg from '/quiz-logo.png'

export default function Header(){

    return (
        <div className='flex flex-col text-center w-full justify-center p-5 pt-10'>
            <img src={logoImg} className='max-w-12 max-h-12 self-center' alt='Quiz Logo'/>
            <h1 className='text-2xl font-mono font-semibold text-purple-700'>React Quiz</h1>
        </div>
    )
}