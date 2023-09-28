export default function Header () {
    return (
        <>
            <header className="bg-primary p-2 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                    <img src="/trollface.svg"/>
                    <h1>meme Generator</h1>
                </div>
                <p>Smile 😊</p>
            </header>
        </>
    );
}