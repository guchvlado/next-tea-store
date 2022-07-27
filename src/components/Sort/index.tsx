import { useState } from "react"
import { SortPropertyEnum } from "../../types/EnumSortProperty"

const sortList = [
    {name: 'Популярности DESC', sortProperty: SortPropertyEnum.RATING_DESC},
    {name: 'Популярности ASC', sortProperty: SortPropertyEnum.RATING_ASC},
    {name: 'Цене DESC', sortProperty: SortPropertyEnum.PRICE_DESC},
    {name: 'Цене ASC', sortProperty: SortPropertyEnum.PRICE_ASC},
    {name: 'Алфавиту DESC', sortProperty: SortPropertyEnum.TITLE_DESC},
    {name: 'Алфавиту ASC', sortProperty: SortPropertyEnum.TITLE_ASC}
]

const Sort = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <div className="flex items-center gap-2">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span className="text-maingreen border-dashed border-b border-maingreen cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}>popular</span>
            </div>
            {isOpen && <div className="absolute right-0 mt-4 bg-white shadow-md rounded-lg w-[160px] z-10">
                <ul>
                    {sortList.map((item, index) =>
                        <li
                            key={index}
                            onClick={() => console.log(1)}
                            className={`cursor-pointer px-4 py-4 hover:bg-lightgreen ${index === 0 ? 'text-maingreen bg-lightgreen font-bold' : ''}`}
                        >{sortList[index].name}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default Sort