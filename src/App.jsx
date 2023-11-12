import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
    const [newItem, setNewItem] = useState(' ')
    const [items, setItems] = useState([])

    // Dark Mode
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    // funciton Function
    const addItem = () => {
        if (newItem === ' ') {
            alert('Please Add Value')
            return
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }

        setItems((oldList) => [...oldList, item])

        setNewItem(' ')
    }

    // delete item function
    const deleteItem = (id) => {
        const newArray = items.filter((item) => item.id !== id)
        setItems(newArray)
    }

    //task count
    const taskCount = () => {
        return items.length
    }
    return (
        <div className=" h-screen duration-300 dark:bg-zinc-800 dark:text-white">
            <header className="mb-5 flex justify-between p-5 duration-300 dark:bg-zinc-800 dark:text-white">
                <h1 className=" text-2xl ">To Do List Apps</h1>
                <div className="flex cursor-pointer gap-5">
                    <span
                        className="material-icons-outlined"
                        onClick={handleTheme}
                    >
                        {`${theme}_mode`}
                    </span>
                </div>
            </header>
            <div className="flex flex-col gap-10 px-5 text-center  duration-300 dark:bg-zinc-800 dark:text-white">
                <div className="flex border-2">
                    <input
                        className="w-full rounded-lg p-5 "
                        placeholder="Enter Your Task"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button className="p-5 font-bold" onClick={() => addItem()}>
                        <p>Add</p>
                    </button>
                </div>
                <div>
                    <h1> {taskCount()} Taks Left</h1>
                    {/* list */}
                    {items.map((item) => {
                        return (
                            <div className="text-slate-400 " key={item.id}>
                                <div className="flex w-full justify-between border-2 px-2 py-5">
                                    <p>{item.value}</p>
                                    <button onClick={() => deleteItem(item.id)}>
                                        <p className="text-right">
                                            Clear Completed
                                        </p>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default App
