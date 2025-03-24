'use client'

import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToogle() {

    const { theme, setTheme } = useTheme()

    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className='btn btn-outline rounded-full'>

                {/* <FaSun className=' h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0'></FaSun> */}

                <FaMoon className=' h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100'></FaMoon>

            </button>
        </div>
    )
}
