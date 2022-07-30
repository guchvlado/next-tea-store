import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ITeaItem } from "../../types/ITeaItem"

const TeaItem = ({ id, imageUrl, price, title }: ITeaItem) => {

    const [weight, setWeight] = useState(100)

    return (
        <div className="w-full hover:scale-105 transition-transform">
            <Link href={`/tea/${id}`}>
                <a>
                    <Image
                        src={imageUrl}
                        alt="tea"
                        height={190}
                        width={260}
                    />
                </a>
            </Link>
            <h3 className="font-bold text-xl text-center mt-3.5">{title}</h3>
            <div className="flex items-center justify-between mt-2">
                <select
                    name="weight"
                    id="weight"
                    className="w-[160px] h-[40px] border border-[#2EAA76] rounded-md cursor-pointer px-4"
                    value={weight}
                    onChange={(e) => setWeight(+e.target.value)}>
                    <option value="50">50 г.</option>
                    <option value="100">100 г.</option>
                    <option value="200">200 г.</option>
                    <option value="300">300 г.</option>
                </select>
                <div className="flex flex-1 justify-center font-bold">{price * weight / 100} руб</div>
            </div>
            <div className="button_item duration-300 group">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-white duration-300" d="M10 7V10V7ZM10 10V13V10ZM10 10H13H10ZM10 10H7H10ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#2EAA76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Добавить
                <div className="rounded-full bg-maingreen text-white w-6 h-6 flex items-center justify-center text-sm group-hover:bg-white group-hover:text-maingreen duration-300">2</div>
            </div>
        </div>
    )
}

export default TeaItem