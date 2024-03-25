interface BackgroundChanger {
    bgColor: string,
    textColor: string,
    setBgColor: Function
}

const BgChangeButton: React.FC<BackgroundChanger> = ({bgColor, textColor, setBgColor}) => {
    return (
        <button className='px-4 py-1 text-white rounded-3xl shadow-lg' style={{backgroundColor: bgColor, color: textColor}} onClick={() => setBgColor(bgColor)}>{bgColor}</button>
    )
}

export default BgChangeButton;