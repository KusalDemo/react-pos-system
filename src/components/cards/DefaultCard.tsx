interface DefaultCardData {
    thumbnail: string,
    title: string,
    description: string,
    value: number
}

export function DefaultCard(props: Readonly<DefaultCardData>) {

    return (
        <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden mb-3">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img
                        src={props.thumbnail}
                        alt={props.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-2/3 p-4">
                    <h5 className="text-lg font-semibold">{props.title}</h5>
                    <p className="text-gray-600">{props.description}</p>
                    <p className="text-sm text-gray-500">Rs. {props.value}</p>
                </div>
            </div>
        </div>
    )
}