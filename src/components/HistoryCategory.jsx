import HistoryItem from "./HistoryItem"
function HistoryCategory({category}) {
    const { categoryName, items } = category
    return (
        <div className="mt-10">
            <h3 className="font-medium text-lg">{categoryName}</h3>
            <div className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-2">

                {
                    items && items.map((item) => {
                        return <HistoryItem key={item._id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default HistoryCategory