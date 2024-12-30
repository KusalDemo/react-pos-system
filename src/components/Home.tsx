import {MinQtyCard} from "./cards/MinQtyCard.tsx";
import {DefaultCard} from "./cards/DefaultCard.tsx";

export function Home() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <DefaultCard
                    thumbnail="https://media.istockphoto.com/id/960217264/photo/full-shopping-basket.jpg?s=1024x1024&w=is&k=20&c=zs-n2k05hF_vkSA7hEp-NberRbbCnQUV7BNndZOWHYE="
                    title="Products"
                    description="This is a wider card with supporting text"
                    value={123}
                    key='1'
                />
                <DefaultCard
                    thumbnail="https://media.istockphoto.com/id/1461343540/photo/happy-bank-manager-shaking-hands-with-a-client-after-successful-agreement-in-the-office.jpg?s=1024x1024&w=is&k=20&c=TdGkBuW9S26d8S8I62QjSSYu2cc_oVBivU7cn-LYq0g="
                    title="Customers"
                    description="This is a wider card with supporting text"
                    value={250}
                    key='2'
                />
                <DefaultCard
                    thumbnail="https://media.istockphoto.com/id/1584826700/photo/vertical-portrait-woman-using-a-credit-card-and-a-cellphone-doing-a-online-shopping.jpg?s=612x612&w=0&k=20&c=PJs9b8hNtcHFjaAQa8b6lNEaWVbSgPx9uyfV8KPnYW8="
                    title="Orders"
                    description="This is a wider card with supporting text"
                    value={300}
                    key='3'
                />
                <DefaultCard
                    thumbnail="https://media.istockphoto.com/id/1989636298/photo/stack-of-coins-with-up-arrow-and-percentage-symbol-for-finance-bank-increasing-interest-rate.jpg?s=1024x1024&w=is&k=20&c=hQ-2G8ebTZ41HV9u0Ut2sIXyau8Oqm91wklADil4i-M="
                    title="Income"
                    description="This is a wider card with supporting text"
                    value={100}
                    key='4'
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="md:col-span-2">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <MinQtyCard/>
                    <MinQtyCard/>
                </div>
            </div>
        </div>
    )
}