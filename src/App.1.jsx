import { useState } from 'react'

export function App() {
    const [newItem, setNewItem] = useState(' ')
    const [items, setItems] = useState([])

    // funciton Function
    const addItem = () => {
        if (!newItem) {
            alert('Please Add Value')
            return
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }

        setItems((oldList) => [...oldList, items])

        setNewItem(' ')

        console.log(item)
    }
    return (
        <>
            <header className="mb-10 px-5">
                <h1 className=" text-4xl ">To Do List Apps</h1>
            </header>
            <div className="flex flex-col gap-10 px-5 text-center">
                <div className="flex border-2">
                    <input
                        type="text"
                        className="w-full rounded-lg p-5 "
                        placeholder="Enter Your Task"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button className="p-5 font-bold" onClick={() => addItem()}>
                        <p>Add</p>
                    </button>
                </div>

                {/* list */}
                {items.map((item) => {
                    return (
                        <div className="text-slate-400 " key={item.id}>
                            <div className="mb-3 flex justify-between">
                                <p className="font-bold">2 Task Left</p>

                                <button>Clear Completed</button>
                            </div>
                            <div className="flex w-full border-2 px-2 py-5">
                                <p>{item.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
