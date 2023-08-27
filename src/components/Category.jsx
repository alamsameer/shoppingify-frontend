import Item from "./Item";
function Category({ category }) {
    const { categoryName, items } = category
    return (
        <div className="mt-10">
            <h3 className="font-medium md:text-xl">{categoryName}</h3>
            <div className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-2">

                {
                    items && items.map((item) => {
                        return <Item key={item._id} item={item} categoryName={categoryName} />
                    })
                }
            </div>
        </div>
    )
}

export default Category