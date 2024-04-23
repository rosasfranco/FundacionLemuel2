const Card = ({ title, fecha, texto, img, link }) => {
    return (
        <a rel="noopener noreferrer" href={link} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <div className="relative">
                <div className="absolute top-4 left-4 bg-blue-700 shadow-sm shadow-black text-white w-auto px-2 h-6 flex items-center justify-center rounded-md">
                    <a href="#" class="uppercase font-bold tracking-wide text-white text-sm">Social</a>
                </div>
            </div>
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={img} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
            </div>
        </a>
    )
}
export default Card