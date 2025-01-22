

interface IChooseProps{
    title: string
    description: string

}
const ChooseItem:React.FC<IChooseProps> = ({title,description})=> {


    return (
      <div >
        <h3 className="text-[38px] ">{title}</h3>
        <p className="font-light mt-3">
        {description}
        </p>
      </div>
    );
}

export default ChooseItem