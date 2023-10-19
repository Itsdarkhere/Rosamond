'use client'
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="2px"
                color="#ff8b06"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )
}

export default ProgressProvider;