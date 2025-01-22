



interface IProps{
    data: {
        name: string,
        price: string,
        image:string
    }
}
const FlowerCatItem:React.FC<IProps> = ({data})=> {
    return (
      <div
        className=" bg-cover bg-center h-[50%] border border-black flex justify-center items-end "
        style={{
          backgroundImage: `url(assets/images/${data?.image})`,
          height:"100%"
        }}
      >
        <div className="mb-3 text-center">
          <p>{data?.name}</p>
          <p className="text-xs text-[#808080]">{data?.price}</p>
        </div>
      </div>
    );
}


export default FlowerCatItem